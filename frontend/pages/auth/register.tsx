import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import * as React from 'react';

import AuthLayout from '@/features/auth/components/AuthLayout';
import AuthRegisterForm from '@/features/auth/components/AuthRegisterForm';
import { strings } from '@/l10n';

const Register: NextPage = () => {
  return (
    <AuthLayout
      title={`${strings.appName} | Register`}
      description={'Register a new account here.'}
    >
      <AuthRegisterForm />
    </AuthLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // If we have a session already we don't want to let the user register
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

export default Register;
