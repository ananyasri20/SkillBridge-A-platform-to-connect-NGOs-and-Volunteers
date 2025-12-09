import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: '#d8f2f7' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          
   
          <div className="text-center mb-10">
            <p className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed italic mb-12">
              "SkillBridge helped us find a volunteer with the exact UI/UX design skills we desperately needed. 
              Within a week, we had a complete redesign of our donation platform. Fantastic platform!"
            </p>
          </div>
          
          <div className="text-center">
       
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-800 text-xl font-bold">MR</span>
            </div>
            
     
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Maria Rodriguez</h4>
            <p className="text-gray-600 mb-8">Director, Community Health Network</p>
            
      
            <a 
              href="#register" 
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Register Your Organization →
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;