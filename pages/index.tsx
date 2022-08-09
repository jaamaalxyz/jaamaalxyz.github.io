import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/Layout';

const Home: NextPage = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Md. Jamal Uddin - Full Stack JavaScript Developer</title>
    </Head>
    <Layout />
  </>
);

export default Home;
