import React, { useState, useEffect } from 'react';
import './SkillsSection.css';

const skills = [
  { 
    name: 'JavaScript', 
    level: 90, 
    color: '#f0db4f',
    description: 'ES6+, Async/Await, Functional Programming' 
  },
  { 
    name: 'React', 
    level: 85, 
    color: '#61dbfb',
    description: 'Hooks, Context API, Performance Optimization' 
  },
  { 
    name: 'Node.js', 
    level: 80, 
    color: '#68a063',
    description: 'Express, REST APIs, Authentication' 
  },
  { 
    name: 'MongoDB', 
    level: 75, 
    color: '#4db33d',
    description: 'Schema Design, Aggregation, Indexing' 
  },
  { 
    name: 'CSS/Sass', 
    level: 85, 
    color: '#2965f1',
    description: 'Flexbox, Grid, Animations, BEM Methodology' 
  },
  { 
    name: 'UI/UX Design', 
    level: 70, 
    color: '#a259ff',
    description: 'Wireframing, Prototyping, User Flows' 
  },
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
          Technical Proficiency
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
                  <span className="skill-level">{skill.level}% Mastery</span>
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