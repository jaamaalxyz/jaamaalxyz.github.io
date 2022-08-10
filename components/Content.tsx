import React from 'react';
import Philosophies from './Philosophies';
import Works from './Works';

const Content: React.FC = () => (
  <main className="w-3/6">
    <Philosophies />
    <Works />
  </main>
);

export default Content;
