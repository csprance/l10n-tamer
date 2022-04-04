import styled from '@emotion/styled';
import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

import Layout from '@/components/Layout';
import LocalesList from '@/features/locales/components/LocalesList';

const Main = styled.div`
  display: grid;
  height: 100%;
`;

const Home: NextPage = (props) => {
  return (
    <Layout>
      <Main>Welcome to L10N-Manager 🚀 please select a project</Main>
      <LocalesList />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session: await getSession(context),
    },
  };
};
