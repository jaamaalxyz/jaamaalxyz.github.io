import React from 'react';

const Header: React.FC = () => (
  <header className="sm:w-full md:w-auto lg:w-5/8 p-5">
    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold lg:font-extrabold text-blue-500 md:text-green-500 xl:text-blue-600 md:pt-10">
      Md. Jamal Uddin
    </h1>
    <p className="pt-2 text-sm md:text-lg">
      Full Stack Software Developer -{' '}
      <span className="text-blue-400">
        React <span className="text-blue-100">(Native)</span>
      </span>{' '}
      | <span className="text-green-500">Node.js</span> |{' '}
      <span className="text-blue-600">TypeScript</span>
    </p>
  </header>
);

export default Header;
