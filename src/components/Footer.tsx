import React from 'react';
import { Heart, Facebook, Instagram, Twitter, Mail, PhoneCall } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white py-12 relative overflow-hidden group">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-orange/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="group/logo">
            <div className="flex items-center mb-4 transform transition-transform duration-300 group-hover/logo:translate-x-2">
              <Heart className="text-neon-pink h-6 w-6 group-hover/logo:scale-110 transition-transform" fill="#FF3CBB" strokeWidth={1.5} />
              <span className="ml-2 font-bold text-xl text-white group-hover/logo:text-neon-pink transition-colors">LoveDestiny</span>
            </div>
            <p className="text-gray-300 mb-4 transition-colors duration-300 hover:text-white">
              Helping singles find their perfect match since 2024. Join thousands of happy couples who found love through our platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-aqua-blue transition-all duration-300 hover:scale-110 transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-aqua-blue transition-all duration-300 hover:scale-110 transform">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-aqua-blue transition-all duration-300 hover:scale-110 transform">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-aqua-blue mb-4 transform transition-transform duration-300 hover:translate-x-2">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Success Stories', 'Browse Profiles', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-neon-pink transition-all duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-medium text-aqua-blue mb-4 transform transition-transform duration-300 hover:translate-x-2">Legal</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Safety Tips'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-neon-pink transition-all duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium text-aqua-blue mb-4 transform transition-transform duration-300 hover:translate-x-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group/contact">
                <Mail className="text-neon-pink h-5 w-5 mr-2 mt-0.5 group-hover/contact:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover/contact:text-white transition-colors">support@lovedestiny.com</span>
              </li>
              <li className="flex items-start group/contact">
                <PhoneCall className="text-neon-pink h-5 w-5 mr-2 mt-0.5 group-hover/contact:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover/contact:text-white transition-colors">+1 (800) LOVE-123</span>
              </li>
            </ul>

            {/* Mini Form */}
            <div className="mt-6">
              <p className="text-sm text-gray-300 mb-2 transition-colors duration-300 hover:text-white">Get match alerts:</p>
              <div className="flex group/form">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-neon-pink w-full transition-all duration-300 group-hover/form:bg-gray-700"
                />
                <button className="bg-neon-orange text-white px-3 py-2 rounded-r-md transition-all duration-300 hover:bg-neon-pink hover:shadow-lg hover:shadow-neon-pink/20 transform hover:-translate-y-0.5">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm transition-colors duration-300 hover:text-gray-300">
            © {new Date().getFullYear()} LoveDestiny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;