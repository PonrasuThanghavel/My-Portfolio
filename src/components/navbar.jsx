

import React, { useState } from 'react';
import './css/navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo">Logo</a>

      <ul className={menuActive ? 'menu active' : 'menu'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* Add more menu items as needed */}
      </ul>

      <div className="burger-menu" onClick={toggleMenu}>
        &#9776; 
      </div>
    </nav>
  );
}

export default Navbar;
