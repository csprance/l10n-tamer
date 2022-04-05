import bcrypt from 'bcrypt';
import isBefore from 'date-fns/isBefore';
import httpStatus from 'http-status';
import Joi from 'joi';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { AuthResetPasswordFormData } from '@/features/auth/components/AuthResetPasswordForm';
import { logEvent } from '@/features/events/lib';
import {
  DoesTokenExistDocument,
  DoesTokenExistQuery,
  EventType_Enum,
  UpdateUserPasswordDocument,
  UpdateUserPasswordMutation,
} from '@/graphql/graphql';
import { initializeApollo } from '@/lib/apollo';
import {
  PASSWORD,
  PASSWORD_REPEAT,
  USERNAME,
  withJoi,
} from '@/lib/validations';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '32kb',
    },
  },
};

/**
 * This is an API route that allows a user to reset their password after starting
 * The process with the /api/auth/forgot
 * @location /api/auth/reset
 * @method: POST
 * @requires
 * token: string The secret token generated in /api/auth/forgot
 * username: string The username of the user to be password reset
 * password: string The new password for the user
 * password_repeat: string The password for the user repeated
 * @param req
 * @param res
 */
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const session = await getSession({ req });
  // If the user has a session we don't want to reset the password
  if (session) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: 'Logged in users should change password through user settings.',
    });
  }
  if (method === 'POST') {
    // Body
    const { token, username, password } = req.body;
    // If input validates check and make sure the token is legit
    const client = initializeApollo();
    // Fetch the token from the db by the username
    const { data, error: queryError } = await client.query<DoesTokenExistQuery>(
      {
        query: DoesTokenExistDocument,
        variables: {
          token,
          username,
        },
      },
    );
    if (queryError) {
      console.error(queryError);
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Failed to query db' });
    }
    if (data.password_reset.length > 0) {
      const { valid_till } = data.password_reset[0];
      // make sure the token is still valid
      if (!isBefore(Date.now(), new Date(valid_till))) {
        return res
          .status(httpStatus.UNAUTHORIZED)
          .json({ message: 'BAD RESET TOKEN' });
      }
      // If token is legit hash and set the password for that user
      const hashedPassword = await bcrypt.hash(password, 10);
      const { errors: mutationsErrors } =
        await client.mutate<UpdateUserPasswordMutation>({
          mutation: UpdateUserPasswordDocument,
          variables: {
            username,
            password: hashedPassword,
          },
        });
      if (mutationsErrors) {
        console.error(mutationsErrors);
        return res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: 'Error when updating user password.' });
      }
      logEvent({
        summary: `${username} - Changed password. `,
        event_type: EventType_Enum.UserPasswordChange,
        user_username: username,
      });
      return res.status(httpStatus.OK).json({ message: 'Success!' });
    }
  }
  return res.status(httpStatus.BAD_REQUEST).json({ message: 'Bad Request' });
}

export interface ResetPasswordRequestBody extends AuthResetPasswordFormData {
  token: string;
  username: string;
}

const resetPasswordRequestSchema = Joi.object({
  token: Joi.string().required(),
  username: USERNAME.required(),
  password: PASSWORD.required(),
  password_repeat: PASSWORD_REPEAT,
});

export default withJoi({ body: resetPasswordRequestSchema }, handler);
