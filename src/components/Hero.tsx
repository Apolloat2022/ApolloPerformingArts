import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Unleash Your Musical Potential</h1>
          <p>
            Premier music education for all ages and skill levels at Apollo Performing Arts & Academy in Frisco, TX. 
            Join our community of passionate musicians and performers.
          </p>
          <div className="hero-buttons">
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
          </div>
        </div>
        <div className="hero-image">
          <div className="img-pair">
            <div className="hero-img">
              <div>
                <i className="fas fa-guitar"></i>
                <p>Professional Music Instruction</p>
              </div>
            </div>
            <div className="hero-img">
              <div>
                <i className="fas fa-music"></i>
                <p>Performance Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
