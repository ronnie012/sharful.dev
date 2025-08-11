import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';
import Training from './components/Training';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ParticleBackground />
        <Header />
        <main className="container mx-auto px-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Training />
                  <Contact />
                </>
              }
            />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;