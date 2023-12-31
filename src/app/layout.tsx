import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Md. Jamal Uddin - Software Engineer - Building SaaS apps with React Native & Expo',
  description:
    'I am a self-taught experienced product engineer who specializes in building cross-platform mobile experiences using React Native and Expo. Leading a highly skilled mobile app development team that adheres to agile methodologies, ensuring the frequent delivery of reliable applications for fast-growing businesses. My proficiency in React Native, React, JavaScript, and relevant domains stems from years of experience, and I take pride in delivering high-quality results.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
