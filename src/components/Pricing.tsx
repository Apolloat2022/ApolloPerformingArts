import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>Tuition & Packages</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Regular Lessons</h3>
            <div className="price">$300<span>/month</span></div>
            <ul>
              <li>30 minutes per week</li>
              <li>4 lessons monthly</li>
              <li>Personalized curriculum</li>
              <li>Performance opportunities</li>
            </ul>
            <a href="#enrollment" className="btn btn-outline">Enroll Now</a>
          </div>
          <div className="pricing-card featured">
            <div className="popular-badge">Most Popular</div>
            <h3>Extended Lessons</h3>
            <div className="price">$350-450<span>/month</span></div>
            <ul>
              <li>45 min - 1 hour per week</li>
              <li>4 lessons monthly</li>
              <li>Enhanced instruction</li>
              <li>All regular benefits</li>
            </ul>
            <a href="#enrollment" className="btn btn-primary">Enroll Now</a>
          </div>
          <div className="pricing-card">
            <h3>Advanced Program</h3>
            <div className="price">$700<span>/month</span></div>
            <ul>
              <li>3 hours per week</li>
              <li>Performing Team included</li>
              <li>Comprehensive training</li>
              <li>Multiple performance events</li>
            </ul>
            <a href="#enrollment" className="btn btn-outline">Enroll Now</a>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '2rem' }}><strong>Registration Fee:</strong> $75 | <strong>Trial Lesson:</strong> $75 (15-30 minutes)</p>
      </div>
    </section>
  );
};

export default Pricing;