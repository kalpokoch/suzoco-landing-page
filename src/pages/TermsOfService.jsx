import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './TermsOfService.css';

const TermsOfService = () => (
  <>
    <Navbar />
    <section className="terms-of-service container">
      <h1>Terms and Conditions</h1>
      <p className="effective-date">Effective Date: 10/06/2025</p>

      <p>
        These Terms and Conditions govern your use of the Suzoco Services website and platforms. 
        By accessing or using our services, you agree to comply with and be bound by these terms.
      </p>

      <h2>1. Use of the Website</h2>
      <p>
        You may use the site only for lawful purposes and in accordance with these terms. 
        You agree not to misuse or attempt to disrupt the website.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        All content, including text, images, logos, and code, is the property of Suzoco Services 
        and is protected by applicable copyright laws. You may not 
        reproduce or reuse any material without our written permission.
      </p>

      <h2>3. User Accounts</h2>
      <p>
        If you register an account, you are responsible for maintaining its confidentiality and 
        for all activity under your account.
      </p>

      <h2>4. Purchases and Services</h2>
      <p>
        By enrolling in a course, purchasing software, or using a service, you agree to the associated 
        terms, pricing, and refund policies.
      </p>

      <h2>5. Limitations of Liability</h2>
      <p>
        Suzoco Services is not liable for any direct or indirect damages resulting from your use or 
        inability to use our site or services.
      </p>

      <h2>6. Third-Party Links</h2>
      <p>
        Our site may contain links to third-party websites. We do not control or endorse their 
        content or services.
      </p>

      <h2>7. Termination</h2>
      <p>
        We reserve the right to suspend or terminate access to our site if you violate any part of 
        these terms.
      </p>

      <h2>8. Changes to These Terms</h2>
      <p>
        We may revise these terms from time to time. Continued use of the site means you accept the 
        updated terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These terms are governed by the laws of India. Any disputes shall be resolved in the courts 
        of Guwahati, Assam.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        For any questions or legal concerns, contact:<br />
        Email: [Insert Email]<br />
        Phone: [Insert Phone]<br />
        Address: [Insert Office Address]
      </p>
    </section>
    <Footer />
  </>
);

export default TermsOfService;
