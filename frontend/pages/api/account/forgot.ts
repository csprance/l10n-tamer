import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import Joi from 'joi';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import nodemailer from 'nodemailer';
import { getClientIp } from 'request-ip';

import { APPLICATION_NAME } from '@/constants';
import { logEvent } from '@/features/events/lib';
import {
  DoesUserExistDocument,
  DoesUserExistQuery,
  EventType_Enum, InsertPasswordResetTokenDocument,
  InsertPasswordResetTokenMutation,
} from '@/graphql/graphql';
import { initializeApollo } from '@/lib/apollo';
import { withJoi } from '@/lib/validations';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '32kb',
    },
  },
};

/**
 * This is an API route that allows a user to start the password reset process
 * It is wrapped with withIronSessionApiRoute and withJoi
 * Since this writes to the DB it is event logged with hasura
 * @location /api/auth/forgot
 * @method: POST
 * @requires
 * value: string this could be a username or a password
 * @param req
 * @param res
 */
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const session = await getSession({ req });
  // If the user has a session we don't want to reset the password
  if (session?.user) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: 'Logged in users should change password through user settings.',
    });
  }
  if (method === 'POST') {
    const { value } = req.body;
    // Check and see if the user exists by email or username
    const client = initializeApollo();
    const { data: queryData } = await client.query<DoesUserExistQuery>({
      query: DoesUserExistDocument,
      variables: {
        email: value,
        username: value,
      },
    });
    // If we find the user
    if (queryData) {
      const user = queryData.user[0];
      if (user) {
        // Generate Forgot Password Reset token and add it to the db
        const token = await bcrypt.hash(
          // Token is the FORGOT_PASSWORD_TOKEN_SALT + username split with a space
          `${process.env.FORGOT_PASSWORD_TOKEN_SALT} ${user.username}`,
          10,
        );
        // Add it to the DB
        const { data: mutateData, errors: mutateErrors } =
          await client.mutate<InsertPasswordResetTokenMutation>({
            mutation: InsertPasswordResetTokenDocument,
            variables: {
              token,
              username: user.username,
            },
          });
        if (mutateErrors) {
          logEvent({
            summary: `Failed to issue password reset for user: ${user.username} with email: ${user.email}`,
            event_type: EventType_Enum.UserPasswordResetIssueFailed,
            user_username: user.username,
            meta: {
              email: user.email,
              username: user.username,
              ip: getClientIp(req),
            },
          });
          return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .json({ message: 'Mutate Error' });
        }
        const url = `${process.env.FRONTEND_HOST}:${
          process.env.FRONTEND_PORT
        }/auth/reset?token=${encodeURI(token)}&username=${encodeURI(
          user.username,
        )}`;
        console.log(
          `Sending Email to: ${user.email} with password reset url: ${url}`,
        );
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: testAccount.smtp.host,
          port: testAccount.smtp.port,
          secure: testAccount.smtp.secure, // true for 465, false for other ports
          auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
          },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: `"${APPLICATION_NAME} 👻" <kanri@your-studio.com>`, // sender address
          to: user.email, // list of receivers
          subject: `${APPLICATION_NAME} - Password Reset ✔`, // Subject line
          text: 'Your password reset request is here. Click the link to reset your password', // plain text body
          html: `<b>Your password reset request is here. Click the link to reset your password</b></br> <a href="${url}">Click here to Reset Password</a>`, // html body
        });
        logEvent({
          summary: `Sent Reset Password request for ${user.username} to ${user.email}`,
          event_type: EventType_Enum.UserPasswordResetIssue,
          user_username: user.username,
          meta: {
            email: user.email,
            username: user.username,
            ip: getClientIp(req),
          },
        });
        return res
          .status(httpStatus.OK)
          .json({ message: 'Success!', messageId: info.messageId });
      } else {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: 'USER DOES NOT EXIST' });
      }
    }
  }
  // If Not POST
  return res
    .status(httpStatus.NOT_IMPLEMENTED)
    .json({ message: 'METHOD NOT IMPLEMENTED' });
}

export type ForgotPasswordRequest = {
  value: string;
};
const forgotPasswordRequestSchema = Joi.object({
  value: Joi.string().required(),
});

export default withJoi({ body: forgotPasswordRequestSchema }, handler);
