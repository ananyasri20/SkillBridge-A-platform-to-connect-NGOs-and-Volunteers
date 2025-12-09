import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-secondary/70 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
        <img 
  src="/logo.png" 
  alt="SkillBridge Logo" 
  className="h-10 w-auto"  
/>
            <span className="text-2xl font-heading font-bold text-primary">SkillBridge</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="font-body font-medium text-primary hover:text-accent transition">Home</a>
            <a href="#how-it-works" className="font-body font-medium text-primary hover:text-accent transition">How It Works</a>
            <a href="#opportunities" className="font-body font-medium text-primary hover:text-accent transition">Opportunities</a>
            <a href="#features" className="font-body font-medium text-primary hover:text-accent transition">Features</a>
            <a href="#testimonials" className="font-body font-medium text-primary hover:text-accent transition">Testimonials</a>
          </nav>
          
          <div className="flex space-x-4">
            <button className="px-4 py-2 font-body font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition">
              Sign In
            </button>
            <button className="px-4 py-2 font-body font-medium text-white bg-accent rounded-lg hover:bg-accent-light transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;