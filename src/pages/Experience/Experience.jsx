import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const experiences = [
  {
    title: "Software Engineer Intern - Rakuna Software Product",
    date: "May 2024 - Present",
    description: [
      "Developed new features for Recruiting CRM products and Rakuna Scheduling Interview as a full-stack developer using Ruby on Rails and React.",
      "Resolved bugs and improved existing features.",
      "Configured AWS server and implemented code to receive and store user-uploaded data.",
    ]
  },
];

const achievements = [
  "Rank 15 in International Collegiate Programming Contest – Jakarta Asia Regional (2023)",
  "Second Prize in International Collegiate Programming Contest – Ho Chi Minh Asia Regional",
  "Second Prize in Vietnamese Olympiad in Informatics (2023) (Rank 40/600)",
  "Rank 20 in Vietnamese Team Selection Test (TST - 2022)",
  "Second Prize in Vietnamese Olympiad in Informatics (2022) (Rank 24/400)",
  "Rank 14 Reply Code Challenge (2022)"
];

const Experience = () => {
  return (
    <div
      id="experience"
      style={{
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--color-accent)',
        textAlign: 'left',
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
        Experience
      </Typography>
      {experiences.map((exp, index) => (
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
            {exp.title}
          </Typography>
          <Typography
            variant="body2"
            style={{
              fontStyle: 'italic',
              marginBottom: '10px',
              fontSize: '1rem'
            }}
          >
            {exp.date}
          </Typography>
          <ul
            style={{
              margin: 0,
              paddingLeft: '20px',
              listStyleType: 'disc',
              fontSize: '1.1rem'
            }}
          >
            {exp.description.map((desc, i) => (
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

      <Typography
        variant="h4"
        style={{
          textAlign: 'center',
          marginBottom: '60px',
          fontWeight: 'bold',
          fontSize: '3rem',
          fontFamily: 'Poppins, sans-serif',
          marginTop: '80px'
        }}
      >
        Achievements
      </Typography>
      <Box
        style={{
          marginBottom: '30px',
          width: '100%',
          maxWidth: '800px'
        }}
      >
        <ul
          style={{
            margin: 0,
            paddingLeft: '20px',
            listStyleType: 'disc',
            fontSize: '1.1rem'
          }}
        >
          {achievements.map((ach, index) => (
            <li
              key={index}
              style={{
                marginBottom: '10px',
                textAlign: 'left'
              }}
            >
              {ach}
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default Experience;
