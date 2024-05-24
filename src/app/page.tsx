import Image from 'next/image';
import Link from 'next/link';
import Header from './header';

export default function Home() {
  return (
    <main className="flex max-w-4xl flex-col mx-auto p-3 bg-slate-950 min-h-screen justify-center">
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold text-xl md:text-3xl xl:text-4xl text-center pb-5">
          Welcome to My Digital World
        </h3>
        <h1 className="font-bold text-4xl md:text-6xl xl:text-7xl pb-2">
          This is Md. Jamal Uddin
        </h1>
        <p className="text-sm md:text-md xl:text-xl text-center">
          Simply you can call me <span className="text-sky-500">Jamal</span>
        </p>
        <p className="text-sm md:text-md xl:text-xl text-center">
          Product Engineer based in Dhaka, Bangladesh
        </p>
        <p className="text-sm md:text-md xl:text-xl text-center">
          I build cross-platform apps using React/React Native
        </p>
        <p className="text-sm md:text-md xl:text-xl text-center">
          Currently working at{' '}
          <Link
            href="https://www.razorpay.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-500 hover:text-sky-700"
          >
            ShellBeeHaken Ltd.
          </Link>{' '}
          as a Full Stack Software Engineer
        </p>
      </div>
    </main>
  );
}
