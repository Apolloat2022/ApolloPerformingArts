import React from 'react';

const Video: React.FC = () => {
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="social-buttons">
          <a href="https://www.facebook.com/ApolloPerformingArtsandAcademy/photos" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-photo-video"></i>
            View Past Shows
          </a>
          <a href="https://www.facebook.com/ApolloPerformingArtsandAcademy/photos" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-trophy"></i>
            View Talent Shows
          </a>
          <a href="https://www.youtube.com/@HumanExpressiontv" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
            Watch Performance Videos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Video;
