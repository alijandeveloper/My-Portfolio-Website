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
            <h3 className="footer-logo">Ali JAN</h3>
            <p className="footer-tagline">Building digital experiences that matter</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="mailto:your.email@example.com">
                    <FaEnvelope className="footer-icon" /> Email
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="footer-icon" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="footer-icon" /> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="footer-icon" /> Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Ali Jan. All rights reserved.</p>
          <p className="footer-credits">
            Built with React and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;