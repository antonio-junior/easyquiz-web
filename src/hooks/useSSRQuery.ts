import {
  ApolloClient,
  ApolloQueryResult,
  createHttpLink,
  DocumentNode,
  InMemoryCache,
} from '@apollo/client';

async function ssrQuery<Type>(
  query: DocumentNode,
  cookie = ''
): Promise<ApolloQueryResult<Type>> {
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

  return client.query<Type>({ query });
}

export default ssrQuery;
