import Head from 'next/head';

import MainLayout from '../components/layout/main-layout/MainLayout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
