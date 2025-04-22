import React from 'react';
import zynco from '../assets/zynco.png';
import zcs from '../assets/zcsasia.png';
import setu from '../assets/setu.png';
import './Hero.css';
import './OurVerticals.css';
import FadeInOnScroll from './animations/FadeInOnScroll';

function OurVerticals() {
  return (
    <section className="verticals-section" id="verticals">
      <FadeInOnScroll>
        <div className="container">
          <h2>Our Business Verticals</h2>
          <p className="subtitle">
            Suzoco integrates three complementary business verticals to create a holistic ecosystem for growth and success.
          </p>

          <div className="verticals-cards">
            {/* Card 1 - Zynco */}
            <div className="vertical-card">
              <div className="card-header zynco-border"></div>
              <div className='card-logo-wrapper'>
              <img src={zynco} alt="Zynco" className="card-logo" />
              </div>
              <h3 className='card-title'>The B2B Marketplace</h3>
              <p className='card-description'>
                  Connecting businesses with suppliers, franchisors, and logistics partners for seamless operations.
                  </p>
              <ul className='card-features'>
                <li>B2B marketplace platform</li>
                <li>Franchise model opportunities</li>
                <li>Comprehensive logistics support</li>
              </ul>
              <div className="usp">
                <strong>USP:</strong>
                <span>No upfront fees, end-to-end business support and market access</span>
              </div>
            </div>

            {/* Card 2 - Setu */}
            <div className="vertical-card">
              <div className="card-header zcs-border"></div>
              <div className='card-logo-wrapper'>
              <img src={setu} alt="ZCS" className="card-logo" />
              </div>
              <h3 className='card-title'>Transforming Careers & Businesses</h3>
              <p className='card-description'>
                  Practical skill development programs designed to create employment and entrepreneurship opportunities.
                  </p>
              <ul className='card-features'>
                <li>Entrepreneurship training</li>
                <li>Job-oriented courses</li>
                <li>Agricultural advancement programs</li>
              </ul>
              <div className="usp">
                <strong>USP:</strong>
                <span>Practical learning with direct integration to Suzoco's business ecosystem</span>
              </div>
            </div>

            {/* Card 3 - Setu Upskills */}
            <div className="vertical-card">
              <div className="card-header setu-border"></div>
              <div className='card-logo-wrapper'>
              <img src={zcs} alt="Setu Upskills" className="card-logo" />
              </div>
              <h3 className='card-title'>Digital Success Partner</h3>
              <p className='card-description'>Comprehensive digital transformation services to ensure businesses thrive in the digital age.

              </p>
              <ul className='card-features'>
                <li>Website development</li>
                <li>Digital marketing solutions</li>
                <li>AI-powered business tools</li>
              </ul>
              <div className="usp">
                <strong>USP:</strong>
                <span>Complete digital presence solutions tailored for businesses of all sizes</span>
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}

export default OurVerticals;
