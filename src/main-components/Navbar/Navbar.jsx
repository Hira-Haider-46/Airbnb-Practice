import React from 'react';
import logo from './logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <img src={logo} alt='logo' />
    </nav>
  );
}

export default Navbar;