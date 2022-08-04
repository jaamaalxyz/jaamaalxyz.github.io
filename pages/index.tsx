import type { NextPage } from 'next';
import Head from 'next/head';
import Content from '../components/Content';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Footer from '../components/UI/Footer';

const Home: NextPage = () => {
  return (
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
};

export default Home;
