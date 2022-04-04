import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import Layout from '@/components/Layout';
import { shouldRedirectToLogin } from '@/features/auth/lib';

const Main = styled.div`
  display: grid;
  height: 100%;
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <Main>Project</Main>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { should, props: propsWithRedirect } = await shouldRedirectToLogin(
    context,
  );
  if (should) {
    return propsWithRedirect;
  }
  return {
    props: {
      session: await getSession(context),
    },
  };
};
