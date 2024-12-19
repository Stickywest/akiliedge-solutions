// src/components/CommunitySection.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CommunitySection: React.FC = () => {
  const [rotateClass, setRotateClass] = useState('');

  useEffect(() => {
    // After 4 rotations (4 * 1.5s = 6s) the animation stops for 60 seconds (1 minute)
    let rotateCount = 0;
    const interval = setInterval(() => {
      setRotateClass('rotate-animation');
      rotateCount += 1;
      if (rotateCount >= 4) {
        clearInterval(interval);
        setTimeout(() => {
          setRotateClass('rotate-animation');
          rotateCount = 0;
        }, 60000); // 60 seconds pause
      }
    }, 1500); // 1.5 seconds per rotation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-16 p-8 bg-gradient-to-r from-[#972326] to-[#fdd910] rounded-lg shadow-lg text-white flex flex-col sm:flex-row items-center justify-between">
      {/* Rotating Image Section */}
      <div className={`flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 bg-cover bg-center bg-no-repeat rounded-full mb-4 sm:mb-0 sm:mr-6 ${rotateClass}`} style={{ backgroundImage: "url('/akiliedge-solutions/src/assets/community.jpg')" }}></div>

      {/* Text Block Section */}
      <div className="flex flex-col items-center sm:items-center text-center sm:text-left w-full sm:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Join Our Community</h2>
        <p className="text-lg sm:text-xl max-w-2xl mb-6 text-center">
          Be part of a community that focuses on transforming our society toward a sustainable future. At Akiliedge Solutions, we believe in impactful solutions that make a difference.
        </p>
        <Link to="/community-projects">
          <button className="px-6 py-3 bg-yellow-400 text-[#972326] font-semibold rounded-full shadow-md hover:bg-yellow-500 transition duration-300 mx-auto sm:mx-0">
            Join Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CommunitySection;
