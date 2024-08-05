import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const projects = [
  {
    title: "Travelling Website",
    date: "May 2024 - Aug 2024",
    description: [
      "Developed a full-featured travel application using React and Express.",
      "Implemented chat system using Socket.io.",
      "Implemented features such as destination search, booking, voting calendar, posting destination suggestion, etc.",
      "Integrated third-party APIs for flight and hotel booking."
    ]
  },
  {
    title: "Personal Portfolio Website",
    date: "Aug 2024 - Aug 2024",
    description: [
      "Created a personal portfolio website using React",
    ]
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-accent)',
        padding: '80px 20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      <Typography
        variant="h4"
        style={{
          textAlign: 'center',
          marginBottom: '60px',
          fontWeight: 'bold',
          fontSize: '3rem',
          fontFamily: 'Poppins, sans-serif'
        }}
      >
        Projects
      </Typography>
      {projects.map((project, index) => (
        <Box
          key={index}
          style={{
            marginBottom: '30px',
            width: '100%',
            maxWidth: '800px'
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontWeight: 'bold',
              fontSize: '1.25rem',
              marginBottom: '10px'
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            style={{
              fontStyle: 'italic',
              marginBottom: '10px',
              fontSize: '1rem'
            }}
          >
            {project.date}
          </Typography>
          <ul
            style={{
              margin: 0,
              paddingLeft: '20px',
              listStyleType: 'disc',
              fontSize: '1.1rem'
            }}
          >
            {project.description.map((desc, i) => (
              <li
                key={i}
                style={{
                  marginBottom: '10px',
                  textAlign: 'left'
                }}
              >
                {desc}
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </div>
  );
};

export default Projects;
