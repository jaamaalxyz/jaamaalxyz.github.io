import React from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className="bg-[#1A202C] text-[#f2f2f9] flex flex-col items-center space-y-4">
    {children}
  </div>
);

export default Layout;
