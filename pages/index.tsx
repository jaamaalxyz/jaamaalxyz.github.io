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

      <main className="flex flex-col justify-center items-center h-screen">
        <h3 className="text-xl text-teal-500 uppercase">jaamaal.com</h3>
        <h1 className="text-3xl text-teal-700">
          Welcome to the Digital Garden of a self-taught Software Developer
        </h1>
        <h3>Myself Md. Jamal Uddin</h3>
        <p>I built web application using TypeScript, React.js and Node.js</p>
      </main>
      <footer className="flex justify-center">
        Built with 💖 by &nbsp;<a href="https://nextjs.org/docs/">Next.js</a>
      </footer>
    </div>
  );
};

export default Home;
