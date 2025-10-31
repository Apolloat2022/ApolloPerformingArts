import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Apollo Performing Arts & Academy</h3>
            <p>
              Professional music education in Frisco, TX. Teaching students to perform confidently since 2017.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/ApolloPerformingArtsandAcademy/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/apollo.performingarts/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@HumanExpressiontv" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#video">Video</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#talent-show">Talent Shows</a></li>
              <li><a href="#enrollment">Enrollment</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://calendly.com/robinpandey-apollotunes/30min" target="_blank" rel="noopener noreferrer">Book Trial Lesson</a></li>
              <li><a href="https://app.vectorshift.ai/chatbots/deployed/68d1d8ace9de515550b744a0" target="_blank" rel="noopener noreferrer">Chat with Us</a></li>
              <li><a href="https://pci.jotform.com/form/223423546401144" target="_blank" rel="noopener noreferrer">Enrollment Form</a></li>
              <li><a href="https://www.facebook.com/ApolloPerformingArtsandAcademy/photos" target="_blank" rel="noopener noreferrer">Photo Gallery</a></li>
              <li><a href="https://www.youtube.com/@HumanExpressiontv" target="_blank" rel="noopener noreferrer">Performance Videos</a></li>
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
