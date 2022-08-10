import Link from 'next/link';
import React from 'react';

const Works: React.FC = () => (
  <section className="py-10">
    <h2 className="text-5xl font-extrabold text-amber-700 py-10">What I do?</h2>
    <p>
      Working as a Full Stack Developer -{' '}
      <Link href="https://linkedin.com/in/jaamaalxyz">
        <a
          target="_blank"
          className="text-blue-600 underline decoration-blue-600"
        >
          professional profile on <span className="font-bold">LinkedIn</span>
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
      and
    </p>
    <p>
      write tech, life and thoughts in my mother tongue{' '}
      <Link href="https://jaamaalxyz.medium.com">
        <a
          target="_blank"
          className="text-green-500 underline decoration-green-500"
        >
          Bengali on <span className="font-bold">Medium</span>
        </a>
      </Link>
    </p>
    <p>
      Conduct <span className="text-blue-400">programming classes</span> for
      <span className="text-amber-400"> beginners</span> and
    </p>
    <p>
      <span className="text-orange-400">Mentoring</span> junior developers
      <span className="text-purple-600"> in-person</span>
    </p>
  </section>
);

export default Works;
