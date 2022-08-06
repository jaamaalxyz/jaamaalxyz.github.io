import React from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const H1: React.FC<Props> = ({ children }) => (
  <h2 className="text-gray-200 text-5xl font-extrabold py-5">{children}</h2>
);

export default H1;
