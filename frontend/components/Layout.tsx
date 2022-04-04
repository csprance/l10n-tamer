import styled from '@emotion/styled';
import Head from 'next/head';
import * as React from 'react';

import AppBar from '@/components/AppBar';
import NavigationDrawer from '@/components/NavigationDrawer';
import TopProgress from '@/components/TopProgress';
import { strings } from '@/l10n';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px auto;
  height: 100%;
`;
const ContentWrapper = styled.div`
  display: flex;
`;
interface Props {}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Head>
        <title>{strings.appName}</title>
        <meta name="description" content={strings.appDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopProgress />
      <AppBar />
      <ContentWrapper>
        <NavigationDrawer />
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Layout;
