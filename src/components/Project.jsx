import React from 'react';
import '../assets/project.css';

const Project = ({ project, onClick }) => {
  return (
    <div 
      className="project-card" 
      onClick={() => onClick(project)}
    >
      <div className="project-title">{project.title}</div>
      <div className="img-container">
        <img 
          src={project.image} 
          className="project-img" 
          alt={project.title || "Project image"}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Project;