import React from 'react';
import { Mail, Bell } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-charcoal to-charcoal/90 text-white relative overflow-hidden group">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-orange/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className="inline-flex items-center justify-center p-2 bg-neon-pink/20 rounded-full mb-6 transform transition-all duration-300 hover:scale-110 hover:bg-neon-pink/30 cursor-pointer group/bell"
          >
            <Bell className="text-neon-pink h-5 w-5 mr-2 group-hover/bell:animate-bounce" />
            <span className="text-neon-pink font-medium">Stay Updated</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 transform transition-all duration-300 hover:scale-105">
            Get Love Tips & Match Alerts
          </h2>
          <p className="text-gray-300 mb-8 transition-colors duration-300 hover:text-white">
            Subscribe to our newsletter and receive weekly relationship advice, dating tips, and get notified 
            when someone matching your preferences joins our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-0 max-w-lg mx-auto group/form">
            <div className="flex-grow">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-300 group-hover/form:text-neon-pink" />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full pl-10 pr-4 py-3 bg-white/10 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-neon-pink text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/20 focus:bg-white/20"
                />
              </div>
            </div>
            <button className="px-6 py-3 bg-neon-orange text-white rounded-r-lg transition-all duration-300 hover:bg-neon-pink hover:shadow-lg hover:shadow-neon-pink/20 font-medium transform hover:-translate-y-0.5">
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-4 transition-colors duration-300 hover:text-gray-300">
            By subscribing, you agree to our{' '}
            <a href="#" className="text-neon-pink hover:text-neon-orange transition-colors duration-300 underline-offset-2 hover:underline">
              Privacy Policy
            </a>
            {' '}and consent to receive updates from us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;