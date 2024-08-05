import React from 'react';
import Typography from '@mui/material/Typography';
import './Projects.css';

const projects = [
  {
    title: "Project Title 1",
    description: "Project description 1."
  },
  {
    title: "Project Title 2",
    description: "Project description 2."
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id="projects" className="projects section">
      <Typography variant="h4" className="section-title">Projects</Typography>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <Typography variant="h6" className="project-title">{project.title}</Typography>
          <Typography variant="body2" className="project-description">{project.description}</Typography>
        </div>
      ))}
    </div>
  );
};

export default Projects;
