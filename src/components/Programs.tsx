import React from 'react';

const programs = [
  {
    id: 1,
    title: "Regular Lessons",
    icon: "piano",
    description: "Perfect for students beginning their musical journey or continuing their education.",
    features: [
      "4 half-hour lessons per month",
      "Private or group lessons available",
      "Performance opportunities",
      "All ages and skill levels"
    ]
  },
  {
    id: 2,
    title: "Advanced Lessons",
    icon: "star",
    description: "For dedicated students ready to take their skills to the next level.",
    features: [
      "3 hours per week (12 hours monthly)",
      "Includes Performing Team participation",
      "Enhanced curriculum",
      "Additional performance opportunities"
    ]
  },
  {
    id: 3,
    title: "Performing Teams",
    icon: "users",
    description: "Join our Apollo Rockstar Kids for exceptional performance experiences.",
    features: [
      "Minimum 2 hours of weekly classes",
      "Performance commitment required",
      "Team uniforms and gear",
      "Audition-based entry"
    ]
  }
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="programs">
      <div className="container">
        <h2>Our Music Programs</h2>
        <div className="programs-grid">
          {programs.map(prog => (
            <div key={prog.id} className="program-card">
              <i className={`fas fa-${prog.icon}`}></i>
              <h3>{prog.title}</h3>
              <p>{prog.description}</p>
              <ul>
                {prog.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;