import type { Metadata } from 'next';
import { Crimson_Pro } from 'next/font/google';
import './globals.css';
import Header from './header';
import Footer from './footer';

const crimsonPro = Crimson_Pro({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Md. Jamal Uddin - Full Stack Software Engineer',
  description:
    'Experienced product engineer with a proven track record in developing cross-platform applications using React/React Native. Skilled in leading a dynamic team, implementing agile methodologies to consistently deliver top-notch applications for growing businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={crimsonPro.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
