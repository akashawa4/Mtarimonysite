import React from 'react';
import { Heart, MapPin, Briefcase, GraduationCap } from 'lucide-react';

interface MatchResultsProps {
  type: 'bride' | 'groom' | null;
  age: { from: string; to: string };
  religion: string;
  location: string;
  motherTongue: string;
  education: string;
}

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  profession: string;
  education: string;
  image: string;
  religion: string;
  motherTongue: string;
}

const MatchResults: React.FC<MatchResultsProps> = ({ type }) => {
  const brideProfiles: Profile[] = [
    {
      id: 1,
      name: 'Priya S.',
      age: 28,
      location: 'Mumbai, India',
      profession: 'Software Engineer',
      education: "Master's Degree",
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      religion: 'Hindu',
      motherTongue: 'Hindi'
    },
    {
      id: 2,
      name: 'Aisha K.',
      age: 27,
      location: 'London, UK',
      profession: 'Doctor',
      education: 'Professional Degree',
      image: 'https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      religion: 'Muslim',
      motherTongue: 'English'
    },
    {
      id: 3,
      name: 'Neha R.',
      age: 29,
      location: 'Delhi, India',
      profession: 'Fashion Designer',
      education: "Bachelor's Degree",
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      religion: 'Hindu',
      motherTongue: 'Hindi'
    }
  ];

  const groomProfiles: Profile[] = [
    {
      id: 4,
      name: 'Rahul M.',
      age: 30,
      location: 'New York, USA',
      profession: 'Investment Banker',
      education: "Master's Degree",
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      religion: 'Hindu',
      motherTongue: 'English'
    },
    {
      id: 5,
      name: 'David L.',
      age: 32,
      location: 'Toronto, Canada',
      profession: 'Architect',
      education: "Master's Degree",
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      religion: 'Christian',
      motherTongue: 'English'
    },
    {
      id: 6,
      name: 'Michael T.',
      age: 31,
      location: 'Sydney, Australia',
      profession: 'Marketing Executive',
      education: "Bachelor's Degree",
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      religion: 'Christian',
      motherTongue: 'English'
    }
  ];

  const profiles = type === 'bride' ? brideProfiles : groomProfiles;

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-charcoal mb-8">
        {profiles.length} Matches Found
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div 
            key={profile.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img 
                src={profile.image} 
                alt={profile.name} 
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-neon-pink hover:text-white transition-colors">
                <Heart className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-bold text-charcoal mb-2">
                {profile.name}, {profile.age}
              </h4>
              
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-neon-pink" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2 text-neon-pink" />
                  <span>{profile.profession}</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2 text-neon-pink" />
                  <span>{profile.education}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-neon-pink/10 text-neon-pink rounded-full text-sm">
                    {profile.religion}
                  </span>
                  <span className="px-3 py-1 bg-aqua-blue/10 text-aqua-blue rounded-full text-sm">
                    {profile.motherTongue}
                  </span>
                </div>
              </div>
              
              <button className="w-full mt-4 py-2 bg-neon-orange text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchResults;