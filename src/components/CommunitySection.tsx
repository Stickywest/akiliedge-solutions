import React from "react";
import { Link } from "react-router-dom";
import comImage from "../assets/comm.jpg";

const CommunitySection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#972326] via-[#fed90f] to-transparent py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        {/* Text Section */}
        <div className="relative bg-white p-8 lg:p-12 shadow-lg rounded-xl lg:w-2/3 space-y-6 lg:space-y-8">
          <h2 className="text-5xl font-extrabold text-[#972326] leading-tight tracking-tight">
            Join Our Community
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Be part of a community that focuses on transforming our society
            toward a sustainable future. At Akiliedge Solutions, we believe in
            impactful solutions that make a difference.
          </p>
          <Link to="/community-projects">
            <button className="px-8 py-4 bg-[#fed90f] text-[#972326] font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Join Us
            </button>
          </Link>
        </div>

        {/* Image Section with Curved Design */}
        <div className="relative lg:w-1/3 lg:h-[450px] h-64 md:h-80">
          <svg
            className="absolute top-0 right-0 w-full h-full z-10"
            viewBox="0 0 400 450"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="curvedImage">
              <path
                d="M0,0 Q300,50 400,200 Q300,350 0,450 Z"
                fill="currentColor"
              />
            </clipPath>
            <image
              href={comImage}
              width="400"
              height="450"
              clipPath="url(#curvedImage)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-l from-[#97232699] via-[#fed90f99] to-transparent z-20"></div>
        </div>
      </div>

      {/* Decorative Accent */}
      <div className="absolute -top-10 -left-10 w-36 h-36 bg-yellow-400 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#972326] rounded-full blur-3xl opacity-50"></div>
    </div>
  );
};

export default CommunitySection;
