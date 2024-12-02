// src/components/CommunitySection.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const CommunitySection: React.FC = () => {
  return (
    <div className="w-full mt-16 p-8 bg-gradient-to-r from-[#972326] to-[#fdd910] rounded-lg shadow-lg text-center text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Community</h2>
      <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
        Be part of a community that focuses on transforming our society toward a sustainable future. At Akiliedge Solutions, we believe in impactful solutions that make a difference.
      </p>
      <Link to="/community-projects">
        <button className="px-6 py-3 bg-yellow-400 text-[#972326] font-semibold rounded-full shadow-md hover:bg-yellow-500 transition duration-300">
          Join Us
        </button>
      </Link>
    </div>
  );
};

export default CommunitySection;
