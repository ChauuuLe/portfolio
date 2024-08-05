import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Experience.css';

const experiences = [
  {
    title: "Software Engineer Intern",
    date: "May 2024 - July 2024",
    description: [
      
    ]
  },
];

const Experience = () => {
  return (
    <div id="experience" className="experience section">
      <Typography variant="h4" className="section-title">Experience</Typography>
      {experiences.map((exp, index) => (
        <Box key={index} className="experience-item">
          <Typography variant="h6" className="experience-title">{exp.title}</Typography>
          <Typography variant="body2" className="experience-date">{exp.date}</Typography>
          <ul className="experience-description">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </Box>
      ))}
    </div>
  );
};

export default Experience;
