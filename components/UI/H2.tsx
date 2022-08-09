import React from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const H2: React.FC<Props> = ({ children }) => (
  <h2 className="text-gray-100 text-3xl font-semibold py-2">{children}</h2>
);

export default H2;
