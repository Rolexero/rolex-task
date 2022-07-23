import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface SelectProps {
    children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: SelectProps) => {
  return (
    <div className="container mx-auto h-px">
      <Navbar />
      <div className='wrapper container mx-auto'>{children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout