import React from 'react';
import HeroSection from './HeroSection';
import LandingStatsSection from './LandingstatsSection';
import LandingInfoSection from './LandingInfoSection';
import BootcampsSection from './BootcampsSection'
import InspirationSection from './Inspirationalsection'
import TestimonialSection from './TestimonialSection'


const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <BootcampsSection/>
      <TestimonialSection/>
      <InspirationSection/>
      <LandingStatsSection />
      
      <LandingInfoSection/>
    </div>
  );
};

export default LandingPage;
