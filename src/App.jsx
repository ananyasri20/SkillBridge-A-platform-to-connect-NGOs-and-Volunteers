import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Opportunities from './components/Opportunities';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Opportunities />
      <Testimonials />
      <Features />
      <Footer />
    </div>
  );
}

export default App;