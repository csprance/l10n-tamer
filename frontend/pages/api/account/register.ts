import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import Joi from 'joi';
import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';

import {
  DoesUserExistDocument,
  DoesUserExistQuery,
  RegisterUserDocument,
  RegisterUserMutation,
  RegisterUserMutationVariables,
} from '@/graphql/graphql';
import { initializeApollo } from '@/lib/apollo';
import { EMAIL, PASSWORD, USERNAME, withJoi } from '@/lib/validations';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '32kb',
    },
  },
};

/**
 * This is an API route that registers a user and creates the session data
 * It is wrapped with withIronSessionApiRoute and withJoi
 * logged through hasura event trigger
 * @location /api/auth/register
 * @method: POST
 * @requires
 * username: string
 * email: string
 * password: string
 * firstName: string
 * lastName: string
 * @param req
 * @param res
 */
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Session | { message: string }>,
) {
  const { username, email, password, firstName, lastName } = req.body;
  if (req.method === 'POST') {
    const client = initializeApollo();
    // See if the user exists by username or email
    const { data } = await client.query<DoesUserExistQuery>({
      query: DoesUserExistDocument,
      variables: {
        username,
        email,
      },
    });
    // Username taken
    const usernameTaken = data.user
      .map((x) => x.username.toLowerCase())
      .includes(username.toLowerCase());
    if (usernameTaken) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: 'Username already exists.' });
    }
    // Email taken
    const emailTaken = data.user
      .map((x) => x.email.toLowerCase())
      .includes(email.toLowerCase());
    if (emailTaken) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: true, message: 'Email already exists.' });
    }
    // create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      username,
      email,
      first_name: firstName,
      last_name: lastName,
      password: hashedPassword,
    };
    const { data: userData } = await client.mutate<
      RegisterUserMutation,
      RegisterUserMutationVariables
    >({ mutation: RegisterUserDocument, variables: { user } });
    // If we succeed then
    if (userData && userData.insert_user_one) {
      return res
        .status(httpStatus.OK)
        .json({ message: `User created. Welcome ${user.username}!` });
    } else {
      // Registration has failed
      return res.status(httpStatus.BAD_REQUEST).json({
        error: true,
        message: 'Registration Failed. Please try again.',
      });
    }
  }
  return res
    .status(httpStatus.BAD_REQUEST)
    .json({ message: 'Must be POST Request' });
}

const registerBodyRequestSchema = Joi.object({
  username: USERNAME.required(),
  email: EMAIL.required(),
  password: PASSWORD.required(),
  firstName: Joi.string(),
  lastName: Joi.string(),
});

export default withJoi({ body: registerBodyRequestSchema }, handler);
