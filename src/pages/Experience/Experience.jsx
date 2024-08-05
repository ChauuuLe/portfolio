import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Experience.css';

const experiences = [
  {
    title: "Software Engineer Intern, Visa Worldwide Pte. Ltd.",
    date: "May 2023 - July 2023",
    description: [
      "Interned in Visa Direct team of Commercial and Money Movement Solutions (CMS)",
      "Developed a web application to create, manage and monitor automated tests on the projects under the Visa Direct team, utilizing Next.js for frontend and Spring Boot for the backend.",
      "Gathered user requirements from team and designed project from scratch, which included the supporting Oracle database and REST API endpoints for frontend-backend communication.",
      "Presented fully functional first iteration of the project to senior management near internship-end and handed off project to full-timers as a lasting internal project in the Visa Direct team."
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
