import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Skills.css';

const veryHighSkills = [
  { name: 'Java', icon: './icons/java.svg' },
  { name: 'C', icon: './icons/c.svg' },
  { name: 'C++', icon: './icons/cplusplus.svg' },
  { name: 'Ruby on Rails', icon: './icons/rubyonrails.svg'},
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

const Skills = () => {
  return (
    <div id="skills" className="skills section">
      <Typography variant="h4" className="section-title">Skills</Typography>
      <div className="skills-category">
        <Typography variant="h5" className="skills-level">Very High</Typography>
        <div className="skills-grid">
          {veryHighSkills.map(skill => (
            <div key={skill.name} className="skill-item">
              <div className="skill-icon-container">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
              </div>
              <Typography variant="body2" className="skill-name">{skill.name}</Typography>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-category">
        <Typography variant="h5" className="skills-level">High</Typography>
        <div className="skills-grid">
          {highSkills.map(skill => (
            <div key={skill.name} className="skill-item">
              <div className="skill-icon-container">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
              </div>
              <Typography variant="body2" className="skill-name">{skill.name}</Typography>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-category">
        <Typography variant="h5" className="skills-level">Fair</Typography>
        <div className="skills-grid">
          {fairSkills.map(skill => (
            <div key={skill.name} className="skill-item">
              <div className="skill-icon-container">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
              </div>
              <Typography variant="body2" className="skill-name">{skill.name}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
