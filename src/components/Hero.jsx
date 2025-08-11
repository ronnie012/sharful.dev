import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['I am a Front-End Web Developer.', 'I am a MERN Stack Developer.', 'I create modern websites.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section id="hero" className="h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-text-focus-in">
            <span className="text-gray-400">Hi, I am</span> Sharful.
            <br />
            <span ref={typedElement} className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-orange-600 text-3xl md:text-4xl h-32"></span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            I am a passionate React developer specializing in creating beautiful, functional, and high-performance web applications.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a href="https://drive.google.com/file/d/18cwim6eUq645KSHWVC6yytCuJGCYJHfh/view?usp=sharing" download target="_blank" rel="noopener noreferrer" className="btn-custom-gradient-border group rounded-xl">
            <span className="btn-content">
              Download Resume
            </span>
          </a>
        </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <img src="/src/assets/portfolio-profile-photo_md-sharful-islam.png" alt="Md Sharful Islam" className="w-full h-full object-cover ring-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
