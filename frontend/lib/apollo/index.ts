import { ApolloClient, ApolloLink, split } from '@apollo/client';
import { NormalizedCacheObject } from '@apollo/client/cache';
import { getMainDefinition } from '@apollo/client/utilities';
import React from 'react';

import cache from '@/lib/apollo/cache';
import {
  authLink,
  errorLink,
  httpLink,
  serverAuthLink,
  wsLink,
} from '@/lib/apollo/links';

/* Global ApolloClient */
let apolloClient: ApolloClient<NormalizedCacheObject>;

/**
 * Create the Apollo Client with the correct links based on operation type
 * and if we're on the server or not
 */
export const createApolloClient = (token?: string) => {
  const ssrMode = typeof window === 'undefined';
  const tokenAuthLink = authLink(token);
  const link = !ssrMode
    ? split(
        //only create the split in the browser
        // split based on operation type
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        ApolloLink.from([errorLink, tokenAuthLink, wsLink]),
        ApolloLink.from([errorLink, tokenAuthLink, httpLink]),
      )
    : ApolloLink.from([serverAuthLink, httpLink]);

  return new ApolloClient({ ssrMode, link, cache });
};

/**
 * Do some logic to decide what apollo client to use if we should create it from
 * scratch or use the existing one
 *
 * @param initialState
 * @param token
 */
export const initializeApollo = (initialState = {}, token?: string) => {
  const _apolloClient = apolloClient ?? createApolloClient(token);
  // If your page has Next.js data fetching methods that use Apollo Client
  //  the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client if the token exists
  // if no token don't store because no session yet so no auth token so recreate each time until token exists
  if (!apolloClient && token) apolloClient = _apolloClient;

  return _apolloClient;
};

/**
 * A hook to use a memoized apollo state. This is used in `_app.tsx`
 *
 * @param initialState
 * @param token
 */
export const useApollo = (initialState = {}, token?: string) =>
  React.useMemo(
    () => initializeApollo(initialState, token),
    [initialState, token],
  );
