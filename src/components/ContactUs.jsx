import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MapPinHouse, Mails, PhoneIncoming } from 'lucide-react';
import FadeInOnScroll from './animations/FadeInOnScroll';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section id= 'contact-us' className="contact-section">
      <FadeInOnScroll>
        <div className='container'>
        <h2>Contact Us</h2>
        <p>Ready to grow your business with a complete ecosystem of support? <br />
          Get in touch with us today.</p>

        <div className="contact-container">
          <div className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <select>
              <option>General Inquiry</option>
              <option>Zynco B2B - MarketPlace</option>
              <option>ZCS Asia - Digital Services</option>
              <option>Setu UpSkills - Training</option>
            </select>
            <textarea placeholder="How Can I help you?"></textarea>
            <button type="submit">Send Message</button>
          </div>

          <div className="contact-info">
            <h4>Get in Touch</h4>
            <p>Have questions about how Suzoco can help your business grow?</p>

              <div className='contact-details'>
                  <h5> <MapPinHouse/> Address:</h5> 
                  <p>Kokrajhar, Assam, India</p>
              </div>
            <div className='contact-details'>
              <h5> <Mails/> Email:</h5>
                  <p>info@suzoco.com</p>
              </div>
            <div className='contact-details'>
              <h5> <PhoneIncoming/> Phone:</h5>
                  <p>+91 12345 67890</p>
              </div>

            <div className="socials">
              <span>Connect with Us</span>
              <div className='icon-links'>
                <a href="#" className='social-icon'>
                  <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="#" className='social-icon'>
                  <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="#" className='social-icon'>
                  <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        </FadeInOnScroll>
    </section>
  );
};

export default ContactUs;
