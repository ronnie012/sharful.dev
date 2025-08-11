import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Training from './components/Training';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
