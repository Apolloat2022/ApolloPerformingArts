import React from 'react';

const Gallery: React.FC = () => {
  const galleryItems = ['guitar', 'drum', 'microphone', 'music'];
  
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Our Gallery</h2>
        <div className="gallery-grid">
          {galleryItems.map((icon, i) => (
            <div key={i} className="gallery-item">
              <div className="gallery-img" style={{ background: `linear-gradient(45deg, var(--primary), var(--secondary))`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <i className={`fas fa-${icon}`} style={{ fontSize: '3rem' }}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;