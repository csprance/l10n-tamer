import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import NextAuth, { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

import { ThemeNames } from '@/constants';
import { logEvent } from '@/features/events/lib';
import {
  EventType_Enum,
  GetUserPasswordDocument,
  GetUserPasswordQuery,
  GetUserSessionDataDocument,
  GetUserSessionDataQuery,
} from '@/graphql/graphql';
import { initializeApollo } from '@/lib/apollo';

// import Auth0Provider from "next-auth/providers/auth0"
// import FacebookProvider from "next-auth/providers/facebook"
// import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"
// import TwitterProvider from "next-auth/providers/twitter"
// import EmailProvider from "next-auth/providers/email"
// import AppleProvider from "next-auth/providers/apple"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'kaiuserson',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // console.log('authorize', {credentials, req});
        if (!credentials) {
          return null;
        }
        const { username, password } = credentials;
        // Given the username go and fetch the password from the db
        const client = initializeApollo();
        const { data } = await client.query<GetUserPasswordQuery>({
          query: GetUserPasswordDocument,
          variables: { username },
        });
        // If there is no user it's a bad request
        if (!data.user) {
          logEvent({
            summary: `Login Attempt Failed`,
            event_type: EventType_Enum.UserLoginAttemptFailed,
            user_username: username,
            meta: {
              username,
            },
          });
          return null;
        }
        // Compare our encrypted password and check to make sure it matches what we have in the db
        const hashPassword = await bcrypt.compare(password, data.user.password);
        // Passwords don't match
        if (!hashPassword) {
          logEvent({
            summary: `Login Attempt Failed`,
            event_type: EventType_Enum.UserLoginAttemptFailed,
            user_username: username,
            meta: { username },
          });
          return null;
        }
        // Success! We are a valid user. Lets grab that data and set it to the session
        const { data: userSessionData } =
          await client.query<GetUserSessionDataQuery>({
            query: GetUserSessionDataDocument,
            variables: { username },
          });
        if (!userSessionData.user) {
          return null;
        }
        const user: Session['user'] = {
          id: userSessionData.user.id,
          image: userSessionData.user.avatar,
          name: userSessionData.user.username,
          email: userSessionData.user.email,
          theme_name: userSessionData.user.theme_name as ThemeNames,
        };
        return user;
      },
    }),
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: {
    //     appleId: process.env.APPLE_ID,
    //     teamId: process.env.APPLE_TEAM_ID,
    //     privateKey: process.env.APPLE_PRIVATE_KEY,
    //     keyId: process.env.APPLE_KEY_ID,
    //   },
    // }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_ID,
    //   clientSecret: process.env.AUTH0_SECRET,
    //   // @ts-ignore
    //   domain: process.env.AUTH0_DOMAIN,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    //   // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
    //   // @ts-ignore
    //   scope: "read:user",
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    // }),
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.NEXT_AUTH_SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `strategy` should be set to 'jwt' if no database is used.
    strategy: 'jwt',

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `strategy: 'jwt'` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.HASURA_JWT_KEY,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    encode: async ({ secret, token, maxAge }) => {
      // console.log('encode' , { secret, token, maxAge })
      const jwtClaims = {
        sub: token?.user_id,
        name: token?.name,
        email: token?.email,
        image: token?.image,
        theme_name: token?.theme_name,
        iat: Date.now() / 1000, // issued at now
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // Expires in one day
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['user'],
          'x-hasura-default-role': 'user',
          'x-hasura-role': 'user',
          'x-hasura-user-id': token?.name,
        },
      };
      // console.log('jwtToken: ', jwtClaims);
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: 'HS256' });
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      // First thing hit if token exists on request
      // console.log('decode' , { secret, token })
      const decodedToken = jwt.verify(token as any, secret, {
        algorithms: ['HS256'],
      });
      // console.log('decodedToken: ',decodedToken);
      return decodedToken as JWT;
    },
  },

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/auth/login', // Displays signin buttons
    signOut: '/auth/logout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {return true},
    // async redirect({ url, baseUrl }) { return baseUrl },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log('jwt',{ token, user, account, profile, isNewUser });
      const isUserSignedIn = !!user;
      if (isUserSignedIn) {
        // make a http call to our graphql api to mark user as active and get the latest data
        token.user_id = user.id;
        token.user_email = user.email;
        token.user_name = user.name;
        token.image = user.image;
        token.theme_name = user.theme_name;
      }
      return Promise.resolve(token);
    },
    async session({ session, token, user }) {
      // console.log('session: ', { session, token, user });
      const encodedToken = jwt.sign(token, process.env.HASURA_JWT_KEY, {
        algorithm: 'HS256',
      });
      session.theme_name = token.theme_name as string;
      session.token = encodedToken;
      session.image = token.image as string;
      return Promise.resolve(session);
    },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {
    async signIn(message) {
      logEvent({
        summary: `${message.user.name} Logged in`,
        event_type: EventType_Enum.UserLogin,
        user_username: message.user.name!,
        meta: message,
      });
    },
    async signOut(message) {
      logEvent({
        summary: `${message.token.name} Logged out`,
        event_type: EventType_Enum.UserLogout,
        user_username: message.token.name!,
        meta: message,
      });
    },
    // async createUser(message) { /* user created */ },
    // async updateUser(message) { /* user updated - e.g. their email was verified */ },
    // async linkAccount(message) { /* account (e.g. Twitter) linked to a user */ },
    // async session(message) { /* session is active */ },
    // async error(message) { /* error in authentication flow */ }
  },

  // Enable debug messages in the console if you are having problems
  debug: true,
});
