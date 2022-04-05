import styled from '@emotion/styled';
import type { InferGetServerSidePropsType } from 'next';
import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';

import Layout from '@/components/Layout';
import { authenticatedGetServerSideProps } from '@/features/auth/lib';
import {
  ProjectBySlugDocument,
  ProjectBySlugQuery,
  ProjectBySlugQueryVariables,
} from '@/graphql/graphql';
import { initializeApollo } from '@/lib/apollo';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

function Home({
  project,
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <Main>
        <div>
          <h1>{project!.name}</h1> - {project!.created_at}
        </div>
        <p>{project!.description}</p>
      </Main>
    </Layout>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps<{
  project?: ProjectBySlugQuery['project'][number];
  session?: Session;
}> = authenticatedGetServerSideProps(async (context, session) => {
  // If we have no params then we can't be here
  const slug = `${context.params ? context.params['project-name'] : ''}`;
  if (slug.length === 0) return { notFound: true };
  // Init apollo
  const client = initializeApollo();
  // Check and see if we have a project by that name
  const { data } = await client.query<
    ProjectBySlugQuery,
    ProjectBySlugQueryVariables
  >({
    query: ProjectBySlugDocument,
    variables: {
      slug,
    },
  });
  // Check and see if the locale exists
  const locale = `${context.query['locale']}`;
  // If we have a locale return the data about that as well
  // If we have a project return it otherwise return not found
  if (data.project[0]) {
    return {
      props: {
        project: data.project[0],
        session,
      },
    };
  }
  return {
    notFound: true,
  };
});
