import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { Link as RouterLink } from 'react-router-dom';
import Skills from '../Skills/Skills'; // Import the Skills component
import Experience from '../Experience/Experience'; // Import the Experience component
import Projects from '../Projects/Projects'; // Import the Projects component
import './HomePage.css';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const navbar = document.querySelector('.navbar');

      let currentSection = 'welcome';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 50) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);

      if (currentSection === 'welcome') {
        navbar.classList.remove('scrolled');
        navbar.classList.add('default');
      } else {
        navbar.classList.remove('default');
        navbar.classList.add('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <AppBar position="fixed" className="navbar default">
        <Toolbar className="toolbar">
          <RouterLink to="/">
            <img src="./wolf2.png" alt="Logo" className="logo" />
          </RouterLink>
          <Box className="navbar-links">
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About Me</a>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          </Box>
        </Toolbar>
      </AppBar>

      <div id="welcome" className="homepage section">
        <div className="welcome-text">Hi!</div>
        <div className="welcome-text">I am Chau Le</div>
        <div className="sub-text">Welcome to my Portfolio Website</div>
      </div>
      <div id="about" className="about section">
        <Typography variant="h4" className="section-title">About Me</Typography>
        <Avatar src="./avatar.jpg" alt="Chau Le" className="avatar" />
        <Typography variant="body1" className="about-description">
          Hello! I'm Chau Le, a second-year Computer Science (Hons) student at the National University of Singapore (NUS).
          Welcome to my website, where I share my technical skills, industry experience, and the exciting projects I've worked on.
          Thank you for visiting, and feel free to connect with me!
        </Typography>
        <Typography variant="h4" className="section-title" style={{ marginTop: '30px' }}>Contact</Typography>
        <Box className="contact-links">
          <RouterLink to="https://www.linkedin.com/in/your-linkedin-profile" target="_blank">
            <Box className="contact-icon">
              <img src="./linkedin.svg" alt="LinkedIn" />
            </Box>
          </RouterLink>
          <RouterLink to="https://github.com/your-github-profile" target="_blank">
            <Box className="contact-icon">
              <img src="./github.svg" alt="GitHub" />
            </Box>
          </RouterLink>
          <RouterLink to="https://t.me/your-telegram-profile" target="_blank">
            <Box className="contact-icon">
              <img src="./telegram.svg" alt="Telegram" />
            </Box>
          </RouterLink>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<DownloadIcon />}
          href="./resume.pdf"
          download
          className="resume-button"
        >
          Resume
        </Button>
      </div>

      <Skills /> {/* Include the Skills component */}
      <Experience /> {/* Include the Experience component */}
      <Projects /> {/* Include the Projects component */}
    </div>
  );
};

export default HomePage;
