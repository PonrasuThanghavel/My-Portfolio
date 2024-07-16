import React, { useState } from 'react';
import './css/navbar.css';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <img src={Logo} alt="Logo" /> 
      </a>

      <ul className={menuActive ? 'menu active' : 'menu'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>

      <button className="burger-menu" onClick={toggleMenu}>
        &#9776; Menu
      </button> 
    </nav>
  );
}

export default Navbar;
