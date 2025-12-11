import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex space-x-8 justify-center">
      <a href="https://www.linkedin.com/in/md-sharful-islam/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        <FaLinkedin className="text-2xl" />
      </a>
      <a href="https://github.com/ronnie012" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        <FaGithub className="text-2xl" />
      </a>
      <a href="https://web.facebook.com/profile.php?id=61571101114481" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        <FaFacebook className="text-2xl" />
      </a>
    </div>
  );
};

export default SocialLinks;