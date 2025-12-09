import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#223343' }}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold">SkillBridge</span>
            </div>
            <p className="opacity-90 mb-6">
              Connecting skilled volunteers with NGOs for meaningful impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:opacity-80 transition"><FaFacebook /></a>
              <a href="#" className="text-white hover:opacity-80 transition"><FaTwitter /></a>
              <a href="#" className="text-white hover:opacity-80 transition"><FaLinkedin /></a>
              <a href="#" className="text-white hover:opacity-80 transition"><FaInstagram /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition">Find Opportunities</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition">Post Opportunities</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition">Browse Skills</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition">Help Center</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition">Blog</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition">NGO Resources</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition">Volunteer Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition">About Us</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition">Contact</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition">Privacy Policy</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p>© 2025 SkillBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;