import React from 'react';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="programs">
      <div className="container">
        <h2>Our Music Programs</h2>
        <div className="programs-grid">
          <div className="program-card">
            <i className="fas fa-star"></i>
            <h3>Regular Lessons</h3>
            <p>Perfect for students beginning their musical journey or continuing their education.</p>
            <ul>
              <li>4 half-hour lessons per month</li>
              <li>Private or group lessons available</li>
              <li>Performance opportunities</li>
              <li>All ages and skill levels</li>
            </ul>
          </div>
          
          <div className="program-card">
            <i className="fas fa-rocket"></i>
            <h3>Advanced Lessons</h3>
            <p>For dedicated students ready to take their skills to the next level.</p>
            <ul>
              <li>3 hours per week (12 hours monthly)</li>
              <li>Includes Performing Team participation</li>
              <li>Enhanced curriculum</li>
              <li>Additional performance opportunities</li>
            </ul>
          </div>
          
          <div className="program-card">
            <i className="fas fa-users"></i>
            <h3>Performing Teams</h3>
            <p>Join our Apollo Rockstar Kids for exceptional performance experiences.</p>
            <ul>
              <li>Minimum 2 hours of weekly classes</li>
              <li>Performance commitment required</li>
              <li>Team uniforms and gear</li>
              <li>Audition-based entry</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
