import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">ALI JAN</h3>
            <p className="footer-tagline">
              Full Stack Developer | MERN Specialist | Digital Creator
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/ali-jan26/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com/alijandeveloper" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter className="social-icon" />
              </a>
              <a href="mailto:alijandeveloper15@gmail.com" className="social-link">
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">GitHub Repos</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:your.email@example.com">alijandeveloper15@gmail.com
                </a></li>
                <li><a href="tel:+1234567890">+92 3143 444 215</a></li>
                <li>Based in Sargodha, Pakistan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} <span className="highlight">Ali Jan</span>. All rights reserved.</p>
          <p className="footer-credits">
            Built with <span className="highlight">React</span> and <span className="heart">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;