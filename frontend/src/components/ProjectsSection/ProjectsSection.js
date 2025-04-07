import React, { useState, useEffect } from 'react';
import './ProjectsSection.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration, product management, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "Professional portfolio showcasing my work with smooth animations and responsive design.",
    technologies: ["React", "CSS3", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "Productivity application with drag-and-drop interface, real-time updates, and team collaboration.",
    technologies: ["React", "Firebase", "Material UI"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#"
  }
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Featured Projects</span>
          <span className="title-underline"></span>
        </h2>

        <div className="projects-grid">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={index}
              className={`project-card ${animate ? 'animate' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <a 
                      href={project.github} 
                      className="project-link overlay-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="link-icon" />
                    </a>
                    <a 
                      href={project.live} 
                      className="project-link overlay-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="link-icon" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <button className="load-more-btn" onClick={loadMore}>
            Show More Projects
            <span className="btn-arrow">→</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;