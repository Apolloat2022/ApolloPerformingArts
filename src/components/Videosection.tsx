import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="video-section">
      <div className="container">
        <h2>Watch Our Academy in Action</h2>
        <div className="video-container">
          <iframe 
            width="800" 
            height="450" 
            src="https://www.youtube.com/embed/lhT6I6D_3Rk" 
            title="Apollo Performing Arts & Academy Promotion" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="social-buttons" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="https://www.facebook.com/ApolloPerformingArtsandAcademy/photos" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> View Past Shows
          </a>
          <a href="https://www.facebook.com/ApolloPerformingArtsandAcademy/photos" className="btn btn-chat" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> View Talent Shows
          </a>
          <a href="https://www.facebook.com/ApolloPerformingArtsandAcademy/reels/" className="btn btn-register" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Watch Performance Videos
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
