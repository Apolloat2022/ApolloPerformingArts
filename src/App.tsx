import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import TalentShow from './components/TalentShow';
import Enrollment from './components/Enrollment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Gallery />
        <Pricing />
        <TalentShow />
        <Enrollment />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;