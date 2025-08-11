import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCog, FaProjectDiagram, FaEnvelope, FaAward } from 'react-icons/fa';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = `#${section.getAttribute('id')}`;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-slate-900/20 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="/">&lt;Sharful.Dev/&gt;</a>
        </h1>
        <nav className="hidden md:flex items-center space-x-4 justify-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${activeLink === '#hero' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <FaHome />
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${activeLink === '#about' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <FaUser />
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${activeLink === '#skills' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <FaCog />
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${activeLink === '#projects' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <FaProjectDiagram />
            Projects
          </a>
          <a
            href="#training"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#training').scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${activeLink === '#training' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <FaAward />
            Training
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${activeLink === '#contact' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <FaEnvelope />
            Contact
          </a>
          
        </nav>
        <div>
          <a href="https://drive.google.com/file/d/18cwim6eUq645KSHWVC6yytCuJGCYJHfh/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-custom-gradient-border group rounded-xl">
          <span className="btn-content">
            Hire Me
          </span>
        </a>
      </div>
    </div>
</header>
  );
};

export default Header;