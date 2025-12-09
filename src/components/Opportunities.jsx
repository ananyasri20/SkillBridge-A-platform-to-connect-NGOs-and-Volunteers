import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Opportunities = () => {
  const opportunities = [
    {
      title: "Web Developer for Education Portal",
      organization: "Learn For All Foundation", 
      description: "Help build an interactive learning platform for underprivileged students.", 
      skills: ["React", "TypeScript", "UI/UX"],
      location: "Delhi", 
      duration: "Short-term", 
      type: "Part-time"
    },
    {
      title: "Marketing Strategist",
      organization: "Clean Ocean Project", 
      description: "Develop campaigns to raise awareness about ocean conservation.", 
      skills: ["Digital Marketing", "Social Media", "Content Creation"],
      location: "Chennai", 
      duration: "Long-term", 
      type: "Part-time"
    },
    {
      title: "Translator – English to Spanish", 
      organization: "Global Health Initiative",
      description: "Translate health education materials for Spanish-speaking communities.",
      skills: ["Translation", "Medical Terminology", "Proofreading"],
      location: "Remote",
      duration: "Ongoing", 
      type: "Part-time"
    },
    {
      title: "Data Analyst for Impact Assessment", 
      organization: "Youth Empowerment Network", 
      description: "Analyze program data to measure and report social impact.", 
      skills: ["Data Analysis", "Python", "Visualization"],
      location: "Remote",
      duration: "Short-term",
      type: "Part-time"
    }
  ];

  return (
    <section id="opportunities" className="py-16 bg-secondary/10"> 
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-800 mb-4">Opportunities for Your Skills</h2>
          <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto">
            Discover meaningful ways to contribute your expertise to organizations making a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {opportunities.map((opp, index) => (
            <div key={index} className="bg-[#f0f9fb] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{opp.title}</h3>
                  <p className="text-gray-700 font-medium">{opp.organization}</p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{opp.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {opp.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-md text-sm border border-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
   
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2 text-gray-500" />
                      <span className="font-medium">{opp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-2 text-gray-500" />
                      <span className="font-medium">{opp.duration}</span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        

        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg">
            View All Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;