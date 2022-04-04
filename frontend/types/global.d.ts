declare module '*.graphql' {
  import { DocumentNode } from 'graphql';

  const value: DocumentNode;
  export = value;
}
declare namespace NodeJS {
  export interface ProcessEnv {
    POSTGRES_PASSWORD: string;
    PGADMIN_DEFAULT_EMAIL: string;
    PGADMIN_DEFAULT_PASSWORD: string;
    HASURA_ADMIN_SECRET: string;
    HASURA_JWT_KEY: string;
    HASURA_GRAPHQL_JWT_SECRET: string;
    HASURA_JWT_EXPIRE_TIME: string;
    DOMAIN: string;
    TZ: string;
    NEXT_PUBLIC_GRAPHQL_URI: string;
    NEXT_PUBLIC_GRAPHQL_URI_WS: string;
    SECRET_COOKIE_PASSWORD: string;
    FORGOT_PASSWORD_TOKEN_SALT: string;
    NEXT_PUBLIC_DOMAIN: string;
  }
}
type Modify<T, R> = Omit<T, keyof R> & R;
