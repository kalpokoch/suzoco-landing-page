import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
        <Link to="/#" className="logo-container">
          <img src={logo} alt="Suzoco Logo" className="logo" />
        </Link>
        <div 
          className={`nav-links-container ${menuOpen ? 'open' : ''}`} 
          onClick={handleMenuClick}
        >
          <ul className='nav-links'>
            <li><Link smooth to="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link smooth to="/#verticals" onClick={() => setMenuOpen(false)}>Our Verticals</Link></li>
            <li><Link smooth to="/#why-choose-us" onClick={() => setMenuOpen(false)}>Why Choose Us</Link></li>
            <li className='contact-button'><Link smooth to="/#contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          </ul>  
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