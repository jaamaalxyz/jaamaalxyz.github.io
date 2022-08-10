import React from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Section: React.FC<Props> = ({ children }) => (
  <section className="py-6 lg:py-10">{children}</section>
);

export default Section;
