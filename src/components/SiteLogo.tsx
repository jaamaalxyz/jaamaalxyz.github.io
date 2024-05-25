import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function SiteLogo() {
  return (
    <div>
      <Link href={'/'}>
        <Image
          src="/assets/images/logo.png"
          alt="Md. Jamal Uddin - Full Stack Software Engineer"
          className="dark:invert"
          width={32}
          height={14}
          priority
        />
      </Link>
    </div>
  );
}

export default SiteLogo;
