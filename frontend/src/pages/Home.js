import React from 'react';
import Header from '../components/Layout/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />

      {/* Other sections will go here */}
    </div>
  );
};

export default Home;