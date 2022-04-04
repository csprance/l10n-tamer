import { decode } from 'jsonwebtoken';
import { GetSessionParams, getSession } from 'next-auth/react';

/**
 * This function generates the headers needed to make admin commands
 * It only works on the server because it needs access to a server side only env
 */
export function adminHeaders(): {} {
  return {
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
  };
}

/**
 * Check and see if our JWT Token is expired or not.
 * @param token an encoded JWT token
 * @returns true if expired | false if still valid JWT
 */
export const isJWTExpired = (token: string): boolean => {
  const decoded = token ? decode(token) : null;
  if (!decoded || typeof decoded === 'string') {
    // Can't parse it just return true that it is expired to fetch again
    return true;
  }
  return decoded
    ? Math.floor(new Date().getTime() / 1000) >= decoded.exp!
    : false;
};

/**
 * This function determines if the user should be redirected to the login page
 * if they are not logged in.
 * @param context Next.js Page Context
 * @param props Next.js Page Props to return if wanted
 */
export async function shouldRedirectToLogin(
  context: GetSessionParams,
  props?: any,
) {
  const session = await getSession(context);
  if (!session) {
    return {
      should: true,
      props: {
        ...props,
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      },
    };
  }
  return { should: false, props };
}
