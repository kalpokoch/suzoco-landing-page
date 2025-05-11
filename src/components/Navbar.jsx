import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
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

  // Close menu when clicking outside
  useEffect(() => {
    if (menuOpen) {
      const closeMenu = () => setMenuOpen(false);
      document.addEventListener('click', closeMenu);
      return () => document.removeEventListener('click', closeMenu);
    }
  }, [menuOpen]);

  // Prevent menu from closing when clicking inside it
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo-container">
          <img src={logo} alt="Suzoco Logo" className="logo" />
        </a>

        <div 
          className={`nav-links ${menuOpen ? 'open' : ''}`} 
          onClick={handleMenuClick}
        >
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#verticals" onClick={() => setMenuOpen(false)}>Our Verticals</a></li>
          <li><a href="#why-choose-us" onClick={() => setMenuOpen(false)}>Why Choose Us</a></li>
          <li><a href="#contact-us" className='contact-button' onClick={() => setMenuOpen(false)}>Contact Us</a></li>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;