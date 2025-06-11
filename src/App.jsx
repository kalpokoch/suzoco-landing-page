import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurVerticals from './components/OurVerticals';
import WhyChooseUs from './components/WhyChooseUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration:1000,
  //     once: false});
  // },[]);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay ensures the DOM is ready
      }
    }
  }, [location]);
  return (
    <div className="grid-bg">
      <Navbar />
      <Hero />
      <About />
      <OurVerticals/>
      <WhyChooseUs/>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
