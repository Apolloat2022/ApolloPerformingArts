import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Apollo Performing Arts</h2>
        <div className="about-content">
          <div>
            <h3>Our Mission</h3>
            <p>At Apollo Performing Arts & Academy, we're dedicated to teaching students to perform confidently, whether for personal enjoyment, family, friends, or public audiences.</p>
            <p>Our program typically spans 3-5 years, depending on the student's age and experience. We offer both Regular Lessons and Advanced Lessons, with opportunities to join our Performing Teams when students are ready.</p>
            <p>Located in Frisco, TX, our academy provides a comprehensive learning environment with supportive instructors who guide students through their musical journey.</p>
            <a href="#contact" className="btn btn-outline">Visit Our Academy</a>
          </div>
          <div className="about-image">
            <div className="about-img" style={{ background: 'linear-gradient(45deg, var(--secondary), var(--primary))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem' }}>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <i className="fas fa-users" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                <p>Our Students in Action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
