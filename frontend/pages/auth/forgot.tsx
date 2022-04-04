import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import * as React from 'react';

import AuthForgotPasswordForm from '@/features/auth/components/AuthForgotPasswordForm';
import AuthLayout from '@/features/auth/components/AuthLayout';
import { strings } from '@/l10n';

const ForgotPasswordPage: NextPage = () => {
  return (
    <AuthLayout
      title={`${strings.appName} | Register`}
      description={'Forgot your password? Reset it here!.'}
    >
      <AuthForgotPasswordForm />
    </AuthLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // If we have a session already we don't want to let the user start the forgot password process
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

export default ForgotPasswordPage;
