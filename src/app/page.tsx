import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex max-w-4xl min-h-screen flex-col justify-center mx-auto p-10">
      <div>
        <h1 className="font-bold text-4xl md:text-6xl xl:text-7xl">
          Md. Jamal Uddin
        </h1>
        <h3 className="mt-2">
          <span className="font-bold text-sm md:text-md xl:text-xl 2xl:text-2xl">
            Full Stack Software Engineer
          </span>
          {' - '}
          <span className="text-sm md:text-md xl:text-xl 2xl:text-2xl">
            Building Cross-Platform SaaS Products with React/React Native & Expo
          </span>
        </h3>
      </div>
      <div className="mt-10">
        <p className="text-sm md:text-md xl:text-xl">
          I am a self-taught experienced product engineer who specializes in
          building cross-platform mobile experiences using React, React Native &
          Expo. Leading a highly skilled mobile app development team that
          adheres to agile methodologies, ensuring the frequent delivery of
          reliable applications for fast-growing businesses. I also write
          technical articles and love to share my knowledge with others.
        </p>
      </div>

      <footer className="flex mt-10">
        <div className="flex gap-10">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-md xl:text-xl 2xl:text-3xl"
          >
            Powered by{' '}
            <Image
              src="/next.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-md xl:text-xl 2xl:text-3xl"
          >
            Deployed on{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </footer>
    </main>
  );
}
