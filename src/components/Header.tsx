import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <div className="logo-img" style={{ background: 'var(--primary)', color: 'var(--accent)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.5rem', border: '2px solid var(--accent)' }}>
              A
            </div>
            <span>Apollo Performing Arts</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#talent-show">Talent Show</a></li>
            <li><a href="#enrollment">Enrollment</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="mobile-menu">
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;