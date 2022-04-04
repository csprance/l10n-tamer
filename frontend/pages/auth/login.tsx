import type { GetServerSideProps, NextPage } from 'next';
import { InferGetServerSidePropsType } from 'next';
import { getSession } from 'next-auth/react';
import * as React from 'react';
import { useEffect } from 'react';

import AuthLayout from '@/features/auth/components/AuthLayout';
import AuthLoginForm from '@/features/auth/components/AuthLoginForm';
import { strings } from '@/l10n';
import { initializeApollo } from '@/lib/apollo';

const Login: NextPage = ({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    // We can never get here when we're logged in so reset apollo state if it exists
    const client = initializeApollo();
    client.resetStore();
  }, []);

  return (
    <AuthLayout
      title={`${strings.appName} | Login`}
      description={'Login Here!'}
    >
      <AuthLoginForm />
    </AuthLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // If we have a session already we don't want to let the user login again
  // Redirect to home page
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Login;
