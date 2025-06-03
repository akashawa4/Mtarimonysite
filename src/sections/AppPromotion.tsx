import React from 'react';
import { CheckCircle, Download } from 'lucide-react';

const AppPromotion: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] to-[#FF3CBB] mb-6">
              Find Love on the Go!
            </h2>
            <p className="text-gray-600 mb-6">
              Download our mobile app and take your search for the perfect match wherever you go. 
              Get instant notifications, chat with potential matches, and stay updated on new profiles 
              that match your preferences.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="text-neon-orange h-5 w-5 mt-0.5 mr-2" />
                <span>Instant match notifications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-neon-orange h-5 w-5 mt-0.5 mr-2" />
                <span>Chat with your matches anytime, anywhere</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-neon-orange h-5 w-5 mt-0.5 mr-2" />
                <span>Browse profiles during your commute</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-neon-orange h-5 w-5 mt-0.5 mr-2" />
                <span>Update your profile on the go</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-aqua-blue text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium flex items-center justify-center">
                <Download className="mr-2 h-5 w-5" />
                <span>App Store</span>
              </button>
              <button className="px-6 py-3 bg-aqua-blue text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium flex items-center justify-center">
                <Download className="mr-2 h-5 w-5" />
                <span>Google Play</span>
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="bg-gradient-to-br from-neon-pink to-neon-orange rounded-3xl h-96 w-64 mx-auto relative overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="App Screenshot" 
                  className="h-full w-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg">Find your perfect match anywhere, anytime</p>
                </div>
              </div>
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-aqua-blue/20 h-48 w-48 rounded-full blur-2xl -z-10"></div>
              <div className="absolute bottom-10 -left-8 bg-neon-pink/20 h-32 w-32 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;