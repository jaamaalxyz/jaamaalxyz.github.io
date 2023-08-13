import Image from 'next/image';

function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center w-full h-24 border-t">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            className="dark:invert"
            width={72}
            height={24}
            priority
          />
        </a>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hosted on{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={72}
            height={24}
            priority
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
