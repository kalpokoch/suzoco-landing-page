import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CookiesPolicy.css';

const CookiesPolicy = () => (
  <>
    <Navbar />
    <section className="cookies-policy container">
      <h1>Cookie Policy</h1>
      <p className="effective-date">Effective Date: 10/06/2025</p>

      <p>This Cookie Policy explains how Suzoco Services uses cookies and similar technologies to enhance your experience on our website.</p>

      <h2>1. What Are Cookies?</h2>
      <p>Cookies are small text files placed on your device to store data about your browsing behavior and preferences.</p>

      <h2>2. Types of Cookies We Use</h2>
      <ul>
        <li><strong>Essential Cookies:</strong> Required for site functionality</li>
        <li><strong>Analytics Cookies:</strong> To understand site usage and performance</li>
        <li><strong>Functional Cookies:</strong> To remember preferences</li>
        <li><strong>Marketing Cookies:</strong> To display relevant ads and content</li>
      </ul>

      <h2>3. How We Use Cookies</h2>
      <p>We use cookies to:</p>
      <ul>
        <li>Maintain secure sessions</li>
        <li>Improve website performance</li>
        <li>Understand user behavior</li>
        <li>Provide personalized experiences</li>
      </ul>

      <h2>4. Managing Cookies</h2>
      <p>You can manage cookie preferences through your browser settings. Disabling cookies may affect some site features.</p>

      <h2>5. Third-Party Cookies</h2>
      <p>Some third-party tools (e.g., analytics or embedded videos) may use their own cookies. Please refer to their policies for more information.</p>
    </section>
    <Footer />
  </>
);

export default CookiesPolicy;
