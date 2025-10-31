import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Apollo Performing Arts</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              At Apollo Performing Arts & Academy, we're dedicated to teaching students to perform confidently, 
              whether for personal enjoyment, family, friends, or public audiences.
            </p>
            <p>
              Our program typically spans 3-5 years, depending on the student's age and experience. We offer both 
              Regular Lessons and Advanced Lessons, with opportunities to join our Performing Teams when students are ready.
            </p>
            <p>
              Located in Frisco, TX, our academy provides a comprehensive learning environment with supportive 
              instructors who guide students through their musical journey.
            </p>
            <a href="#contact" className="btn btn-outline">
              <i className="fas fa-map-marker-alt"></i>
              Visit Our Academy
            </a>
          </div>
          <div className="about-image">
            <div className="about-img">
              <i className="fas fa-users"></i>
            </div>
            <div className="about-img">
              <i className="fas fa-microphone"></i>
            </div>
            <div className="about-img">
              <i className="fas fa-drum"></i>
            </div>
            <div className="about-img">
              <i className="fas fa-piano"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
