import Link from 'next/link';
import React from 'react';
import H2 from './UI/H2';
import Section from './UI/Section';

const Works: React.FC = () => (
  <Section>
    <H2 subTitle="My Works" color="text-amber-800" />
    <p>
      My professional profile on{' '}
      <Link href="https://linkedin.com/in/jaamaalxyz">
        <a
          target="_blank"
          className="text-blue-600 underline decoration-blue-600 font-bold"
        >
          LinkedIn
        </a>
      </Link>
    </p>
    <p>
      Actively participating{' '}
      <Link href="https://github.com/jaamaalxyz">
        <a
          target="_blank"
          className="text-purple-600 underline decoration-purple-600"
        >
          open-source projects on
          <span className="font-bold"> GitHub</span>
        </a>
      </Link>
    </p>
    <p>
      I write technical blogs in{' '}
      <Link href="https://dev.to/jaamaalxyz">
        <a
          target="_blank"
          className="text-teal-500 font-bold underline decoration-teal-500"
        >
          The Dev Community
        </a>
      </Link>{' '}
      and{' '}
      <Link href="https://jaamaalxyz.medium.com">
        <a
          target="_blank"
          className="text-green-600 underline decoration-green-500 font-bold"
        >
          Medium
        </a>
      </Link>
    </p>
    <p>
      Conduct <span className="text-blue-400">programming classes</span> for
      <span className="text-amber-400"> beginners</span>
    </p>
  </Section>
);

export default Works;
