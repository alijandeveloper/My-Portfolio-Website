import React, { useState, useEffect } from 'react';
import './SkillsSection.css';

const skills = [
  { 
    name: 'MERN Stack Development', 
    level: 90, 
    color: '#F7374F',
    description: 'MongoDB, Express, React, Node.js - Full stack web applications',
    icon: '💻'
  },
  { 
    name: 'UI/UX Design', 
    level: 85, 
    color: '#F7374F',
    description: 'Figma, Adobe XD, User flows, Wireframing, Prototyping',
    icon: '🎨'
  },
  { 
    name: 'Frontend Development', 
    level: 88, 
    color: '#F7374F',
    description: 'React, Next.js, Responsive Design, Performance Optimization',
    icon: '🖥️'
  },
  { 
    name: 'Photo/Video Editing', 
    level: 80, 
    color: '#F7374F',
    description: 'Adobe Photoshop, Premiere Pro, DaVinci Resolve, Motion Graphics',
    icon: '📷'
  },
  { 
    name: 'AI Content Creation', 
    level: 75, 
    color: '#F7374F',
    description: 'AI-generated visuals, Logos, Videos using Midjourney/DALL-E',
    icon: '🤖'
  },
  { 
    name: 'Technical Content Creation', 
    level: 82, 
    color: '#F7374F',
    description: 'Technical tutorials, Product demos, Educational content',
    icon: '✍️'
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
          <span className="title-text">Core Competencies</span>
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
                  <span className="icon" style={{ color: skill.color }}>{skill.icon}</span>
                </div>
                <div className="skill-title">
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>
              
              <p className="skill-description">{skill.description}</p>
              
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{
                    width: animate ? `${skill.level}%` : '0%',
                    backgroundColor: skill.color,
                    boxShadow: `0 0 8px ${skill.color}`
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