import { GetServerSideProps, NextPage } from 'next';
import { getSession, signOut } from 'next-auth/react';

import AuthLayout from '@/features/auth/components/AuthLayout';
import AuthLogoutConfirm from '@/features/auth/components/AuthLogoutConfirm';
import { logEvent } from '@/features/events/lib';
import {
  EventType_Enum, UpdateUserActiveDocument,
  UpdateUserActiveMutation,
  UpdateUserActiveMutationVariables,
} from '@/graphql/graphql';
import { strings } from '@/l10n';
import { initializeApollo } from '@/lib/apollo';

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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  // if we have no user then just go back to login because we shouldn't be here
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  // Force not in query param. Show confirm logout page
  if (!context.query.hasOwnProperty('force')) {
    // Go to the confirm login page
    return {
      props: {},
    };
  }

  // If we have a user and we have force in query params then we want to
  // log them out and then redirect to login (where jwt will be destroyed also)
  const { user } = session;
  if (user) {
    logEvent({
      summary: `${user.name} Logged out`,
      event_type: EventType_Enum.UserLogout,
      user_username: user.name!,
    });
    // Set user inactive
    const client = initializeApollo();
    client.mutate<UpdateUserActiveMutation, UpdateUserActiveMutationVariables>({
      mutation: UpdateUserActiveDocument,
      variables: { username: user.name, active: false },
    });
    await signOut();
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  // Should never get here
  return {
    props: {},
  };
};

export default LogoutPage;
