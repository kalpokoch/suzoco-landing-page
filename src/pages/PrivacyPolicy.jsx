import React from 'react';
import Navbar from '../components/Navbar';
import './PrivacyPolicy.css'; // 👈 import the CSS

const PrivacyPolicy = () => (
  <div>
    <Navbar />
    <div className="privacy-policy-content">
      <h1>Privacy Policy</h1>
      <p>This is your privacy policy content.</p>
    </div>
  </div>
);

export default PrivacyPolicy;
