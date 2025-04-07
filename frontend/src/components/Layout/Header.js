import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Get all sections
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let currentSection = 'home';
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if at least 50% of the section is visible
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-brand">
          <span className="logo-part">ALI</span>
          <span className="logo-accent">X</span>
          <span className="logo-part">JAN</span>
        </div>
        
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => setActiveSection(item.id)}
            >
              <span className="nav-text">{item.text}</span>
              <span className="nav-hover"></span>
            </Link>
          ))}
        </nav>

        <button 
          className={`mobile-menu-button ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </header>

      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="drawer-content">
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <Link
                key={item.id}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMobileOpen(false)}
                onSetActive={() => setActiveSection(item.id)}
              >
                <span className="mobile-link-text">{item.text}</span>
                <span className="mobile-link-hover"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;