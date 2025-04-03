import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import profileImage from '../assets/profile.png'; // Replace with your image

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const skills = [
    "Full Stack Developer",
    "MERN Specialist",
    "UI/UX Designer",
    "Problem Solver"
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentSkill = skills[currentSkillIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(currentSkill.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentSkill.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentSkill) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentSkillIndex((prevIndex) => 
          (prevIndex + 1) % skills.length
        );
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentSkillIndex, isDeleting, skills]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1 className="name-title">Hi, I'm <span className="highlight">[Your Name]</span></h1>
          <h2 className="static-text">I AM</h2>
          <h2 className="animated-text">
            {displayText}
            <span className="cursor">|</span>
          </h2>
          <div className="hero-buttons">
            <button className="primary-btn">Download CV</button>
            <button className="secondary-btn">Contact Me</button>
          </div>
        </div>
        <div className="image-content">
          <div className="profile-image-container">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="profile-image"
            />
            <div className="image-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;