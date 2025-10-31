import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Visit Our Academy</h3>
            
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>7511 Main Street, Suite 200<br />Frisco, TX 75034</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>833-813-0668 (Main)<br />469-616-1950 (Direct - No calls after 9 PM)</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>Robinpandey@apollotunes.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Office Hours</h4>
                <p>Monday-Friday: 9AM-8PM<br />Saturday: 9AM-5PM<br />Sunday: By appointment only</p>
              </div>
            </div>
            
            <div className="button-group">
              <a href="https://calendly.com/robinpandey-apollotunes/30min" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-calendar-check"></i>
                Book a Free Trial Lesson
              </a>
              <a href="https://app.vectorshift.ai/chatbots/deployed/68d1d8ace9de515550b744a0" className="btn btn-chat" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-comments"></i>
                Let's Chat
              </a>
              <a href="https://pci.jotform.com/form/223423546401144" className="btn btn-register" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-user-plus"></i>
                Register for Intro Class
              </a>
              <a href="https://pci.jotform.com/form/223423546401144" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file-alt"></i>
                Enrollment Form
              </a>
            </div>
          </div>
          
          <div className="contact-social">
            <h3>Follow Us</h3>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
