import React, { useState, useEffect } from 'react';

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
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-slate-900/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="/">&lt;Sharful.Dev/&gt;</a>
        </h1>
        <nav className="hidden md:flex items-center space-x-8 justify-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
            }}
            className={`${activeLink === '#about' ? 'text-blue-400' : 'text-gray-300'} hover:text-white transition-colors duration-300`}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
            }}
            className={`${activeLink === '#projects' ? 'text-blue-400' : 'text-gray-300'} hover:text-white transition-colors duration-300`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className={`${activeLink === '#contact' ? 'text-blue-400' : 'text-gray-300'} hover:text-white transition-colors duration-300`}
          >
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