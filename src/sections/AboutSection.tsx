import React, { useEffect, useRef } from 'react';
import { Heart, Linkedin, Mail, Code, Palette, Star, Coffee } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-12">
            <span className="text-neon-pink font-semibold text-lg mb-2 block">About Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-orange to-neon-pink">
              Where Stories Begin and Souls Connect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with passion and purpose, bringing modern matchmaking to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-r from-charcoal to-charcoal/90 rounded-2xl p-8 text-center transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl group">
              <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 group-hover:bg-white/20 transition-all duration-300">
                <div className="text-left space-y-4">
                  <div>
                    <p className="font-medium text-white text-lg group-hover:text-neon-pink transition-colors">Meet the Maker</p>
                    <p className="text-aqua-blue font-bold group-hover:text-white transition-colors">VG Intern</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                      <Code className="h-4 w-4 mr-2" />
                      <span>Full Stack Developer</span>
                    </div>
                    <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                      <Palette className="h-4 w-4 mr-2" />
                      <span>UI/UX Designer</span>
                    </div>
                    <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                      <Star className="h-4 w-4 mr-2" />
                      <span>3+ Years Experience</span>
                    </div>
                    <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                      <Coffee className="h-4 w-4 mr-2" />
                      <span>100+ Projects Delivered</span>
                    </div>
                  </div>
                </div>
                <div className="h-[160px] w-px bg-white/20"></div>
                <div className="text-left space-y-4">
                  <div>
                    <p className="text-white text-sm font-medium">Specializations</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 bg-neon-pink/20 text-neon-pink rounded-md text-xs hover:bg-neon-pink hover:text-white transition-all duration-300">React</span>
                      <span className="px-2 py-1 bg-aqua-blue/20 text-aqua-blue rounded-md text-xs hover:bg-aqua-blue hover:text-white transition-all duration-300">TypeScript</span>
                      <span className="px-2 py-1 bg-neon-orange/20 text-neon-orange rounded-md text-xs hover:bg-neon-orange hover:text-white transition-all duration-300">UI/UX</span>
                      <span className="px-2 py-1 bg-white/20 text-white rounded-md text-xs hover:bg-white hover:text-charcoal transition-all duration-300">Node.js</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Contact</p>
                    <div className="flex items-center mt-2 space-x-3">
                      <a href="#" className="text-white/80 hover:text-aqua-blue transition-colors transform hover:scale-110">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-white/80 hover:text-aqua-blue transition-colors transform hover:scale-110">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-neon-pink/10 to-neon-orange/10 p-8 rounded-2xl border border-neon-pink/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-neon-pink transition-colors">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed group-hover:text-charcoal">
                  Our mission is to make matrimonial connections more joyful, modern, and meaningful—with 
                  a blend of tech and heart. We believe finding your life partner should be a delightful 
                  and intuitive experience.
                </p>
              </div>

              <div className="bg-white shadow-xl rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-aqua-blue/10 rounded-xl flex items-center justify-center group-hover:bg-aqua-blue transition-all duration-300">
                      <Heart className="h-6 w-6 text-aqua-blue group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-aqua-blue transition-colors">Built with Care</h3>
                    <p className="text-gray-600 group-hover:text-charcoal transition-colors">
                      As a UI/UX-focused intern at VG, I helped design this platform to make finding 
                      your life partner a delightful and intuitive experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-neon-pink/10 p-6 rounded-2xl transform hover:scale-[1.02] transition-all duration-300 hover:bg-neon-pink/20 group">
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-pink mb-2 group-hover:scale-110 transition-transform">1M+</div>
                <div className="text-sm text-gray-600 group-hover:text-charcoal transition-colors">Active Users</div>
              </div>
            </div>

            <div className="bg-aqua-blue/10 p-6 rounded-2xl transform hover:scale-[1.02] transition-all duration-300 hover:bg-aqua-blue/20 group">
              <div className="text-center">
                <div className="text-4xl font-bold text-aqua-blue mb-2 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm text-gray-600 group-hover:text-charcoal transition-colors">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;