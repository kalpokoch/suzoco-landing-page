import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#">
          <img src={logo} alt="Suzoco Logo" className="logo" />
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#verticals">Our Verticals</a></li>
          <li><a href="#why-choose-us">Why Choose Us</a></li>
          <li><a href="#contact-us" className='contact-button'>Contact Us</a></li>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
