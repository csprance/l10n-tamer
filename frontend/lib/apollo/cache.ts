import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {},
  },
});

export default cache;
