import React from 'react';
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
                <div className="logo-tile">
                    <div className="logos">
                        <img src="src/assets/zynco.png" alt="Zynco" />
                        <img src="src/assets/setu.png" alt="Setu Upskills" />
                        <img src="src/assets/zcsasia.png" alt="ZCS" />
                    </div>
                    <div className="color-bar"></div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;
