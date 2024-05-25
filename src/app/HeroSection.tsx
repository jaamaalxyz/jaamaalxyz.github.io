import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center py-20 md:py-32 lg:py-40">
      <h1 className="font-bold text-4xl md:text-6xl xl:text-7xl pb-2">
        Hey! 👋 I’m Jamal
      </h1>
      <p className="md:text-md xl:text-xl text-center">
        Product Engineer based in Dhaka, Bangladesh
      </p>
      <p className="md:text-md xl:text-xl text-center">
        I build cross-platform apps using React/React Native
      </p>
      <p className="md:text-md xl:text-xl text-center">
        Currently working at{' '}
        <Link
          href="https://shellbeehaken.com/"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-300 hover:text-indigo-700"
        >
          ShellBeeHaken Ltd.
        </Link>{' '}
        as a <span className="text-teal-500">Full Stack Software Engineer</span>
      </p>
    </div>
  );
}
