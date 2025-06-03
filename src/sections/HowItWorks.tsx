import React from 'react';
import { UserPlus, FileText, Users, MessageCircle } from 'lucide-react';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
  isLast: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, number, isLast }) => {
  return (
    <div className="flex flex-col items-center text-center relative group">
      <div className="bg-white rounded-full p-4 shadow-md mb-4 relative z-10 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-gradient-to-r from-neon-orange to-neon-pink group-hover:text-white">
        {icon}
      </div>
      <div className="bg-white rounded-xl p-6 shadow-md relative z-10 h-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:bg-gradient-to-br from-white to-peach/20">
        <div className="bg-neon-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm absolute -top-3 -right-3 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
          {number}
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-2 transform transition-all duration-300 group-hover:scale-105">{title}</h3>
        <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-700">{description}</p>
      </div>
      
      {!isLast && (
        <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-aqua-blue to-neon-pink transform transition-all duration-300 group-hover:scale-110 group-hover:opacity-80" style={{ transform: 'translateX(50%)' }}></div>
      )}
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-aqua-blue group-hover:text-white transition-colors duration-300" />,
      title: 'Register',
      description: 'Create your account and verify your identity to get started on your journey.',
    },
    {
      icon: <FileText className="h-10 w-10 text-neon-pink group-hover:text-white transition-colors duration-300" />,
      title: 'Complete Profile',
      description: 'Tell us about yourself, your preferences, and what you\'re looking for in a partner.',
    },
    {
      icon: <Users className="h-10 w-10 text-aqua-blue group-hover:text-white transition-colors duration-300" />,
      title: 'Get Matches',
      description: 'Receive daily matches that are carefully selected based on your preferences.',
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-neon-pink group-hover:text-white transition-colors duration-300" />,
      title: 'Connect',
      description: 'Start conversations, build relationships, and find your perfect match.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-peach/50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] to-[#FF3CBB] mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finding your perfect match is easy with our simple 4-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              {...step} 
              number={index + 1} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;