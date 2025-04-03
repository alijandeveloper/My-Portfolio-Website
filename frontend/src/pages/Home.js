import React from 'react';
import Header from '../components/Layout/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <HeroSection />
      {/* Other sections will go here */}
    </div>
  );
};

export default Home;