import { GetServerSideProps, NextPage } from 'next';

import AuthLayout from '@/features/auth/components/AuthLayout';
import AuthLogoutConfirm from '@/features/auth/components/AuthLogoutConfirm';
import { authenticatedGetServerSideProps, logout } from '@/features/auth/lib';
import { strings } from '@/l10n';

/**
 * This page does do things.
 * One the server side:
 *  * Check and see if we have a query param 'force'
 *  * If we DON'T have the force param then show the confirm logout page
 *  * if we DO have the force param then log the user out and destroy the session
 */
const LogoutPage: NextPage = ({}) => {
  return (
    <AuthLayout
      title={`${strings.appName} | Logout`}
      description={'Logout here.'}
    >
      <AuthLogoutConfirm />
    </AuthLayout>
  );
};

/**
 * If we redirect to just /auth/logout we always want to confirm if the user
 * Wants to log out unless we put /auth/logout?force
 * To force a logout with no confirmation
 */
export const getServerSideProps: GetServerSideProps =
  authenticatedGetServerSideProps(async (context, session) => {
    // Force not in query param. Show confirm logout page
    if (!context.query.hasOwnProperty('force')) {
      // Go to the confirm login page
      return {
        props: { session },
      };
    }
    // If we have a user and we have force in query params then we want to
    // log them out and then redirect to login
    if (session.user) await logout(session.user.name!);
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  });

export default LogoutPage;
