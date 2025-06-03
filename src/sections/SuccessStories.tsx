import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, Quote, MapPin, Calendar } from 'lucide-react';

interface Story {
  id: number;
  coupleNames: string;
  location: string;
  image: string;
  quote: string;
  marriageDate: string;
  featured?: boolean;
}

const SuccessStories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stories: Story[] = [
    {
      id: 1,
      coupleNames: 'Rahul & Priya',
      location: 'Mumbai, India',
      image: 'https://images.pexels.com/photos/1494064/pexels-photo-1494064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'We connected on LoveDestiny and after just 3 months of talking, we knew we were meant to be. Our families met and the rest is history!',
      marriageDate: 'June 15, 2023',
      featured: true,
    },
    {
      id: 2,
      coupleNames: 'David & Sarah',
      location: 'Toronto, Canada',
      image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'Despite living in different cities, LoveDestiny\'s matching algorithm brought us together. We\'re now happily married for over a year!',
      marriageDate: 'August 22, 2022',
      featured: true,
    },
    {
      id: 3,
      coupleNames: 'Amir & Layla',
      location: 'London, UK',
      image: 'https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'Our cultural backgrounds are different, but our values aligned perfectly. Thanks to LoveDestiny for helping us find each other!',
      marriageDate: 'October 5, 2023',
    },
  ];

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-br from-peach/80 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-neon-pink font-semibold mb-2">Love Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] to-[#FF3CBB] mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real couples who found true love through LoveDestiny. Your story could be next!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Featured Story - Large */}
          <div className="md:col-span-8 lg:col-span-8">
            <div className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
              <img 
                src={stories[0].image} 
                alt={stories[0].coupleNames} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute top-6 left-6">
                <div className="bg-neon-pink text-white px-4 py-2 rounded-full text-sm font-medium flex items-center transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Heart size={14} className="mr-2" fill="white" />
                  <span>Featured Story</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Quote className="text-neon-pink/20 h-16 w-16 mb-4 transform group-hover:rotate-12 transition-transform duration-500" />
                <p className="text-xl text-white mb-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  "{stories[0].quote}"
                </p>
                <div className="space-y-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <h3 className="text-3xl font-bold text-white">{stories[0].coupleNames}</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-neon-pink">
                      <Calendar size={16} className="mr-2" />
                      <span>Married on {stories[0].marriageDate}</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <MapPin size={16} className="mr-2" />
                      <span>{stories[0].location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Stories - Grid */}
          <div className="md:col-span-4 lg:col-span-4 grid grid-rows-2 gap-6">
            {stories.slice(1, 3).map((story, index) => (
              <div key={story.id} className="group relative h-[240px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
                <img 
                  src={story.image} 
                  alt={story.coupleNames} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {story.coupleNames}
                  </h3>
                  <div className="flex items-center space-x-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="flex items-center text-neon-pink text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{story.marriageDate}</span>
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <MapPin size={14} className="mr-1" />
                      <span>{story.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <a 
            href="#" 
            className="group inline-flex items-center px-8 py-4 bg-neon-orange text-white rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="font-medium group-hover:mr-2 transition-all">Read More Love Stories</span>
            <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;