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
              <li><a href="#verticals">Zynco</a></li>
              <li><a href="#verticals">Setu Upskills</a></li>
              <li><a href="#verticals">ZCS Asia</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#verticals">Our Verticals</a></li>
              <li><a href="#why-choose-us">Why Choose Us</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
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
