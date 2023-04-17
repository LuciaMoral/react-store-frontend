import React from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import "./Navbar.scss";

const Navbar = () => {

  return (

      <div className='navbar'>
        <Navigation />
        <MobileNavigation />
      </div>

  )
}

export default Navbar;
