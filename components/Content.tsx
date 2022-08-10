import React from 'react';
import Contact from './Contact';
import Hobby from './Hobby';
import Philosophies from './Philosophies';
import Works from './Works';

const Content: React.FC = () => (
  <main className="w-11/12 lg:w-3/6">
    <Philosophies />
    <Works />
    <Hobby />
    <Contact />
  </main>
);

export default Content;
