import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const experiences = [
  {
    title: "Incoming Research Intern - Huawei",
    date: "May 2025 - Jul 2025",
    description: [
      "Research and optimize in Large Vision-Language Generation Model",
    ]
  },
  {
    title: "Software Engineer Intern - Rakuna Software Product",
    date: "May 2024 - Aug 2024",
    description: [
      "Developed a Recruiting CRM and Rakuna Scheduling Interview system using Ruby on Rails"
        + "and React JS, streamlining recruitment scheduling and boosting operational efficiency by 30%.",
      "Implemented multi-language support with Rails I18n and I18n-JS, enabled image/file uploads for email templates"
        + " using AWS, and leveraged Redis caching to reduce server load and accelerate content delivery, achieving a 40%"
        + " reduction in average response time, significantly enhancing global user experience and content management.",
      "Built auto-reminder and process tracking features, resolved bugs, and"
        + " wrote TTD tests with RSpec, reducing process delays and improving overall system reliability.",
    ]
  }
];

const achievements = [
  "Rank 15 in International Collegiate Programming Contest – Jakarta Asia Regional (2023)",
  "Second Prize in International Collegiate Programming Contest – Ho Chi Minh Asia Regional",
  "Rank 20 in Vietnamese Team Selection Test for IOI",
  "Second Prize in Vietnamese Olympiad in Informatics (2022) (Rank 24/400)",
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
