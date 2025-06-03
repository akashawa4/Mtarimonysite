import React, { useState } from 'react';
import { Search, Heart, Users, Filter } from 'lucide-react';
import MatchResults from './MatchResults';

const QuickSearch: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'bride' | 'groom' | null>(null);
  const [age, setAge] = useState({ from: '18', to: '35' });
  const [religion, setReligion] = useState('');
  const [location, setLocation] = useState('');
  const [motherTongue, setMotherTongue] = useState('');
  const [education, setEducation] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <section id="quick-search" className="py-12 md:py-16 relative -mt-8 z-10">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSearch} className="bg-[#FFF1ED] rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[#FF6B00] text-4xl font-bold">Browse Profiles</h2>
            <div className="flex items-center space-x-2 text-gray-500">
              <Filter className="h-5 w-5" />
              <span className="text-sm">Filters</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Looking for - Spans 4 columns */}
            <div className="md:col-span-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <label className="text-[#1E1E1E] text-base mb-4 block">Looking for:</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedType('bride')}
                  className={`flex-1 px-6 py-3 rounded-xl text-base transition-all duration-300 ${
                    selectedType === 'bride'
                      ? 'bg-[#FF3CBB] text-white shadow-lg'
                      : 'bg-white text-[#1E1E1E] border border-[#FF3CBB] hover:bg-[#FF3CBB]/10'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <Heart className={`h-4 w-4 mr-2 ${selectedType === 'bride' ? 'text-white' : 'text-[#FF3CBB]'}`} />
                    <span>Bride</span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedType('groom')}
                  className={`flex-1 px-6 py-3 rounded-xl text-base transition-all duration-300 ${
                    selectedType === 'groom'
                      ? 'bg-[#FF6B00] text-white shadow-lg'
                      : 'bg-white text-[#1E1E1E] border border-[#FF6B00] hover:bg-[#FF6B00]/10'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <Users className={`h-4 w-4 mr-2 ${selectedType === 'groom' ? 'text-white' : 'text-[#FF6B00]'}`} />
                    <span>Groom</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Age Range - Spans 4 columns */}
            <div className="md:col-span-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <label className="block text-[#1E1E1E] mb-4">Age Range</label>
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <input
                    type="number"
                    value={age.from}
                    onChange={(e) => setAge({ ...age, from: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-300 hover:bg-gray-100"
                    placeholder="18"
                    min="18"
                    max="70"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">yrs</span>
                </div>
                <span className="text-gray-400 font-medium">to</span>
                <div className="relative flex-1">
                  <input
                    type="number"
                    value={age.to}
                    onChange={(e) => setAge({ ...age, to: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-300 hover:bg-gray-100"
                    placeholder="35"
                    min="18"
                    max="70"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">yrs</span>
                </div>
              </div>
            </div>

            {/* Religion - Spans 4 columns */}
            <div className="md:col-span-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <label className="block text-[#1E1E1E] mb-4">Religion</label>
              <select
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-300"
              >
                <option value="">Select Religion</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
                <option value="sikh">Sikh</option>
                <option value="buddhist">Buddhist</option>
                <option value="jain">Jain</option>
              </select>
            </div>

            {/* City/Location - Spans 4 columns */}
            <div className="md:col-span-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <label className="block text-[#1E1E1E] mb-4">City/Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-300"
              >
                <option value="">Select City</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
                <option value="houston">Houston</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
              </select>
            </div>

            {/* Mother Tongue - Spans 4 columns */}
            <div className="md:col-span-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <label className="block text-[#1E1E1E] mb-4">Mother Tongue</label>
              <select
                value={motherTongue}
                onChange={(e) => setMotherTongue(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-300"
              >
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="spanish">Spanish</option>
                <option value="mandarin">Mandarin</option>
                <option value="arabic">Arabic</option>
                <option value="bengali">Bengali</option>
              </select>
            </div>

            {/* Education - Spans 4 columns */}
            <div className="md:col-span-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <label className="block text-[#1E1E1E] mb-4">Education</label>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-300"
              >
                <option value="">Select Education</option>
                <option value="high-school">High School</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="doctorate">Doctorate</option>
                <option value="professional">Professional Degree</option>
              </select>
            </div>

            {/* Search Button - Spans full width */}
            <div className="md:col-span-12">
              <button
                type="submit"
                className="w-full py-4 bg-[#FF6B00] text-white rounded-xl flex items-center justify-center space-x-3 font-medium hover:bg-[#ff7a2b] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:tracking-wider transition-all">Find Matches</span>
              </button>
            </div>
          </div>
        </form>

        {showResults && (
          <MatchResults
            type={selectedType}
            age={age}
            religion={religion}
            location={location}
            motherTongue={motherTongue}
            education={education}
          />
        )}
      </div>
    </section>
  );
};

export default QuickSearch;