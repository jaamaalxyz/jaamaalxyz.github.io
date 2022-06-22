import { Link } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Md. Jamal Uddin a.k.a jaamaal95</title>
        <meta
          name="description"
          content="Personal site of Md. Jamal Uddin a.k.a jaamaal95"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header>
          <h1>Md. Jamal Uddin</h1>
          <p style={{ paddingLeft: 3 }}>@jaamaal95</p>
          <h3>Learner - Software Developer - Content Writer</h3>
          <p>I built software and writing articles for humans</p>
          <p>
            I mostly work on <span className={styles.tag}>React</span>,{' '}
            <span className={styles.tag}>React Native</span>,{' '}
            <span className={styles.tag}>Next.js</span>,{' '}
            <span className={styles.tag}>TypeScript</span>,{' '}
            <span className={styles.tag}>Node.js</span>, and{' '}
            <span className={styles.tag}>Databases</span>
          </p>
        </header>
        <main>
          <h2>Links</h2>
          <ul>
            <li>
              <Link
                href="https://www.linkedin.com/in/jaamaal95/"
                target={'_blank'}
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://github.com/jaamaal95" target={'_blank'}>
                GitHub
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/jaamaal95" target={'_blank'}>
                Twitter
              </Link>
            </li>
            <li>
              <Link href="https://jaamaal95.medium.com/" target={'_blank'}>
                Medium
              </Link>
            </li>
            <li>
              <Link href="https://dev.to/jaamaal95" target={'_blank'}>
                Dev.to
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/jaamaal95" target={'_blank'}>
                Facebook
              </Link>
            </li>
          </ul>

          <h2>Side Projects</h2>
          <ul>
            <li>
              <Link
                href="https://github.com/jaamaal95/AmalTracker"
                target={'_blank'}
              >
                Building AmalTracker Mobile App using{' '}
                <span className={styles.tag}>React Native</span> for my wife
                {"'"}s community
              </Link>
            </li>
          </ul>

          <h2>Experiences</h2>
          <ul>
            <li>
              <Link>National Polymer Group</Link>
              <p>Software Developer</p>
              <p>Jan, 2020 - Current</p>
            </li>
            <li>
              <Link>National Polymer Industries Ltd.</Link>
              <p>Junior Executive</p>
              <p>Mar, 2018 - Dec, 2019</p>
            </li>
            <li>
              <Link>NPOLY Factory, Gazipur, Tongi</Link>
              <p>Assistant Executive</p>
              <p>Oct, 2016 - Feb, 2018</p>
            </li>
          </ul>
        </main>
        <footer className={styles.footer}>
          <p>Copyright @ {new Date().getFullYear()} - Md. Jamal Uddin</p>
          <p>
            Built with 💖 by &nbsp;
            <Link href="https://nextjs.org/" target={'_blank'}>
              Next.js
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
