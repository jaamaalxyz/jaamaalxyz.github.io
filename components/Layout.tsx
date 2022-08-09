import React from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className="bg-[#1A202C] text-[#f2f2f9] h-screen flex flex-col justify-between items-center space-y-4">
    {children}
  </div>
);

export default Layout;
