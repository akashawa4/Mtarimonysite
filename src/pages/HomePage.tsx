import React from 'react';
import HeroSection from '../sections/HeroSection';
import QuickSearch from '../sections/QuickSearch';
import FeaturedProfiles from '../sections/FeaturedProfiles';
import SuccessStories from '../sections/SuccessStories';
import HowItWorks from '../sections/HowItWorks';
import AboutSection from '../sections/AboutSection';
import FeaturesSection from '../sections/FeaturesSection';
import AppPromotion from '../sections/AppPromotion';
import Newsletter from '../sections/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <QuickSearch />
      <FeaturedProfiles />
      <SuccessStories />
      <HowItWorks />
      <AboutSection />
      <FeaturesSection />
      <AppPromotion />
      <Newsletter />
    </div>
  );
};

export default HomePage;