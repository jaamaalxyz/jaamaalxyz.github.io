import Image from 'next/image';
import Link from 'next/link';
import Header from './header';

export default function Home() {
  return (
    <main className="flex max-w-4xl flex-col mx-auto p-3 bg-slate-950 min-h-96 justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl md:text-6xl xl:text-7xl pb-5">
          Hi, I am Jamal
        </h1>
        <p className="text-sm md:text-md xl:text-xl text-center">
          Software Engineer based in Dhaka, Bangladesh
        </p>
        <p className="text-sm md:text-md xl:text-xl text-center">
          Building cross-platform mobile experiences using React Native and Expo
        </p>
        <p className="text-sm md:text-md xl:text-xl text-center">
          Currently working at{' '}
          <a
            href="https://www.razorpay.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-500 hover:text-sky-700"
          >
            ShellBeeHaken Ltd.
          </a>
        </p>
      </div>
    </main>
  );
}
