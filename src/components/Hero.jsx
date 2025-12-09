import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#f0f9fb]">
      <div className="relative container mx-auto px-6 py-20 text-center">
  
        <div className="mb-4">
          <h2 className="text-xl font-body font-medium tracking-wider uppercase text-primary/80">
            Connecting Skills to Cause
          </h2>
        </div>

        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight text-primary">
          SkillBridge:<br />
          <span className="text-secondary">Connect Skills to Causes</span>
        </h1>
        
        <p className="text-xl font-body max-w-3xl mx-auto mb-12 leading-relaxed text-gray-700">
          Find skilled volunteers or discover skill-based opportunities<br />
          for a lasting impact. Bridge the gap between talented<br />
          individuals and organizations making a difference.
        </p>
        
 
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          <div className="text-center">
            <div className="text-5xl font-heading font-bold mb-2 text-primary">2,500+</div>
            <div className="font-body text-lg text-gray-600">Active Volunteers</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-heading font-bold mb-2 text-primary">450+</div>
            <div className="font-body text-lg text-gray-600">Partner NGOs</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-heading font-bold mb-2 text-primary">1,200+</div>
            <div className="font-body text-lg text-gray-600">Successful Matches</div>
          </div>
        </div>
        

        <div className="flex flex-col sm:flex-row justify-center gap-6">
 
          <button className="px-10 py-4 bg-accent text-white font-body font-semibold rounded-lg hover:bg-accent-light transition text-lg shadow-md hover:shadow-lg">
            Find Opportunities
          </button>
          
          <button className="px-10 py-4 bg-white text-primary font-body font-semibold rounded-lg hover:bg-gray-50 transition text-lg border-2 border-accent shadow-md hover:shadow-lg">
            Post an Opportunity
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;