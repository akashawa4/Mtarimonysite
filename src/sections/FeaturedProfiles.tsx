import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, MapPin, Briefcase, GraduationCap, X, Calendar, Mail, Phone } from 'lucide-react';

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  profession: string;
  education: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

const FeaturedProfiles: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  
  const profiles: Profile[] = [
    {
      id: 1,
      name: 'Priya S.',
      age: 28,
      location: 'Mumbai, India',
      profession: 'Software Engineer',
      education: 'Masters in Computer Science',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Vegetarian', 'Yoga', 'Travel'],
      featured: true,
    },
    {
      id: 2,
      name: 'Rahul M.',
      age: 30,
      location: 'New York, USA',
      profession: 'Investment Banker',
      education: 'MBA Finance',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Fitness', 'Foodie', 'Photography'],
      featured: true,
    },
    {
      id: 3,
      name: 'Aisha K.',
      age: 27,
      location: 'London, UK',
      profession: 'Doctor',
      education: 'MBBS, MD',
      image: 'https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Reading', 'Music', 'Cooking'],
    },
    {
      id: 4,
      name: 'David L.',
      age: 32,
      location: 'Toronto, Canada',
      profession: 'Architect',
      education: 'B.Arch, M.Arch',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Travel', 'Hiking', 'Photography'],
    },
    {
      id: 5,
      name: 'Neha R.',
      age: 29,
      location: 'Delhi, India',
      profession: 'Fashion Designer',
      education: 'Bachelor in Design',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Art', 'Travel', 'Yoga'],
    },
    {
      id: 6,
      name: 'Michael T.',
      age: 31,
      location: 'Sydney, Australia',
      profession: 'Marketing Executive',
      education: 'MBA Marketing',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Surfing', 'Cooking', 'Movies'],
    },
  ];

  const ProfileModal: React.FC<{ profile: Profile; onClose: () => void }> = ({ profile, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" onClick={onClose} />
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
        style={{ animation: 'modalFadeIn 0.3s ease-out forwards' }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-neon-pink hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[400px] md:h-full">
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent md:hidden" />
          </div>

          <div className="p-8 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-charcoal mb-2">
                {profile.name}, {profile.age}
              </h3>
              <div className="flex items-center text-neon-pink">
                <MapPin size={16} className="mr-2" />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <Briefcase size={18} className="mr-3 text-neon-orange" />
                <span>{profile.profession}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <GraduationCap size={18} className="mr-3 text-neon-orange" />
                <span>{profile.education}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Calendar size={18} className="mr-3 text-neon-orange" />
                <span>Member since January 2024</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {profile.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-neon-pink/10 text-neon-pink rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="font-semibold text-charcoal">Contact Information</h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-aqua-blue" />
                  <span>Available after connecting</span>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-aqua-blue" />
                  <span>Available after connecting</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <button className="flex-1 py-3 bg-neon-orange text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium">
                Send Interest
              </button>
              <button className="w-12 h-12 flex items-center justify-center border-2 border-neon-pink text-neon-pink rounded-lg hover:bg-neon-pink hover:text-white transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProfileCard: React.FC<{ profile: Profile; className?: string }> = ({ profile, className = '' }) => (
    <div 
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${className}`}
      style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}
    >
      <div className="relative h-full">
        <img 
          src={profile.image} 
          alt={profile.name} 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        
        <button className="absolute top-4 right-4 p-2.5 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neon-pink hover:text-white">
          <Heart size={20} />
        </button>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-white">{profile.name}, {profile.age}</h3>
            </div>
            
            <div className="space-y-2 text-white/90">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center">
                <Briefcase size={16} className="mr-2" />
                <span>{profile.profession}</span>
              </div>
              <div className="flex items-center">
                <GraduationCap size={16} className="mr-2" />
                <span>{profile.education}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {profile.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex space-x-3 pt-2">
              <button className="flex-1 py-2.5 bg-neon-orange text-white rounded-lg hover:bg-opacity-90 transition-colors text-sm font-medium backdrop-blur-sm">
                Send Interest
              </button>
              <button 
                onClick={() => setSelectedProfile(profile)}
                className="flex-1 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white hover:text-charcoal transition-colors text-sm font-medium"
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="featured-profiles" className="py-16 bg-gradient-to-br from-peach/30 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Featured Profiles
          </h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveIndex((prev) => (prev - 1 + profiles.length) % profiles.length)}
              className="p-2 rounded-full bg-gray-100 hover:bg-neon-orange hover:text-white transition-colors"
              aria-label="Previous profiles"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => setActiveIndex((prev) => (prev + 1) % profiles.length)}
              className="p-2 rounded-full bg-gray-100 hover:bg-neon-orange hover:text-white transition-colors"
              aria-label="Next profiles"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Featured Profile - Large */}
          <div className="md:col-span-6 lg:col-span-8 lg:row-span-2">
            <ProfileCard 
              profile={profiles[0]} 
              className="h-full"
            />
          </div>

          {/* Secondary Featured Profile */}
          <div className="md:col-span-6 lg:col-span-4 lg:row-span-1">
            <ProfileCard 
              profile={profiles[1]} 
              className="h-full"
            />
          </div>

          {/* Regular Profiles Grid */}
          {profiles.slice(2).map((profile) => (
            <div key={profile.id} className="md:col-span-3 lg:col-span-4">
              <ProfileCard profile={profile} className="h-full" />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#" 
            className="inline-block text-neon-orange hover:text-neon-pink font-medium transition-colors"
          >
            View All Profiles →
          </a>
        </div>
      </div>

      {selectedProfile && (
        <ProfileModal 
          profile={selectedProfile} 
          onClose={() => setSelectedProfile(null)} 
        />
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProfiles;