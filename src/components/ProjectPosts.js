import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProjectPosts = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects)
        setFilteredProjects(data.projects)
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    const filteredItems = projects.filter((project) => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProjects(filteredItems);
  };

  return (
    <div className="projects-content">
      <h1 className="section-title">Projects</h1>
      <div className="search-container">
      <h1>Search</h1>
        <input type="text" placeholder="Type to search projects" name="search" onChange={handleChange}/>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/project/${project.id}`)}
          >
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
              <Link
                to={`/project/${project.id}`}
                className="read-more"
                onClick={e => e.stopPropagation()}
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectPosts; 