import type { NextPage } from 'next';
import Head from 'next/head';

import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Meta from '../components/Meta';

const Home: NextPage = () => (
  <>
    <Head>
      <Meta />
    </Head>
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  </>
);

export default Home;
