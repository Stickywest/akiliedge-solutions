import React from "react";
import { Link } from "react-router-dom";
import comImage from "../assets/comm.jpg"; // Replace with your image

const CommunitySection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#fed90f] rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#972326] rounded-full blur-3xl opacity-20 animate-float-reverse"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        {/* Text Section */}
        <div className="relative bg-white/10 backdrop-blur-lg p-8 lg:p-12 rounded-2xl lg:w-2/3 space-y-6 lg:space-y-8 border border-white/10 shadow-2xl animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-white leading-tight tracking-tight">
            Join Our <span className="text-[#fed90f]">Community</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Be part of a community that focuses on transforming our society
            toward a sustainable future. At Akiliedge Solutions, we believe in
            impactful solutions that make a difference.
          </p>
          <Link to="/community-projects">
            <button className="px-8 py-4 bg-[#fed90f] text-[#1a1a1a] font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-[#ffcc00]">
              Join Us
            </button>
          </Link>
        </div>

        {/* Image Section with Curved Design */}
        <div className="relative lg:w-1/3 lg:h-[450px] h-64 md:h-80 animate-slideIn">
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <img
              src={comImage}
              alt="Community"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#97232699] via-[#fed90f99] to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 bg-[#fed90f] rounded-full opacity-50 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          @keyframes floatReverse {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(20px) rotate(-10deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            0% { opacity: 0; transform: translateX(20px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-float { animation: float 6s infinite ease-in-out; }
          .animate-float-reverse { animation: floatReverse 6s infinite ease-in-out; }
          .animate-fadeIn { animation: fadeIn 1.5s ease-out; }
          .animate-slideIn { animation: slideIn 1.5s ease-out; }
        `}
      </style>
    </div>
  );
};

export default CommunitySection;