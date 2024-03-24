import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function SiteLogo() {
  return (
    <div>
      <Link href={'/'}>
        <Image
          src="/assets/images/logo.png"
          alt="Md. Jamal Uddin - Full Stack Software Engineer - Building Cross-Platform SaaS Products with React Native & Expo"
          className="dark:invert"
          width={50}
          height={24}
          priority
        />
      </Link>
    </div>
  );
}

export default SiteLogo;
