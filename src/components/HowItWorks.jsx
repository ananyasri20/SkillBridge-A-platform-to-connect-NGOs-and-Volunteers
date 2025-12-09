import React from 'react';
import { FaUserPlus, FaHandshake, FaComments, FaArrowRight } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-3xl" />,
      title: "Register",
      description: "Sign up as a Volunteer or NGO. Create your profile and showcase your skills or organizational needs."
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Connect & Post",
      description: "Volunteers create skill profiles. NGOs post skill-categorized opportunities with detailed requirements."
    },
    {
      icon: <FaComments className="text-3xl" />,
      title: "Match & Act",
      description: "Browse opportunities, apply with one click, and communicate directly via our built-in chat system."
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-20"
      style={{ backgroundColor: '#d8f2f7' }}
    >
      <div className="container mx-auto px-6">
      
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-6 relative inline-block">
            How It Works
          </h2>
          <p className="text-lg font-body text-gray-700 max-w-2xl mx-auto mt-6">
            Getting started is simple. Three easy steps to connect your skills with meaningful causes.
          </p>
        </div>
        
       
        <div className="relative">
        
          <div className="flex flex-col md:flex-row justify-center items-start gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
             
                <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm md:max-w-md mx-auto 
                               border border-gray-100 hover:shadow-xl transition-all duration-300 
                               hover:-translate-y-2 relative z-10">
                
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 
                                w-12 h-12 bg-secondary rounded-full flex items-center justify-center 
                                text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  
              
                  <div className="text-secondary flex justify-center mb-6 pt-4">
                    <div className="text-4xl">
                      {step.icon}
                    </div>
                  </div>
                  
            
                  <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-4 text-center">
                    {step.title}
                  </h3>
                  
          
                  <p className="font-body text-gray-600 leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
                
              
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center absolute top-1/2 
                                right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-secondary/20 p-3 rounded-full">
                      <FaArrowRight className="text-secondary text-xl" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
       
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-secondary/30 -translate-y-1/2 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
          </div>
        </div>
        
        <div className="md:hidden flex flex-col items-center mt-8">
          {steps.slice(0, -1).map((_, index) => (
            <div key={index} className="h-8 w-0.5 bg-secondary/40 my-2"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;