import { decode } from 'jsonwebtoken';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { Session } from 'next-auth';
import { getSession, signOut } from 'next-auth/react';
import { GetServerSidePropsContext, PreviewData } from 'next/types';
import { ParsedUrlQuery } from 'querystring';

import { logEvent } from '@/features/events/lib';
import {
  EventType_Enum,
  UpdateUserActiveDocument,
  UpdateUserActiveMutation,
  UpdateUserActiveMutationVariables,
} from '@/graphql/graphql';
import { initializeApollo } from '@/lib/apollo';

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

export type CustomGetServerSideProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
> = (
  context: GetServerSidePropsContext<Q, D>,
  session: Session,
) => Promise<GetServerSidePropsResult<P>>;
export type AuthenticatedGSSPOptions = {
  destination: string;
};
/**
 * Return a function that returns a GetServerSideProps function that will check if a user has a valid session
 * and if not redirect to location of choice if it does it will run the passed in function
 * @param gssp GetServerSideProps function
 * @param options
 */
export const authenticatedGetServerSideProps =
  (
    gssp: CustomGetServerSideProps,
    options: AuthenticatedGSSPOptions = {
      destination: '/auth/login',
    },
  ): GetServerSideProps =>
  async (context): Promise<GetServerSidePropsResult<any>> => {
    const session = await getSession(context);
    if (!session) {
      return {
        redirect: {
          destination: options.destination,
          permanent: false,
        },
      };
    }
    return gssp(context, session);
  };

/**
 * Log out a user and log the event then use next-auth to sign out.
 * This should be run instead of signOut sinceit runs signOut and other functions
 * @param username
 */
export const logout = async (username: string) => {
  const client = initializeApollo();
  await client.mutate<
    UpdateUserActiveMutation,
    UpdateUserActiveMutationVariables
  >({
    mutation: UpdateUserActiveDocument,
    variables: { username, active: false },
  });
  await client.resetStore();
  await signOut();
};
