import { Inter } from '@next/font/google';
import Link from 'next/link';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <section>
          <h3>Md. Jamal Uddin</h3>
        </section>
        <section className={styles.navItems}>
          <div className={styles.navItem}>
            <Link href={'/'}>Home</Link>
          </div>
          <div className={styles.navItem}>
            <Link href={'/about'}>About</Link>
          </div>
          <div className={styles.navItem}>
            <Link href={'/blog'}>Blog</Link>
          </div>
          <div className={styles.navItem}>
            <Link href={'/initiatives'}>Initiatives</Link>
          </div>
        </section>
      </nav>
      <section className={styles.hero}>
        <h1>Hi, I{"'"}m Jamal</h1>
        <p>
          I{"'"}m a software engineer, a writer, and a mentor. I{"'"}m
          passionate about building products that help people.
        </p>
      </section>
    </main>
  );
}
