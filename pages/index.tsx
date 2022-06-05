import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';

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
        h={['100%', '90vh']}
      >
        <Text fontSize={['2xl', '3xl', '5xl']}>👋 This is Md. Jamal Uddin</Text>
        <Text fontSize={['lg', '2xl', '3xl']}>
          I am a self-taught{' '}
          <Box as="span" textColor={'blue.600'}>
            <NextLink href="https://github.com/jaamaal95" passHref>
              Software Developer
            </NextLink>{' '}
          </Box>
          and{' '}
          <Box as="span" textColor={'blue.600'}>
            <NextLink href="/blog" passHref>
              Technical Content Writer
            </NextLink>
          </Box>
        </Text>
        <Heading size="xl">Welcome to my Digital Garden</Heading>
        <p>I built web application using TypeScript, React.js and Node.js</p>
        <p>I also built cross platform mobile application using React Native</p>
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
