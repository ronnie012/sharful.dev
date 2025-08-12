import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaUser, FaCog, FaProjectDiagram, FaEnvelope, FaAward, FaPaperPlane } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#hero');
  const isScrollingByClick = useRef(false); // Use useRef

  // Effect for handling manual scroll to reset isScrollingByClick
  useEffect(() => {
    const handleManualScroll = () => {
      if (isScrollingByClick.current) {
        // Debounce to ensure it's a sustained manual scroll, not just a bounce from smooth scroll
        clearTimeout(window._manualScrollTimer);
        window._manualScrollTimer = setTimeout(() => {
          isScrollingByClick.current = false;
        }, 100); // Small delay to confirm manual scroll
      }
    };

    window.addEventListener('scroll', handleManualScroll);
    return () => {
      window.removeEventListener('scroll', handleManualScroll);
      clearTimeout(window._manualScrollTimer);
    };
  }, []); // Empty dependency array, runs once on mount
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingByClick.current) {
        return; // Don't update activeLink from scroll event if scrolling by click
      }
      if (location.pathname === '/') {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY;

        let closestSection = null;
        let minDistance = Infinity;

        sections.forEach(section => {
          const sectionId = `#${section.getAttribute('id')}`;
          const sectionTop = section.offsetTop - (headerRef.current ? headerRef.current.offsetHeight : 0);

          // Only consider sections that are above or at the current scroll position
          if (scrollY >= sectionTop) {
            const distance = scrollY - sectionTop;
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = sectionId;
            }
          }
        });

        if (closestSection) {
          setActiveLink(closestSection);
        } else {
          setActiveLink('#hero'); // Fallback to hero if no section is found (e.g., at very top of page)
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // Removed isScrollingByClick from dependency array

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = headerRef.current ? headerRef.current.offsetHeight + 1 : 0; // Add a small offset
    window.scrollTo({ top: yCoordinate - yOffset, behavior: 'smooth' });
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 backdrop-blur-sm bg-slate-900/20 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="/">&lt;Sharful.Dev/&gt;</a>
        </h1>
        <nav className="hidden md:flex items-center space-x-4 justify-center">
          <Link
            to="/#hero"
            scroll={el => scrollWithOffset(el)}
            onClick={() => {
              isScrollingByClick.current = true;
              setActiveLink('#hero');
            }}
            className={`flex items-center gap-2 border rounded-lg px-4 py-2 text-sm transition-colors duration-300 ${activeLink === '#hero' ? 'text-gray-300 border-gray-300' : 'text-blue-500 hover:text-gray-300  border-blue-500 hover:border-gray-300' }`}
          >
            <FaHome />
            Home
          </Link>
          <Link
            to="/#about"
            scroll={el => scrollWithOffset(el)}
            onClick={() => {
              isScrollingByClick.current = true;
              setActiveLink('#about');
            }}
            className={`flex items-center gap-2 border rounded-lg px-4 py-2 text-sm transition-colors duration-300 ${activeLink === '#about' ? 'text-gray-300 border-gray-300' : 'text-blue-500 hover:text-gray-300 border border-blue-500 hover:border-gray-300'}`}
          >
            <FaUser />
            About
          </Link>
          <Link
            to="/#skills"
            scroll={el => scrollWithOffset(el)}
            onClick={() => {
              isScrollingByClick.current = true;
              setActiveLink('#skills');
            }}
            className={`flex items-center gap-2 border rounded-lg px-4 py-2 text-sm transition-colors duration-300 ${activeLink === '#skills' ? 'text-gray-300 border-gray-300' : 'text-blue-500 hover:text-gray-300 border border-blue-500 hover:border-gray-300'}`}
          >
            <FaCog />
            Skills
          </Link>
          <Link
            to="/#projects"
            scroll={el => scrollWithOffset(el)}
            onClick={() => {
              isScrollingByClick.current = true;
              setActiveLink('#projects');
            }}
            className={`flex items-center gap-2 border rounded-lg px-4 py-2 text-sm transition-colors duration-300 ${activeLink === '#projects' ? 'text-gray-300 border-gray-300' : 'text-blue-500 hover:text-gray-300 border border-blue-500 hover:border-gray-300'}`}
          >
            <FaProjectDiagram />
            Projects
          </Link>
          <Link
            to="/#training"
            scroll={el => scrollWithOffset(el)}
            onClick={() => {
              isScrollingByClick.current = true;
              setActiveLink('#training');
            }}
            className={`flex items-center gap-2 border rounded-lg px-4 py-2 text-sm transition-colors duration-300 ${activeLink === '#training' ? 'text-gray-300 border-gray-300' : 'text-blue-500 hover:text-gray-300 border border-blue-500 hover:border-gray-300'}`}
          >
            <FaAward />
            Training
          </Link>
          <Link
            to="/#contact"
            scroll={el => scrollWithOffset(el)}
            onClick={() => {
              isScrollingByClick.current = true;
              setActiveLink('#contact');
            }}
            className={`flex items-center gap-2 border rounded-lg px-4 py-2 text-sm transition-colors duration-300 ${activeLink === '#contact' ? 'text-gray-300 border-gray-300' : 'text-blue-500 hover:text-gray-300 border border-blue-500 hover:border-gray-300'}`}
          >
            <FaEnvelope />
            Contact
          </Link>
          
        </nav>
        <div>
          <Link
            to="/#contact"
            scroll={el => scrollWithOffset(el)} // Apply offset to Hire Me button as well
            onClick={() => {
              isScrollingByClick.current = true;
              setActiveLink('#contact');
            }}
            className="btn-custom-gradient-border group rounded-lg py-1 px-2 mt-1"
          >
            <span className="btn-content flex items-center gap-3 ">
               Hire Me <FaPaperPlane className="transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:translate-x-2 group-hover:-translate-y-2" />
             
            </span>
          </Link>
      </div>
    </div>
</header>
  );
};

export default Header;



