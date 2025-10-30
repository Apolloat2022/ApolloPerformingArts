import React from 'react';

const Enrollment: React.FC = () => {
  return (
    <section id="enrollment" className="enrollment">
      <div className="container">
        <h2>Begin Your Musical Journey</h2>
        <div className="about-content">
          <div>
            <h3>Enrollment Process</h3>
            <p>Getting started at Apollo Performing Arts is simple:</p>
            <ol style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li><strong>Trial Lesson:</strong> Schedule a 15-30 minute introductory session ($75)</li>
              <li><strong>Assessment:</strong> We'll evaluate the student's level and goals</li>
              <li><strong>Program Selection:</strong> Choose the right program for your needs</li>
              <li><strong>Registration:</strong> Complete enrollment with $75 registration fee</li>
              <li><strong>Payment:</strong> Submit first and last month's tuition 48 hours before first lesson</li>
            </ol>
            <p>For questions about enrollment, contact us at <strong>Robinpandey@apollotunes.com</strong> or call <strong>469-616-1950</strong> (no calls after 9 PM, please).</p>
            
            <div className="button-group">
              <a href="https://form.jotform.com/230734922066152" className="btn btn-enrollment" target="_blank" rel="noopener noreferrer">Enrollment Form</a>
              <a href="https://calendly.com/robinpandey-apollotunes/30min" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Book a Free Trial Lesson</a>
              <a href="https://app.vectorshift.ai/chatbots/deployed/68d1d8ace9de515550b744a0" className="btn btn-chat" target="_blank" rel="noopener noreferrer">Let's Chat</a>
            </div>
          </div>
          <div className="about-image">
            <div className="about-img" style={{ background: 'linear-gradient(45deg, var(--primary), var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem' }}>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <i className="fas fa-file-signature" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                <p>Join Our Music Family</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enrollment;