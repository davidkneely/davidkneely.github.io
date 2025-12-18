import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProjectPosts = ({ skillFilter }) => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);

        // Apply skill filter if present
        if (skillFilter) {
          const filtered = data.projects.filter(project =>
            project.tags.some(tag =>
              tag.toLowerCase().includes(skillFilter.toLowerCase())
            )
          );
          setFilteredProjects(filtered);
          setActiveFilter(skillFilter);
        } else {
          setFilteredProjects(data.projects);
          setActiveFilter(null);
        }
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, [skillFilter]);

  const handleChange = (e) => {
    e.preventDefault();
    const term = e.target.value;
    setSearchTerm(term);

    // Filter by both search term and active skill filter
    filterProjects(term, activeFilter);
  };

  const filterProjects = (term, skill) => {
    let filtered = projects;

    // Apply search term filter
    if (term) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(term.toLowerCase())
      );
    }

    // Apply skill filter
    if (skill) {
      filtered = filtered.filter(project =>
        project.tags.some(tag =>
          tag.toLowerCase().includes(skill.toLowerCase())
        )
      );
    }

    setFilteredProjects(filtered);
  };

  const clearFilter = () => {
    setActiveFilter(null);
    filterProjects(searchTerm, null);
    navigate('/projects');
  };

  return (
    <div className="projects-content">
      <h1 className="section-title">Projects</h1>

      {activeFilter && (
        <div className="active-filter">
          <span>Filtered by: <strong>{activeFilter}</strong></span>
          <button onClick={clearFilter} className="clear-filter-btn">Clear Filter</button>
        </div>
      )}

      {/* <div className="search-container">
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Type to search projects"
          name="search"
          onChange={handleChange}
          value={searchTerm}
        />
      </div> */}

      {filteredProjects.length === 0 ? (
        <div className="no-projects">
          <p>No projects found matching your criteria.</p>
          {activeFilter && (
            <button onClick={clearFilter} className="clear-filter-btn">Clear Filter</button>
          )}
        </div>
      ) : (
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
                  <span
                    key={index}
                    className="project-tag"
                  >
                    {tag}
                  </span>
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
      )}
    </div>
  );
};

export default ProjectPosts; 