import React from 'react';
import LinkGroup from '@/components/LinkGroup';
import SiteLogo from '@/components/SiteLogo';

export default function Header() {
  return (
    <nav className="flex justify-between px-5 py-5 items-center max-w-4xl mx-auto bg-slate-900">
      <SiteLogo />
      <LinkGroup />
    </nav>
  );
}
