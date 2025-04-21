import React from 'react';
import './About.css';
import check from '../assets/checkmark.png';
function About() {
  return (
    <section 
      className="about-section"
      id="about"
    >
      <div className="container">
        <h2 className="about-heading">About Suzoco</h2>
        <p className="about-subheading">
          At Suzoco, we believe in creating a comprehensive ecosystem that empowers
          <br />
          businesses at every stage of their journey.
        </p>

        <div className="about-content">
          <div className="about-left">
            <h3>Our Vision</h3>
            <p>
              To create an integrated business ecosystem that enables sustainable growth
              for MSMEs, SMEs, entrepreneurs, and job seekers, particularly in underserved
              regions.
            </p>

            <h3>Our Mission</h3>
            <p>
              To provide accessible, comprehensive, and integrated business solutions through
              our three verticals - marketplace, skill development, and digital transformation -
              creating a supportive environment for business success.
            </p>
          </div>

          <div className="about-right">
            <div className="advantage-card">
              <h3>The Suzoco Advantage</h3>
              <ul>
                <li>
                    <div className='list-title'>
                    <img src={check} alt="check" className='list-icon' />
                    <strong>Integrated Ecosystem:</strong>
                    </div>
                    <p className='list-desc'>
                    Our three business verticals work together to provide end-to-end solutions.
                    </p>
                </li>
                <li>
                    <div className='list-title'>
                        <img src={check} alt="check" className='list-icon' />
                        <strong>Local Focus, Global Standards:</strong>
                    </div>
                    <p className='list-desc'>
                        Based in Kokrajhar, Assam, we bring world-class business solutions to underserved regions.
                    </p>
                </li>
                <li>
                    <div className='list-title'>
                        <img src={check} alt="check" className='list-icon' />
                        <strong>Support at Every Stage:</strong>
                    </div>
                    <p className='list-desc'>
                        From market access to skill development to digital transformation, we've got you covered.
                    </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
