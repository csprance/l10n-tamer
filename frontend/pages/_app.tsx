import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import * as React from 'react';

import ThemeProvider from '@/components/ThemeProvider';
import { ThemeNames } from '@/constants';
import { useApollo } from '@/lib/apollo';
import createEmotionCache from '@/lib/createEmotionCache';
import '@/styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  session: Session;
}
function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { session } = pageProps;
  const apolloClient = useApollo(pageProps.initialApolloState, session?.token);
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider
            themeName={(session ? session.theme_name : 'atom') as ThemeNames}
          >
            <SnackbarProvider
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Component {...pageProps} />
            </SnackbarProvider>
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
