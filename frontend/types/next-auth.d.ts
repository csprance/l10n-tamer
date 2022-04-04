import NextAuth, { DefaultSession } from 'next-auth';
import { ISODateString } from 'next-auth/core/types';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    // The user theme in the session
    theme_name: string;
    // The encoded json web token in the session
    token: string;
    // The user avatar in the Session
    image: string;
    user: {
      // The id of the user from the database (possibly switch to using this as prim key)
      id: number;
      // The theme name for the UI
      theme_name: string;
    } & DefaultSession['user'];
  }
}

// DefaultSession['user'];
// user?: {
//   name?: string | null;
//   email?: string | null;
//   image?: string | null;
// };
// expires: ISODateString;
