import React from 'react';

const TalentShow: React.FC = () => {
  return (
    <section id="talent-show" className="talent-show">
      <div className="container">
        <h2>Apollo Talent Shows</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
          We believe performance is an essential part of musical education. All Apollo students are encouraged to 
          participate in our biannual talent shows and award ceremonies.
        </p>
        
        <div className="talent-highlights">
          <div className="highlight-card">
            <i className="fas fa-calendar-alt"></i>
            <h4>Twice Yearly</h4>
            <p>We host talent shows twice each year with award ceremonies to celebrate student achievements.</p>
          </div>
          
          <div className="highlight-card">
            <i className="fas fa-user-friends"></i>
            <h4>All Students Welcome</h4>
            <p>Both regular and advanced students are encouraged to participate and showcase their progress.</p>
          </div>
          
          <div className="highlight-card">
            <i className="fas fa-tshirt"></i>
            <h4>Apollo Attire</h4>
            <p>Students perform in official Apollo T-shirts and necessary accessories for a unified look.</p>
          </div>
        </div>
        
        <p style={{ textAlign: 'center', color: 'var(--gray)', marginTop: '2rem' }}>
          Event Fee: $75 per talent show (non-refundable)
        </p>
      </div>
    </section>
  );
};

export default TalentShow;
