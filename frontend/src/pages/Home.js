import React, { useState, useEffect } from 'react';
import Header from '../components/Layout/Header';
import { fetchProjects } from '../services/api';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skills] = useState([
    'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB',
    'HTML5', 'CSS3', 'Git', 'REST API'
  ]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await fetchProjects();
        setProjects(data.data || data);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="section hero">
        <div className="content-limit">
          <h1>Hi, I'm [Your Name]</h1>
          <h3>Full Stack Developer | MERN Specialist</h3>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="content-limit">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm a passionate developer with expertise in building web applications using the MERN stack.
            With a strong foundation in JavaScript and modern web technologies, I create efficient,
            scalable, and user-friendly applications.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="content-limit">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="chip">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="content-limit">
          <h2 className="section-title">My Projects</h2>
          
          {loading ? (
            <div style={{ textAlign: 'center' }}>Loading...</div>
          ) : error ? (
            <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
          ) : (
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project._id} className="project-card">
                  {project.imageUrl && (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="project-image"
                    />
                  )}
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="content-limit">
          <h2 className="section-title">Get In Touch</h2>
          {/* Contact form would go here */}
        </div>
      </section>
    </div>
  );
};

export default Home;