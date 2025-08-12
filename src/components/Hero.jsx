import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaLinkedin, FaGithub, FaFacebook, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['I am a MERN Stack Web Developer.', 'I am a Front-End Web Developer.', 'I create modern websites.'],
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
    <section id="hero" className="h-[calc(100vh-130px)] flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-3/4 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-text-focus-in">
            <span className="text-gray-400">Hello, I am</span> <span classname="text-inherit bg-gradient-to-r from-green-600 to-orange-600">Sharful.</span>
            <br />
            <span ref={typedElement} className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-orange-600 text-3xl md:text-4xl lg:text-5xl h-32"></span>
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300">
            I am a passionate MERN Stack Web Developer specializing in <br/> creating beautiful, functional, and high-performance web applications.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a href="https://www.linkedin.com/in/sharful-islam/" target="_blank" rel="noopener noreferrer" className="flex  border text-blue-500 hover:text-gray-300 border-blue-500 hover:border-gray-300 rounded-lg p-3 gap-2">
              <FaLinkedin className="text-2xl" />LinkedIn
            </a>
            <a href="https://github.com/ronnie012" target="_blank" rel="noopener noreferrer" className="flex border text-blue-500 hover:text-gray-300 border-blue-500 hover:border-gray-300 rounded-lg p-3 gap-2">
              <FaGithub className="text-2xl" />GitHub
            </a>
            <a href="https://web.facebook.com/profile.php?id=61571101114481" target="_blank" rel="noopener noreferrer" className="flex border text-blue-500 hover:text-gray-300 border-blue-500 hover:border-gray-300 rounded-lg p-3 gap-2">
              <FaFacebook className="text-2xl" />Facebook
            </a>
          </div>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a href="https://drive.google.com/file/d/1rZB-20WeviLwo7dudoeTdYsiKzvyglQ4/view?usp=sharing" download target="_blank" rel="noopener noreferrer" className="btn-custom-gradient-border group rounded-xl">
            <span className="btn-content flex items-center gap-2">
              Download Resume <FaDownload className="transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:translate-x-3 group-hover:translate-y-3" />
              
            </span>
          </a>
        </div>
        </div>
        <div className="md:w-1/4 mt-8 md:mt-0 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full">
            <img src="/src/assets/portfolio-profile-photo_md-sharful-islam.png" alt="Md Sharful Islam" className="w-full h-full object-cover rounded-full ring-4 ring-offset-4 ring-offset-slate-900 ring-green-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
