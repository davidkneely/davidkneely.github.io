import React from 'react';
import '../App.css';
import ProjectPosts from './ProjectPosts';
import { useSearchParams } from 'react-router-dom';

function Projects() {
  const [searchParams] = useSearchParams();
  const skillFilter = searchParams.get('skill');

  return (
    <div className="content">
      <div className="projects-section">
        <ProjectPosts skillFilter={skillFilter} />
      </div>
    </div>
  );
}

export default Projects; 