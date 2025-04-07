import React from 'react';
import './AboutSection.css';
import aboutImage from '../assets/profile.png';
import { FaAward, FaUsers, FaFolder } from 'react-icons/fa';

const AboutSection = () => {
  const stats = [
    { icon: <FaAward className="about-icon" />, number: '5+', text: 'Years Experience' },
    { icon: <FaUsers className="about-icon" />, number: '50+', text: 'Clients' },
    { icon: <FaFolder className="about-icon" />, number: '80+', text: 'Projects' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="About Me" />
            <div className="image-border"></div>
            <div className="image-glow"></div>
          </div>
          <div className="about-text">
            <div className="about-cards">
              {stats.map((stat, index) => (
                <div key={index} className="about-card">
                  {stat.icon}
                  <h3>{stat.number}</h3>
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>
            <p className="about-description">
              I'm a passionate Full Stack Developer with expertise in building web applications using the MERN stack. 
              With a strong foundation in JavaScript and modern web technologies, I create efficient, scalable, 
              and user-friendly applications that deliver exceptional user experiences.
            </p>
            <p className="about-description">
              My approach combines technical excellence with creative problem-solving. I specialize in translating 
              business requirements into technical solutions while maintaining clean, maintainable code.
            </p>
            <button className="cta-button">Let's Talk</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;