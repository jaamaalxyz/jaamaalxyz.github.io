import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Footer from '../components/UI/Footer';
import H1 from '../components/UI/Footer/H1';
import H2 from '../components/UI/Footer/H2';

const Blog: NextPage = () => (
  <>
    <Head>
      <title>
        <title>Blog - Thoughts, Experiment, and Examples </title>
      </title>
    </Head>
    <Layout>
      <header className="sm:w-full lg:w-8/12 mx-auto sm:my-3 md:my-5 lg:my-8">
        <H1>
          <span>Blog</span>
        </H1>
        <p className="text-xl">
          <span className="text-purple-500">Thoughts</span>,{' '}
          <span className="text-blue-400">Experiment</span>, and{' '}
          <span className="text-green-500">Examples</span> by{' '}
          <Link href={'/'}>
            <span className="text-blue-400">Md. Jamal Uddin</span>
          </Link>
        </p>
      </header>
      <main className="sm:w-full lg:w-8/12 mx-auto">
        <section className="mb-10">
          <H2>
            <span>The Dev Community</span>
          </H2>
          <Link href={'https://dev.to/jaamaalxyz'}>
            <a target={'_blank'}>
              I write technical content on{' '}
              <span className="underline">The Dev Community</span>
            </a>
          </Link>
        </section>
        <section>
          <H2>
            <span>Medium.com</span>
          </H2>
          <Link href={'https://jaamaalxyz.medium.com'}>
            <a target={'_blank'}>
              My Bengali writing regarding Tech, Life, Islam and Book Review
              published on <span className="underline">Medium</span>
            </a>
          </Link>
        </section>
      </main>
      <Footer />
    </Layout>
  </>
);

export default Blog;
