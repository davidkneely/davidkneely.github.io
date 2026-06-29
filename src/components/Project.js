import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function getYouTubeVideoId(url) {
  const patterns = [
    /youtu\.be\/([^?&/]+)/,
    /youtube\.com\/watch\?v=([^?&/]+)/,
    /youtube\.com\/embed\/([^?&/]+)/,
    /youtube\.com\/shorts\/([^?&/]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

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

  const youtubeVideoId = getYouTubeVideoId(project.videoUrl);

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

        {project.videoUrl !== '' && <section className="project-section">
          <h2>Video Walkthrough</h2>
          {youtubeVideoId ? (
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="Video Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <video
              preload="none"
              src={project.videoUrl}
              controls
              width="100%"
              style={{ borderRadius: 12 }}
            />
          )}
        </section>}

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
          {project.liveUrl !== '' && <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
            View Project
          </a>}

        </div>
      </div>
    </div>
  );
}

export default Project; 