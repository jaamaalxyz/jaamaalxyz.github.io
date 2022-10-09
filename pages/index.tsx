import type { NextPage } from 'next';
import Head from 'next/head';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Layout from '../components/Layout';

const Home: NextPage = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        Md. Jamal Uddin - He is a Full Stack Software Engineer. mainly working
        with React, Next.js, React Native, Node.js and TypeScript.
      </title>
    </Head>
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  </>
);

export default Home;
