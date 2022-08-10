import React from 'react';

const Header: React.FC = () => (
  <header className="w-3/6">
    <section className="py-20">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold lg:font-extrabold text-blue-500 md:text-green-500 xl:text-blue-600">
        Md. Jamal Uddin
      </h1>
      <p className="pt-2 pl-1 text-sm md:text-lg">
        Full Stack Software Developer -{' '}
        <span className="text-blue-400">
          React <span className="text-blue-100">(Native)</span>
        </span>{' '}
        | <span className="text-green-500">Node.js</span> |{' '}
        <span className="text-blue-600">TypeScript</span>
      </p>
    </section>
    <section className="pl-1">
      <p>
        I started off my career as a{' '}
        <span className="text-teal-200">Planning Assistant</span>
      </p>
      <p>
        I transitioned to{' '}
        <span className="text-cyan-300">Network Engineering</span>
      </p>
      <p>
        I fell in love with{' '}
        <span className="text-purple-300">Databases &amp; Data Analysis</span>
      </p>
      <p className="text-orange-700">We broke up</p>
      <p className="text-green-400">It was mutual</p>
      <p>
        I transitioned to{' '}
        <span className="text-blue-600">Full Stack (React/Node.js)</span>{' '}
        software development &amp;{' '}
        <span className="text-teal-500">never looked back</span>
      </p>
    </section>
  </header>
);

export default Header;
