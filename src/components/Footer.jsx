import React from "react";
import { Link } from 'react-router-dom';
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
              {/* <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a> */}
              <a href="https://www.linkedin.com/company/suzoco-services/posts/?feedView=all"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="https://www.instagram.com/suzocoservices?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FontAwesomeIcon icon={faInstagram} /></a>
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
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookies-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
