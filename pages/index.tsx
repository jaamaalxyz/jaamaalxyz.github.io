import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Jaamaal.com - Digital Garden of a self-taught Software Developer - Md.
          Jamal Uddin (@jaamaal)
        </title>
        <meta
          name="description"
          content="Digital Garden of a self-taught Software Developer - Md.
          Jamal Uddin (@jaamaal)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to the Digital Garden of a self-taught Software Developer
        </h1>
      </main>
      <footer>
        Built with <a href="https://nextjs.org/docs/">Next.js</a>
      </footer>
    </div>
  );
};

export default Home;
