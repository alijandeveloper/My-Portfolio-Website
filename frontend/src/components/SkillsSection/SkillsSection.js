import React, { useState, useEffect } from 'react';
import './SkillsSection.css';

const skills = [
  { 
    name: 'MERN Stack Development', 
    level: 90, 
    color: '#6c5ce7',
    description: 'MongoDB, Express, React, Node.js - Full stack web applications' 
  },
  { 
    name: 'UI/UX Design', 
    level: 85, 
    color: '#a259ff',
    description: 'Figma, Adobe XD, User flows, Wireframing, Prototyping' 
  },
  { 
    name: 'Frontend Development', 
    level: 88, 
    color: '#0984e3',
    description: 'React, Next.js, Responsive Design, Performance Optimization' 
  },
  { 
    name: 'Photo/Video Editing', 
    level: 80, 
    color: '#e17055',
    description: 'Adobe Photoshop, Premiere Pro, DaVinci Resolve, Motion Graphics' 
  },
  { 
    name: 'AI Content Creation', 
    level: 75, 
    color: '#00cec9',
    description: 'AI-generated visuals, Logos, Videos using Midjourney/DALL-E' 
  },
  { 
    name: 'Technical Content Creation', 
    level: 82, 
    color: '#fd79a8',
    description: 'Technical tutorials, Product demos, Educational content' 
  }
];

const SkillsSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          Core Competencies
          <span className="title-underline"></span>
        </h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: animate ? 1 : 0,
                transform: animate ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="skill-header">
                <div className="skill-icon" style={{ backgroundColor: `${skill.color}20` }}>
                  <span style={{ color: skill.color }}>{skill.name.charAt(0)}</span>
                </div>
                <div className="skill-title">
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}% Proficiency</span>
                </div>
              </div>
              
              <p className="skill-description">{skill.description}</p>
              
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{
                    width: animate ? `${skill.level}%` : '0%',
                    backgroundColor: skill.color
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;