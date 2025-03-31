import { useEffect, useState } from "react";

const ProjectPosts = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="projects-content">
      <h1 className="section-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
              <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectPosts; 