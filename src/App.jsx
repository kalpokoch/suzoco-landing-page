import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurVerticals from './components/OurVerticals';
import WhyChooseUs from './components/WhyChooseUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './index.css';


function App() {
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
