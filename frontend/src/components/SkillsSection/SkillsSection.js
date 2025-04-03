import React, { useState, useEffect } from 'react';
import './SkillsSection.css';

const skills = [
  { name: 'JavaScript', level: 90, color: '#f0db4f' },
  { name: 'React', level: 85, color: '#61dbfb' },
  { name: 'Node.js', level: 80, color: '#68a063' },
  { name: 'MongoDB', level: 75, color: '#4db33d' },
  { name: 'CSS/Sass', level: 85, color: '#2965f1' },
  { name: 'UI/UX Design', level: 70, color: '#a259ff' },
];

const SkillsSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          My Skills
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
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{
                    width: animate ? `${skill.level}%` : '0%',
                    backgroundColor: skill.color
                  }}
                />
                <div 
                  className="skill-progress-bg" 
                  style={{ backgroundColor: `${skill.color}20` }}
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