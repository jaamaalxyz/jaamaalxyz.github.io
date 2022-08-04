import React from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className="bg-[#2C213B] h-screen flex flex-col justify-between text-[#f2f2f9]">
    {children}
  </div>
);

export default Layout;
