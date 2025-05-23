import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { MapPinHouse, Mails, PhoneIncoming } from 'lucide-react';
import FadeInOnScroll from './animations/FadeInOnScroll';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert('message sent successfully');
        setFormData({name: '', email: '', phone: '', inquiryType: 'General Inquiry', message: ''})
      } else{
        alert('Failed to send message');
      }
    } catch (err){
      console.error(err);
      alert('Error occured. Please try again later.');
    }
  };

  return (
    <section id= 'contact-us' className="contact-section">
      <FadeInOnScroll>
        <div className='container'>
        <h2>Contact Us</h2>
        <p>Ready to grow your business with a complete ecosystem of support? <br />
          Get in touch with us today.</p>

        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name='phone'
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <select
              name='inquiryType'
              value={formData.inquiryType}
              onChange={handleChange}
            >
              <option>General Inquiry</option>
              <option>Zynco B2B - MarketPlace</option>
              <option>ZCS Asia - Digital Services</option>
              <option>Setu UpSkills - Training</option>
            </select>
            <textarea
              name='message'
              placeholder='How Can I help You?'
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Send Message</button>
          </form>

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
