import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Project() {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        const projectData = data.projects.find(p => p.id === parseInt(id));
        setProject(projectData);
      })
      .catch(error => console.error('Error loading project:', error));
  }, [id]);

  if (!project) {
    return <div className="project-loading">Loading...</div>;
  }

  return (
    <div className="project-detail">
      <div className="project-detail-header">
        <Link to="/projects" className="back-button">← Back to Projects</Link>
        <h1>{project.title}</h1>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="project-detail-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-detail-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p>{project.fullContent.overview}</p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul>
            {project.fullContent.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="project-section">
          <h2>Technologies Used</h2>
          <ul>
            {project.fullContent.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>

        <section className="project-section">
          <h2>Challenges</h2>
          <p>{project.fullContent.challenges}</p>
        </section>

        <section className="project-section">
          <h2>Outcome</h2>
          <p>{project.fullContent.outcome}</p>
        </section>

        <div className="project-links">
          <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
            View Live Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project; 