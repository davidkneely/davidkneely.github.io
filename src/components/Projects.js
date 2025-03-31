import React from 'react';
import '../App.css';

function Projects() {
  return (
    <div className="content">
      <div className="projects-section">
        <h1 className="section-title">My Projects</h1>
        <div className="projects-grid">
          {/* Example project card */}
          <div className="project-card">
            <h3>Project Name</h3>
            <p>Project description goes here. This is a brief overview of what this project does and what technologies were used.</p>
            <div className="project-links">
              <a href="#" className="project-link">View Project</a>
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default Projects; 