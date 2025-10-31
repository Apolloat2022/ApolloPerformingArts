import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Our Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <i className="fas fa-music"></i>
            Music Lessons
          </div>
          <div className="gallery-item">
            <i className="fas fa-guitar"></i>
            Instrument Training
          </div>
          <div className="gallery-item">
            <i className="fas fa-microphone"></i>
            Vocal Training
          </div>
          <div className="gallery-item">
            <i className="fas fa-users"></i>
            Group Performances
          </div>
          <div className="gallery-item">
            <i className="fas fa-trophy"></i>
            Talent Shows
          </div>
          <div className="gallery-item">
            <i className="fas fa-award"></i>
            Achievements
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
