import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Video from './components/Video';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import TalentShow from './components/TalentShow';
import Enrollment from './components/Enrollment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Video />
      <Gallery />
      <Pricing />
      <TalentShow />
      <Enrollment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
