import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import zynco from '../assets/zynco.png';
import zcs from '../assets/zcsasia.png';
import setu from '../assets/setu.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero grid-bg">
        <div className="container hero-content">
            <div className="hero-left">
                <h1>EMPOWERING<br />BUSINESSES.<br />ENABLING<br />SUCCESS.</h1>
                <h2>A future-ready business ecosystem for growth</h2>
                <p>
                Suzoco Group integrates marketplace solutions, training, and
                digital transformation services to create a holistic support system
                for businesses.
                </p>
                <button>Explore Our Ecosystem</button>
            </div>

            <div className="hero-right">
                <a href="#verticals">
                    <div className='logo-wrapper'>
                        <div className="logo-tile">
                            <div className="logos">
                                <img src={zynco} alt="Zynco" />
                                <img src={setu} alt="Setu Upskills" />
                                <img src={zcs} alt="ZCS" />
                            </div>
                            <div className="color-bar"></div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
  );
}

export default Hero;
