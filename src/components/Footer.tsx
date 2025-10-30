import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Apollo Performing Arts & Academy</h3>
            <p>Professional music education in Frisco, TX. Teaching students to perform confidently since 2017.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#talent-show">Talent Shows</a></li>
              <li><a href="#enrollment">Enrollment</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Student Portal</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Apollo Performing Arts & Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;