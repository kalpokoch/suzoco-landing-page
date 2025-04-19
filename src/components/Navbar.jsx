import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <img src={logo} alt="Suzoco Logo" className="logo" />
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
