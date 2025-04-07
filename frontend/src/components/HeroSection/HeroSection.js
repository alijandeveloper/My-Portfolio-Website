import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import profileImage from '../assets/profile.png';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const skills = [
      "Website Developer",
      "UI/UX Designer",
      "MERN Specialist",
      "Photo/Video Editor",
      "Front End Designer"
    ];
    
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = 1500;
    const currentSkill = skills[currentSkillIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(currentSkill.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentSkill.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentSkill) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentSkillIndex((prevIndex) => 
          (prevIndex + 1) % skills.length
        );
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentSkillIndex, isDeleting]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1 className="name-title">
            <span className="greeting">Hello, I'm</span>
            <span className="highlight">ALI JAN</span>
          </h1>
          <h2 className="static-text">Professional</h2>
          <h2 className="animated-text">
            {displayText}
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Creating beautiful, functional digital experiences with a focus on 
            user-centered design and clean, efficient code.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">↓</span>
            </button>
            <button className="secondary-btn">
              <span className="btn-text">Contact Me</span>
              <span className="btn-icon">→</span>
            </button>
          </div>
          <div className="social-links1">
            <a href="#" className="social-link1">LinkedIn</a>
            <span className="divider">•</span>
            <a href="#" className="social-link1">GitHub</a>
            <span className="divider">•</span>
            <a href="#" className="social-link1">Dribbble</a>
          </div>
        </div>
        <div className="image-content">
          <div className="profile-image-container">
            <img 
              src={profileImage} 
              alt="Ali Jan" 
              className="profile-image"
            />
            <div className="image-border"></div>
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;