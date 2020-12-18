import React from 'react';
import HomePageNavbar from './HomePageNavbar';
import MobileNavbar from './MobileNavbar';
import HeroSection from './HeroSection';

const HomePage = () => {
  return (
    <div className="HomePage">
      <HomePageNavbar />
      <MobileNavbar />
      <HeroSection />
    </div>
  )
};

export default HomePage;