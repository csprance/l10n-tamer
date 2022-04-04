import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import * as React from 'react';

import Layout from '@/components/Layout';
import { shouldRedirectToLogin } from '@/features/auth/lib';
import ProjectsList from '@/features/projects/components/ProjectsList';

const Main = styled.div`
  display: grid;
  height: 100%;
`;

const Index: React.FC = ({}) => {
  return (
    <Layout>
      <ProjectsList />
    </Layout>
  );
};

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

export default Index;
