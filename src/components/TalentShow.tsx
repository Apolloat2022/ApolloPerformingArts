import React from 'react';

const TalentShow: React.FC = () => {
  return (
    <section id="talent-show" className="talent-show">
      <div className="container">
        <h2>Apollo Talent Shows</h2>
        <div className="talent-content">
          <p>We believe performance is an essential part of musical education. All Apollo students are encouraged to participate in our biannual talent shows and award ceremonies.</p>
          <p>These events provide valuable stage experience and help build confidence in our students. Performing Team members have additional opportunities to showcase their skills throughout the year.</p>
          
          <div className="talent-highlights">
            <div className="highlight-card">
              <i className="fas fa-trophy"></i>
              <h3>Twice Yearly</h3>
              <p>We host talent shows twice each year with award ceremonies to celebrate student achievements.</p>
            </div>
            <div className="highlight-card">
              <i className="fas fa-users"></i>
              <h3>All Students Welcome</h3>
              <p>Both regular and advanced students are encouraged to participate and showcase their progress.</p>
            </div>
            <div className="highlight-card">
              <i className="fas fa-tshirt"></i>
              <h3>Apollo Attire</h3>
              <p>Students perform in official Apollo T-shirts and necessary accessories for a unified look.</p>
            </div>
          </div>
          
          <p style={{ marginTop: '2rem' }}><strong>Event Fee:</strong> $75 per talent show (non-refundable)</p>
        </div>
      </div>
    </section>
  );
};

export default TalentShow;