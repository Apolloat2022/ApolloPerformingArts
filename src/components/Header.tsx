import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo">
            <img 
              src="./Logo.png" 
              alt="Apollo Performing Arts Logo" 
              className="header-logo"
            />
            <span>Apollo Performing Arts</span>
          </a>
          <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
            <li><a href="#programs" onClick={() => setIsMenuOpen(false)}>Programs</a></li>
            <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
            <li><a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
            <li><a href="#talent-show" onClick={() => setIsMenuOpen(false)}>Talent Show</a></li>
            <li><a href="#enrollment" onClick={() => setIsMenuOpen(false)}>Enrollment</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="mobile-menu" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
