import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Simple Header */}
      <header style={{ padding: '20px', background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <img 
            src="https://apolloat2022.github.io/ApolloPerformingArts/Logo.png"  
            alt="Apollo Performing Arts Logo" 
            style={{ width: '50px', height: '50px', marginRight: '15px' }}
          />
          <h1 style={{ color: '#2563eb', margin: 0 }}>Apollo Performing Arts</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
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
      </section>

      {/* Contact Section */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h3>Contact Us</h3>
        <p>7511 Main Street, Suite 200, Frisco, TX 75034</p>
        <p>Phone: 833-813-0668</p>
        <p>Email: Robinpandey@apollotunes.com</p>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 20px', background: '#1e293b', color: 'white', textAlign: 'center' }}>
        <p>© 2025 Apollo Performing Arts & Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

