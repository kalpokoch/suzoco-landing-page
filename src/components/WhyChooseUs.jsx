import React from "react";
import './WhyChooseUs.css';
import suzoco from '../assets/logo.jpeg';
import { Store, BookOpenText, LaptopMinimalCheck, ShieldCheck, Settings, Pin, Sprout } from "lucide-react";
import FadeInOnScroll from "./animations/FadeInOnScroll";

function WhyChooseUs(){
    return (
        <section id="why-choose-us" className="why-choose-section">
          <FadeInOnScroll>
          <div className="container">
            <h2>Why Choose Suzoco</h2>
            <p className="subtitle">
              Our integrated approach sets us apart, creating a synergy that maximizes <br />
              opportunities for growth and success.
            </p>
      
            <div className="ecosystem-box">
              <div className="ecosystem-header">
                  <div className="suzoco-logo">
                  <img src={suzoco} alt="Suzoco Logo" className="ecosystem-logo" />
                  </div>
                <h3>The Suzoco Ecosystem</h3>
                <p>
                  Our three business verticals are designed to complement each<br></br>
                  other,creating a seamless ecosystem that supports businesses<br></br>
                  through every stage of growth.
                </p>
              </div>
              <div className="ecosystem-cards">
                <div className="ecosystem-card orange">
                  <h4> <Store /> Market Access</h4>
                  <p>
                    Zynco provides businesses with direct access to markets, suppliers, and
                    distribution networks, reducing barriers to entry and growth.
                  </p>
                </div>
                <div className="ecosystem-card blue">
                  <h4><BookOpenText/> Skill Development</h4>
                  <p>
                    Setu Upskills ensures businesses and individuals have the knowledge and
                    skills needed to succeed in today’s competitive landscape.
                  </p>
                </div>
                <div className="ecosystem-card dark-blue">
                  <h4> <LaptopMinimalCheck /> Digital Transformation</h4>
                  <p>
                    ZCS Asia enables businesses to thrive online with tailored digital
                    solutions that enhance visibility, efficiency, and customer engagement.
                  </p>

              </div>
            </div>
      
            <h3 className="benefits-heading">How Our Ecosystem Benefits You</h3>
            <div className="benefits-grid">
              <div className="benefit"><h5> <ShieldCheck/> Reduced Risk</h5>
                <p>
                Access to markets, skills, and digital tools reduces business risk and accelerates growth.
                </p>
              </div>
              <div className="benefit"><h5><Settings/> Greater Efficiency</h5>
                <p>
                Faster implementation and better coordination across business areas.
                </p>
              </div>
              <div className="benefit"><h5> <Pin /> Tailored Support</h5>
                <p>
                Designed specifically for MSMEs, SMEs, and entrepreneurs in emerging markets.
                </p>

              </div>
              <div className="benefit"><h5> <Sprout/> Sustainable Growth</h5>
                <p>
                  Ensures balanced, sustainable growth across all dimensions.
                </p>
              </div>
            </div>
            </div>
            </div>
            </FadeInOnScroll>
        </section>
      );
};
export default WhyChooseUs;