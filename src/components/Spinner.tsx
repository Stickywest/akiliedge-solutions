import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="relative">
        {/* Glowing Effect Background */}
        <div className="absolute inset-0 h-20 w-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-red-500 rounded-full blur-lg opacity-50 animate-pulse"></div>

        {/* Spinner Animation */}
        <div className="h-16 w-16 border-4 border-solid rounded-full animate-spin border-t-yellow-400 border-r-yellow-500 border-b-red-500 border-l-red-400"></div>

        {/* Loading Text */}
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-700 font-bold text-sm drop-shadow-md">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Spinner;
