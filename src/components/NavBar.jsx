import React, { useState } from 'react';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
// If you have a dark mode toggle, import it here
// import DarkModeToggle from './DarkModeToggle';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to close menu on link click (mobile)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">Edutain</a>
      <div className="nav-center">
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#services" onClick={handleLinkClick}>Services</a>
          <a href="#courses" onClick={handleLinkClick}>Courses</a>
          <a href="#blog" onClick={handleLinkClick}>Blog</a>
          <a href="#portfolio" onClick={handleLinkClick}>Portfolio</a>
          <a href="#testimonials" onClick={handleLinkClick}>Testimonials</a>
          <a href="#faq" onClick={handleLinkClick}>FAQ</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
      </div>
      <div className="nav-actions">
        {/* Uncomment if you have a dark mode toggle */}
        {/* <DarkModeToggle /> */}
        <a href="#enroll" className="nav-cta">Enroll Now</a>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
