import React from 'react';

interface Props {
  color: string;
  subTitle: string;
}

const H2: React.FC<Props> = ({ color, subTitle }) => (
  <h2
    className={`text-2xl md:text-3xl lg:text-5xl font-extrabold ${color} py-5 lg:py-10`}
  >
    {subTitle}
  </h2>
);

export default H2;
