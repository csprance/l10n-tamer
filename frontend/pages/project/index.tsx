import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';
import * as React from 'react';

import Layout from '@/components/Layout';
import { authenticatedGetServerSideProps } from '@/features/auth/lib';
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

export const getServerSideProps: GetServerSideProps =
  authenticatedGetServerSideProps(async (context, session) => {
    return {
      props: { session },
    };
  });

export default Index;
