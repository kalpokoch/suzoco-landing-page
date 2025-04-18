import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <img src="src\assets\logo.jpeg" alt="Suzoco Logo" className="logo" />
        <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#verticals">Our Verticals</a></li>
            <li><a href="#why">Why Choose Us</a></li>
            <li><button>Contact Us</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
