import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import './index.css';

function App() {
  return (
    <div className="grid-bg">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
