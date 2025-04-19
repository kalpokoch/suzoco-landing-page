import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurVerticals from './components/OurVerticals';
import './index.css';

function App() {
  return (
    <div className="grid-bg">
      <Navbar />
      <Hero />
      <About />
      <OurVerticals/>
    </div>
  );
}

export default App;
