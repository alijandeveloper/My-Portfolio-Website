import React from 'react';
import Header from '../components/Layout/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ContactSection from '../components/ContactSection/ContactSection';
import './Home.css';
import Footer from '../components/Layout/Footer';

// At the bottom of your page layout

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
<Footer />

      {/* Other sections will go here */}
    </div>
  );
};

export default Home;