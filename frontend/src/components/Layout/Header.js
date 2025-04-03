import React, { useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css'; // We'll create this CSS file

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <>
      <header className="header">
        {/* Website name on the left */}
        <div className="header-brand">My Portfolio</div>
        
        {/* Desktop navigation - will hide on mobile */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.id}
              className="nav-link"
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {item.text}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button on the right */}
        <button 
          className="mobile-menu-button" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {/* Mobile menu drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.id}
              className="mobile-nav-link"
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMobileOpen(false)}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;