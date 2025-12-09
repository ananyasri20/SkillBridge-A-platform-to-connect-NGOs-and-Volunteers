import React from 'react';
import { FaComments, FaTasks, FaUsers, FaShieldAlt, FaUserTie, FaBell } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaComments />,
      title: "Real-time Messaging",
      description: "Connect instantly with volunteers or NGOs through our built-in chat system."
    },
    {
      icon: <FaTasks />,
      title: "Application Management",
      description: "Track applications, manage volunteers, and streamline the onboarding process."
    },
    {
      icon: <FaUsers />,
      title: "Skill-based Matching",
      description: "Advanced filtering to find the perfect match based on skills, location, and availability."
    },
    {
      icon: <FaShieldAlt />,
      title: "Verified Organizations",
      description: "All NGOs are verified to ensure authentic and impactful volunteer opportunities."
    },
    {
      icon: <FaUserTie />,
      title: "Role-based Profiles",
      description: "Tailored experiences for both volunteers and organizations with dedicated dashboards."
    },
    {
      icon: <FaBell />,
      title: "Smart Notifications",
      description: "Get notified about new opportunities, application updates, and messages."
    }
  ];

  return (
    <section id="features" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-800 mb-4">
            Platform Features Built for Seamless Connection
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Everything you need to make meaningful connections and create lasting impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#f0f9fb] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 text-xl mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="font-body text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;