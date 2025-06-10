import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollTimer, setScrollTimer] = useState<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle scroll events for mobile
  useEffect(() => {
    if (!isMobile) {
      setIsVisible(true); // Always visible on desktop
      return;
    }

    const handleScroll = () => {
      setIsVisible(true);
      
      // Clear any existing timer
      if (scrollTimer) clearTimeout(scrollTimer);
      
      // Hide after 2 seconds of inactivity
      setScrollTimer(setTimeout(() => {
        setIsVisible(false);
      }, 2000));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, [isMobile, scrollTimer]);

  // Initial show on mobile for 5 seconds
  useEffect(() => {
    if (isMobile) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  return (
    <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 space-y-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Facebook */}
      <a
        href="https://facebook.com/akiliedge"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#AC2027] rounded-full shadow-lg hover:bg-[#fed90f] transition-all duration-300 hover:scale-110"
        title="Follow us on Facebook"
      >
        <FaFacebook className="text-white text-2xl" />
      </a>
      
      {/* Twitter */}
      <a
        href="https://twitter.com/akiliedge"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#fed90f] rounded-full shadow-lg hover:bg-[#A8CE3B] transition-all duration-300 hover:scale-110"
        title="Follow us on Twitter"
      >
        <FaTwitter className="text-[#AC2027] text-2xl" />
      </a>
      
      {/* Instagram */}
      <a
        href="https://instagram.com/akiliedge"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#AC2027] via-[#fed90f] to-[#A8CE3B] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        title="Follow us on Instagram"
      >
        <FaInstagram className="text-white text-2xl" />
      </a>
      
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/akiliedge-solutions-551399325/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#fed90f] rounded-full shadow-lg hover:bg-[#fed90f] transition-all duration-300 hover:scale-110"
        title="Connect with us on LinkedIn"
      >
        <FaLinkedin className="text-[#AC2027] text-2xl" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;