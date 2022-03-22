import '../styles/globals.css';
import type { AppProps } from 'next/app';

/* eslint-disable react/jsx-props-no-spreading */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
