import React from 'react';
import './css/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Projects</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
