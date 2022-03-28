import {
  ApolloClient,
  createHttpLink,
  DocumentNode,
  InMemoryCache,
} from '@apollo/client';

const ssrQuery = async (
    cookie:String,
  query: DocumentNode
) => {
    const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: process.env.API_URL,
      credentials: 'include',
      headers: {
        cookie
      },
    }),
    cache: new InMemoryCache(),
  });

  return client.query({query});
};

export default ssrQuery;