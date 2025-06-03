import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Users, CheckCircle, Lock } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, iconColor, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (cardRef.current) {
              cardRef.current.style.transitionDelay = `${delay}ms`;
              cardRef.current.classList.add('animate-in');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl shadow-lg p-8 opacity-0 translate-y-10 group hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
    >
      <div className={`${iconColor} p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-neon-orange transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 group-hover:text-charcoal transition-colors duration-300">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-aqua-blue group-hover:scale-110 transition-transform duration-300" />,
      title: 'Verified Profiles',
      description: 'Every match is real and secure with our strict verification process.',
      iconColor: 'bg-aqua-blue/10 group-hover:bg-aqua-blue/20',
    },
    {
      icon: <Users className="h-8 w-8 text-neon-pink group-hover:scale-110 transition-transform duration-300" />,
      title: 'Emotion + Tech',
      description: 'Perfect blend of tradition and innovation in matchmaking.',
      iconColor: 'bg-neon-pink/10 group-hover:bg-neon-pink/20',
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-neon-orange group-hover:scale-110 transition-transform duration-300" />,
      title: '98% Success Rate',
      description: 'Join our community of happy couples who found their perfect match.',
      iconColor: 'bg-neon-orange/10 group-hover:bg-neon-orange/20',
    },
    {
      icon: <Lock className="h-8 w-8 text-aqua-blue group-hover:scale-110 transition-transform duration-300" />,
      title: 'Privacy First',
      description: 'Your data is protected with enterprise-grade security.',
      iconColor: 'bg-aqua-blue/10 group-hover:bg-aqua-blue/20',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-peach/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] to-[#FF3CBB] mb-4">
            Why Choose LoveDestiny
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built with care by a passionate team at VG, focusing on crafting an experience where love meets design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 100} />
          ))}
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

export default FeaturesSection;