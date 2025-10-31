import React from 'react';

const Enrollment: React.FC = () => {
  return (
    <section id="enrollment" className="enrollment">
      <div className="container">
        <h2>Begin Your Musical Journey</h2>
        <div className="enrollment-content">
          <div className="enrollment-text">
            <h3>Enrollment Process</h3>
            <p>Getting started at Apollo Performing Arts is simple:</p>
            <ol>
              <li><strong>Trial Lesson:</strong> Schedule a 15-30 minute introductory session ($75)</li>
              <li><strong>Assessment:</strong> We'll evaluate the student's level and goals</li>
              <li><strong>Program Selection:</strong> Choose the right program for your needs</li>
              <li><strong>Registration:</strong> Complete enrollment with $75 registration fee</li>
              <li><strong>Payment:</strong> Submit first and last month's tuition 48 hours before first lesson</li>
            </ol>
            <p>
              For questions about enrollment, contact us at <strong>Robinpandey@apollotunes.com</strong> or call 
              <strong> 469-616-1950</strong> (no calls after 9 PM, please).
            </p>
            
            <div className="button-group">
              <a href="https://pci.jotform.com/form/223423546401144" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file-alt"></i>
                Enrollment Form
              </a>
              <a href="https://calendly.com/robinpandey-apollotunes/30min" className="btn btn-chat" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-calendar-check"></i>
                Book a Free Trial Lesson
              </a>
              <a href="https://app.vectorshift.ai/chatbots/deployed/68d1d8ace9de515550b744a0" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-comments"></i>
                Let's Chat
              </a>
            </div>
          </div>
          <div className="enrollment-image">
            <div className="about-img" style={{ height: '300px' }}>
              <i className="fas fa-graduation-cap" style={{ fontSize: '4rem' }}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enrollment;
