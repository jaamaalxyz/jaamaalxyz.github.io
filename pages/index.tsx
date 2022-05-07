import { Heading, Link, Stack, Text } from '@chakra-ui/react';
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

      <Stack
        as="main"
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="90vh"
      >
        <Text fontSize="4xl" textTransform="uppercase">
          jaamaal.com
        </Text>
        <Heading size="xl">
          Welcome to the Digital Garden of a self-taught Software Developer
        </Heading>
        <Text fontSize="5xl">Myself Md. Jamal Uddin</Text>
        <p>I built web application using TypeScript, React.js and Node.js</p>
      </Stack>
      <Stack
        as="footer"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text>
          Built with 💖 by &nbsp;
          <Link href="https://nextjs.org/docs/">Next.js</Link>
        </Text>
      </Stack>
    </div>
  );
};

export default Home;
