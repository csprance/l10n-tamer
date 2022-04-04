import { HttpLink, fromPromise } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import fetch from 'isomorphic-unfetch';
import ws from 'isomorphic-ws';
import { getSession, signOut } from 'next-auth/react';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { adminHeaders } from '@/features/auth/lib';

/**
 * This is our regular HttpLink it is used on **server** and **client**
 * on Queries and Mutations **ONLY**
 *
 * **Client and Server**
 */
export const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
  credentials: 'include',
  fetch,
});

/**
 * The Websocket link is used on the client and only
 * on Subscriptions
 *
 * **Client ONLY**
 */
export const wsLink = new WebSocketLink(
  new SubscriptionClient(
    process.env.NEXT_PUBLIC_GRAPHQL_URI_WS,
    {
      lazy: true,
      reconnect: true,
      connectionParams: async () => {
        // Since this function is async we can just get the session data and use that in the subscriptions
        const session = await getSession();
        return {
          headers: {
            Authorization: session
              ? `Bearer ${session.token}`
              : 'WS-Failed-Get-Session',
          },
        };
      },
    },
    ws,
  ),
);

/**
 * This link is run anytime there is an error on the client and server
 * It catches errors and is also responsible for fetching new tokens on expiration
 * and logging out if needed
 *
 * **CLIENT AND SERVER**
 */
export const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward, response }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.error('GraphQL Error: ', err.extensions.code);
        switch (err.extensions.code) {
          // TODO: Find a list of all of these cases where we should refetch JWT
          case 'invalid-headers' || 'jwt-expired' || 'invalid-jwt':
            console.log('JWT Token Refresh Starting...');
            return fromPromise(
              getSession().catch((error) => {
                // Handle token refresh errors e.g clear stored tokens, redirect to login
                console.log('Error in getNewToken. Logging user out');
                return signOut();
              }),
            )
              .filter((value) => Boolean(value))
              .flatMap((session) => {
                const oldHeaders = operation.getContext().headers;
                // console.log('Setting New Headers: ', session!.token);
                // modify the operation context with a new token
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    Authorization: session!.token
                      ? `Bearer ${session!.token}`
                      : '',
                  },
                });
                // console.log('Retrying Operation with new JWT Header');
                // retry the request, returning the new observable
                return forward(operation);
              });
        }
      }
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError.message}`);
    }
  },
);

/**
 * Set our admin headers for any graphql requests made on the
 *
 * **SERVER ONLY**
 */
export const serverAuthLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      ...adminHeaders(),
    },
  };
});

/**
 * Create our authentication headers from the passed in token string
 * Return the headers to the context so httpLink can read them
 *
 * **CLIENT ONLY**
 */
export const authLink = (token?: string) =>
  setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        // If headers already exist use the existing auth headers
        // otherwise use the token data from session-provider
        Authorization: headers ? headers.Authorization : `Bearer ${token}`,
      },
    };
  });
