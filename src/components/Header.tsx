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
          <div className="logo">
            {/* Logo Image */}
            <div className="logo-img">
              <img 
                src="/Logo.png" 
                alt="Apollo Performing Arts Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
                onError={(e) => {
                  // Fallback if image doesn't load yet
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback text if image not loaded */}
              <div className="logo-fallback">
                A
              </div>
            </div>
            <span>Apollo Performing Arts</span>
          </div>
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
