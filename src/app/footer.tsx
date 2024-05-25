import React from 'react';
import Link from 'next/link';
import LinkItem from '@/components/LinkItem';

import { FOOTER_LINKS } from '@/constants';

function FooterLinkGroup({
  label,
  subLinks,
}: {
  label: string;
  subLinks: FooterLink[];
}) {
  return (
    <div>
      <p className="text-xl 2xl:text-5xl pb-5 text-emerald-300">{label}</p>
      <ul className="flex flex-col gap-2">
        {subLinks.map((link) => (
          <LinkItem key={link.label} title={link.label} link={link.link} />
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-4xl mx-auto pt-20 bg-slate-900">
      <FooterTop />
      <FooterBottom currentYear={currentYear} />
    </footer>
  );
}

const FooterTop = () => {
  return (
    <div className="flex justify-around pb-5">
      {FOOTER_LINKS.map((link: FooterLink) => (
        <FooterLinkGroup
          key={link.label}
          label={link.label}
          subLinks={link.subLinks || []}
        />
      ))}
    </div>
  );
};

function FooterBottom({ currentYear }: { currentYear: number }) {
  return (
    <div className="flex flex-col justify-center items-center border-slate-700 mt-10 px-10 py-5 bg-slate-950">
      <p className="text-sm md:text-base xl:text-lg 2xl:text-xl">
        Copyright {'©'} {currentYear} by{' '}
        <Link href="/" className="text-sky-500 hover:text-sky-700">
          Md. Jamal Uddin
        </Link>
      </p>
      <p className="text-sm md:text-base xl:text-lg 2xl:text-xl">
        Inspired by{' '}
        <Link
          href={'https://www.lekoarts.de/'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 hover:text-sky-700"
        >
          Lennart
        </Link>
      </p>
    </div>
  );
}

interface FooterLink {
  label: string;
  link: string;
  subLinks?: FooterLink[];
}
