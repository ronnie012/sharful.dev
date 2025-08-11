import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 justify-center">
      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
        <FaGithub className="text-2xl" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
        <FaLinkedin className="text-2xl" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
        <FaTwitter className="text-2xl" />
      </a>
    </div>
  );
};

export default SocialLinks;