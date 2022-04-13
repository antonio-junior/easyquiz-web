import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { AppContextProvider } from '../src/hooks/appContext';

const link = createHttpLink({
  uri: process.env.API_URL,
  credentials: 'include',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
