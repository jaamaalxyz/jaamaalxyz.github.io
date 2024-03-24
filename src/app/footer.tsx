import React from 'react';
import LinkItem from '@/components/LinkItem';

interface LinkInterface {
  title: string;
  link: string;
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: LinkInterface[];
}) {
  return (
    <div>
      <p className="text-xl 2xl:text-5xl">{title}</p>
      <ul className="py-3">
        {links.map((linkItem: LinkInterface, index: number) => (
          <LinkItem
            key={`${linkItem.title}-${index.toString()}`}
            title={linkItem.title}
            link={linkItem.link}
          />
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const getFullYear = new Date().getFullYear();
  return (
    <footer className="max-w-4xl mx-auto px-3 py-5  pt-16 pb-10 bg-slate-900">
      <div className="flex justify-around">
        <FooterLinkGroup
          title={'Blog'}
          links={[
            {
              title: 'All Posts',
              link: '/blog',
            },
            {
              title: 'React',
              link: '/blog/react',
            },
            {
              title: 'React Native',
              link: '/blog/react-native',
            },
            {
              title: 'Expo',
              link: '/blog/expo',
            },
          ]}
        />
        <FooterLinkGroup
          title={'Works'}
          links={[
            {
              title: 'Web',
              link: '/works/web',
            },
            {
              title: 'Mobile',
              link: '/works/mobile',
            },
            {
              title: 'Other',
              link: '/works/others',
            },
          ]}
        />
        <FooterLinkGroup
          title={'About'}
          links={[
            {
              title: 'About',
              link: '/about',
            },
            {
              title: 'Uses',
              link: '/about/uses',
            },
            {
              title: 'Resume',
              link: '/about/resume',
            },
          ]}
        />
      </div>
      <div className="flex justify-between border-t-2 border-slate-700 pt-3">
        <p className="text-sm md:text-md xl:text-xl 2xl:text-5xl">
          {'©'} {getFullYear} by{' '}
          <a
            href="https://jaamaal.com"
            className="text-sky-500 hover:text-sky-700"
          >
            Md. Jamal Uddin
          </a>
          . All rights reserved.
        </p>
        <p className="text-sm md:text-md xl:text-xl 2xl:text-5xl">
          Inspired by{' '}
          <a
            href="https://www.lekoarts.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-700"
          >
            Lennart
          </a>
        </p>
      </div>
    </footer>
  );
}
