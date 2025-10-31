import React from 'react';

function App() {
  return (
    <div>
      {/* Simple Header */}
      <div style={{ padding: '20px', background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Logo with fallback */}
          <div style={{ position: 'relative' }}>
            <img 
              src="./Logo.png" 
              alt="Apollo Performing Arts Logo" 
              style={{ 
                width: '50px', 
                height: '50px', 
                marginRight: '15px',
                display: 'block'
              }}
              onError={(e) => {
                // If logo fails, show fallback
                e.target.style.display = 'none';
                const fallback = document.getElementById('logo-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div 
              id="logo-fallback"
              style={{ 
                width: '50px', 
                height: '50px', 
                marginRight: '15px', 
                background: '#2563eb',
                borderRadius: '8px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px'
              }}
            >
              🎵
            </div>
          </div>
          <h1 style={{ color: '#2563eb', margin: 0 }}>Apollo Performing Arts</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ 
        padding: '120px 20px', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Unleash Your Musical Potential</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Premier music education for all ages and skill levels at Apollo Performing Arts & Academy in Frisco, TX.
        </p>
        <div style={{ marginTop: '30px' }}>
          <button style={{ padding: '15px 30px', margin: '10px', background: '#f59e0b', border: 'none', borderRadius: '8px', color: 'white', fontSize: '1.1rem' }}>
            Book Free Trial
          </button>
          <button style={{ padding: '15px 30px', margin: '10px', background: 'transparent', border: '2px solid white', borderRadius: '8px', color: 'white', fontSize: '1.1rem' }}>
            Learn More
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h3>Contact Us</h3>
        <p>7511 Main Street, Suite 200, Frisco, TX 75034</p>
        <p>Phone: 833-813-0668</p>
        <p>Email: Robinpandey@apollotunes.com</p>
      </div>

      {/* Footer */}
      <div style={{ padding: '40px 20px', background: '#1e293b', color: 'white', textAlign: 'center' }}>
        <p>© 2025 Apollo Performing Arts & Academy. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
