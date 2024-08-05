import React from 'react';
import Typography from '@mui/material/Typography';

const veryHighSkills = [
  { name: 'Java', icon: './icons/java.svg' },
  { name: 'C', icon: './icons/c.svg' },
  { name: 'C++', icon: './icons/cplusplus.svg' },
  { name: 'Ruby on Rails', icon: './icons/rubyonrails.svg' },
];

const highSkills = [
  { name: 'Python', icon: './icons/python.svg' },
  { name: 'React', icon: './icons/react.svg' },
  { name: 'Git', icon: './icons/git.svg' },
  { name: 'JavaScript', icon: './icons/javascript.svg' },
  { name: 'Linux', icon: './icons/linux.svg' },
  { name: 'VS Code', icon: './icons/vscode.svg' },
  { name: 'MongoDB', icon: './icons/mongodb.svg' },
];

const fairSkills = [
  { name: 'CSS', icon: './icons/css.svg' },
  { name: 'PostgreSQL', icon: './icons/postgresql.svg' },
  { name: 'MySQL', icon: './icons/mysql.svg' },
  { name: 'Node.js', icon: './icons/nodejs.svg' },
];

const algorithmSkills = [
  {
    name: 'Codeforces',
    icon: './icons/codeforces.svg',
    description: 'Codeforces IM rating',
    accounts: [
      { name: 'gigachau', link: 'https://codeforces.com/profile/gigachau' },
      { name: 'INeedCarb', link: 'https://codeforces.com/profile/INeedCarb' },
    ],
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-accent)',
        padding: '80px 20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        style={{
          textAlign: 'center',
          marginBottom: '60px',
          fontWeight: 'bold',
          fontSize: '3rem',
          width: '100%',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        Skills
      </Typography>

      <div style={{ marginBottom: '40px', width: '100%' }}>
        <Typography
          variant="h5"
          style={{
            fontSize: '1.5rem',
            marginBottom: '40px',
            textAlign: 'left',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Very High Proficiency
        </Typography>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            gap: '20px',
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          {veryHighSkills.map((skill) => (
            <div
              key={skill.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 'calc(16.66% - 20px)',
              }}
            >
              <div style={{ width: '50px', height: '50px', marginBottom: '10px' }}>
                <img src={skill.icon} alt={skill.name} style={{ width: '100%', height: '100%' }} />
              </div>
              <Typography variant="body2" style={{ fontSize: '1rem', textAlign: 'center' }}>
                {skill.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px', width: '100%' }}>
        <Typography
          variant="h5"
          style={{
            fontSize: '1.5rem',
            marginBottom: '40px',
            textAlign: 'left',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          High Proficiency
        </Typography>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            gap: '20px',
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          {highSkills.map((skill) => (
            <div
              key={skill.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 'calc(16.66% - 20px)',
              }}
            >
              <div style={{ width: '50px', height: '50px', marginBottom: '10px' }}>
                <img src={skill.icon} alt={skill.name} style={{ width: '100%', height: '100%' }} />
              </div>
              <Typography variant="body2" style={{ fontSize: '1rem', textAlign: 'center' }}>
                {skill.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px', width: '100%' }}>
        <Typography
          variant="h5"
          style={{
            fontSize: '1.5rem',
            marginBottom: '40px',
            textAlign: 'left',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Fair Proficiency
        </Typography>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            gap: '20px',
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          {fairSkills.map((skill) => (
            <div
              key={skill.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 'calc(16.66% - 20px)',
              }}
            >
              <div style={{ width: '50px', height: '50px', marginBottom: '10px' }}>
                <img src={skill.icon} alt={skill.name} style={{ width: '100%', height: '100%' }} />
              </div>
              <Typography variant="body2" style={{ fontSize: '1rem', textAlign: 'center' }}>
                {skill.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Typography
          variant="h5"
          style={{
            fontSize: '1.5rem',
            marginBottom: '40px',
            textAlign: 'left',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Algorithms and Data Structures
        </Typography>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            gap: '20px',
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          {algorithmSkills.map((skill) => (
            <div
              key={skill.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 'calc(16.66% - 20px)',
              }}
            >
              <div style={{ width: '50px', height: '50px', marginBottom: '10px' }}>
                <img src={skill.icon} alt={skill.name} style={{ width: '100%', height: '100%' }} />
              </div>
              <Typography variant="body2" style={{ fontSize: '1rem', textAlign: 'left' }}>
                {skill.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
