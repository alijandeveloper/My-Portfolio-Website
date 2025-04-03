import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../services/api';

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProjects();
  }, []);

  return (
    <div>
      <h1>My Portfolio</h1>
      <section>
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;