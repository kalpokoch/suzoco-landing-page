import React from "react";
import suzoco from '../assets/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <section id="footer" className="footer-section">
      <div className="container">
        <img src={suzoco} alt="Suzoco Logo" className="footer-logo" />

        <div className="footer-container">
          <div className="footer-column">
            <p className="tagline">A future-ready business<br />ecosystem for growth and success.</p>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>

          <div className="footer-column">
            <ul>
              <li>Zynco</li>
              <li>Setu Upskills</li>
              <li>ZCS Asia</li>
            </ul>
          </div>

          <div className="footer-column">
            <ul>
              <li>About Us</li>
              <li>Our Verticals</li>
              <li>Why Choose Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-column">
            <ul>
              <li>Kokrajhar, Assam, India</li>
              <li>info@suzoco.com</li>
              <li>+91 12345 67890</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
            <div className="footer-heading">
                <p>© 2025 Suzoco Pvt Ltd. All rights reserved.</p>
            </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
