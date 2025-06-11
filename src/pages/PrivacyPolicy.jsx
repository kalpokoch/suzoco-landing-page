import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => (
  <>
    <Navbar />
    <section className="privacy-policy container">
      <h1>Privacy Policy</h1>
      <p className="effective-date">
        Effective Date: 10/06/2025<br />
        Last Updated: 10/06/2025
      </p>

      <p>
        Suzoco Services is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
      </p>

      <h2>1. About Us</h2>
      <p>
        Suzoco Services is a multi-vertical company operating:
      </p>
      <ul>
        <li><strong>ZCS Asia</strong> – Digital solutions and AI for business growth</li>
        <li><strong>Setu Upskills</strong> – Skill development platform</li>
        <li><strong>Zynco</strong> – A B2B marketplace</li>
      </ul>

      <h2>2. Information We Collect</h2>
      <ul>
        <li><strong>Personal Data:</strong> Name, email, phone number, company name</li>
        <li><strong>Technical Data:</strong> IP address, browser type, operating system, visit timestamps</li>
        <li><strong>Usage Data:</strong> Pages visited, time spent, and click behavior</li>
        <li><strong>Communication:</strong> Messages sent via contact forms, support chats, etc.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To deliver our services</li>
        <li>To respond to queries and customer service requests</li>
        <li>For marketing (with your consent)</li>
        <li>To improve our site and user experience</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>We do not sell your personal data. We may share it with:</p>
      <ul>
        <li>Service providers working on our behalf</li>
        <li>Legal authorities when required</li>
        <li>Business partners in case of mergers or acquisitions (with notice)</li>
      </ul>

      <h2>5. Your Rights</h2>
      <ul>
        <li>Request access, correction, or deletion of your data</li>
        <li>Withdraw consent at any time</li>
        <li>Opt out of marketing communications</li>
      </ul>

      <h2>6. Data Retention</h2>
      <p>We retain personal data only for as long as needed to fulfill the purposes outlined or as required by law.</p>

      <h2>7. Data Security</h2>
      <p>We implement industry-standard security measures to protect your data from loss, misuse, or unauthorized access.</p>

      <h2>8. Third-Party Links</h2>
      <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>

      <h2>9. Contact Us</h2>
      <p>
        Email: <a href="mailto:contact@suzocoservices.in">contact@suzocoservices.in</a><br />
        Phone: +91 81359 43334<br />
        Address: Kokrajhar, Assam, India
      </p>
    </section>
    <Footer />
  </>
);

export default PrivacyPolicy;
