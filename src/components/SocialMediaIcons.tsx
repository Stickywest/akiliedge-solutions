// src/components/SocialMediaIcons.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons: React.FC = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#AC2027] rounded-full shadow-lg hover:bg-[#fed90f] transition-colors duration-300"
        title="Follow us on Facebook"
      >
        <FaFacebook className="text-white text-2xl" />
      </a>
      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#fed90f] rounded-full shadow-lg hover:bg-[#A8CE3B] transition-colors duration-300"
        title="Follow us on Twitter"
      >
        <FaTwitter className="text-[#AC2027] text-2xl" />
      </a>
      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#AC2027] via-[#fed90f] to-[#A8CE3B] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        title="Follow us on Instagram"
      >
        <FaInstagram className="text-white text-2xl" />
      </a>
      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#fed90f] rounded-full shadow-lg hover:bg-[#fed90f] transition-colors duration-300"
        title="Connect with us on LinkedIn"
      >
        <FaLinkedin className="text-[#AC2027] text-2xl" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
