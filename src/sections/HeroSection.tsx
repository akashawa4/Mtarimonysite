import React, { useEffect, useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-br from-peach to-peach/70 pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div 
            ref={textRef}
            className="md:w-1/2 mb-10 md:mb-0 opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
              Find the one who feels like{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-orange to-neon-pink">
                home ❤️
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Join thousands finding love with modern matchmaking
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-[#FF4E50] text-white rounded-full hover:bg-[#FF66B3] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,102,179,0.3)] font-medium flex items-center justify-center group">
                <span className="group-hover:translate-x-1 transition-transform">Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg font-medium flex items-center justify-center group">
                <PlayCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>How It Works</span>
              </button>
            </div>
          </div>
          <div 
            ref={imageRef}
            className="md:w-1/2 opacity-0 translate-x-[50px] transition-all duration-1000 ease-out"
          >
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-300">
                <img
                  src="https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Happy couple"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-white font-medium text-lg">
                      "We found each other on LoveDestiny after just 3 weeks!"
                    </p>
                    <p className="text-aqua-blue font-bold mt-2">— Michael & Sarah</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neon-pink rounded-full z-0 animate-pulse-slow opacity-50 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-aqua-blue rounded-full z-0 animate-pulse-slow opacity-50 blur-2xl"></div>
            </div>

            <div className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-lg animate-bounce-slow">
              <p className="text-charcoal font-semibold">
                37,540 matched ❤️
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;