import styled from '@emotion/styled';
import type { GetServerSideProps, NextPage } from 'next';

import Layout from '@/components/Layout';
import { authenticatedGetServerSideProps } from '@/features/auth/lib';
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

export const getServerSideProps: GetServerSideProps =
  authenticatedGetServerSideProps(async (context, session) => {
    return {
      props: {
        session,
      },
    };
  });
