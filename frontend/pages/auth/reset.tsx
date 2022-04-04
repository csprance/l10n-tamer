import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import * as React from 'react';

import AuthLayout from '@/features/auth/components/AuthLayout';
import AuthResetPasswordForm from '@/features/auth/components/AuthResetPasswordForm';
import { strings } from '@/l10n';

function ResetPasswordPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return (
    <AuthLayout
      title={`${strings.appName} | Reset`}
      description={'Reset your password here.'}
    >
      <AuthResetPasswordForm />
    </AuthLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default ResetPasswordPage;
