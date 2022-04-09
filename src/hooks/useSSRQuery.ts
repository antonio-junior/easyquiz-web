import {
  ApolloClient,
  createHttpLink,
  DocumentNode,
  InMemoryCache,
} from '@apollo/client';

const ssrQuery = async (query: DocumentNode, cookie = '') => {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: process.env.API_URL,
      credentials: 'include',
      headers: {
        cookie,
      },
    }),
    cache: new InMemoryCache(),
  });

  return client.query({ query });
};

export default ssrQuery;
