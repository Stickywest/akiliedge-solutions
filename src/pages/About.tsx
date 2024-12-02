// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#972326] via-[#fdd910] to-[#972326] min-h-screen p-10 flex flex-col items-center">
      
      {/* Main Title */}
      <h2 className="text-6xl font-extrabold text-white text-center mb-8 animate__animated animate__fadeInDown">
        About Akiliedge Solutions
      </h2>
      
      {/* Main Description */}
      <p className="text-2xl text-white text-center max-w-3xl mx-auto mb-16 leading-relaxed animate__animated animate__fadeInUp">
        At Akiliedge Solutions, we are dedicated to creating sustainable, innovative technology solutions to empower communities and drive positive change.
      </p>
      
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        
        {/* Vision Card */}
        <div className="bg-white rounded-lg p-8 shadow-2xl border-t-4 border-[#972326] transform transition hover:scale-105 duration-300">
          <h3 className="text-3xl font-semibold text-[#972326] mb-4">Vision</h3>
          <p className="text-lg text-gray-700">
            To become a leader in sustainable technology solutions, empowering communities and businesses globally.
          </p>
        </div>
        
        {/* Mission Card */}
        <div className="bg-white rounded-lg p-8 shadow-2xl border-t-4 border-[#fdd910] transform transition hover:scale-105 duration-300">
          <h3 className="text-3xl font-semibold text-[#972326] mb-4">Mission</h3>
          <p className="text-lg text-gray-700">
            Deliver eco-friendly, high-quality technology solutions that meet client needs while fostering growth and sustainability.
          </p>
        </div>
        
        {/* Motto Card */}
        <div className="bg-white rounded-lg p-8 shadow-2xl border-t-4 border-[#972326] transform transition hover:scale-105 duration-300">
          <h3 className="text-3xl font-semibold text-[#972326] mb-4">Motto</h3>
          <p className="text-lg text-gray-800 italic">"Building Sustainable Solutions"</p>
        </div>
        
        {/* Founder Card */}
        <div className="bg-white rounded-lg p-8 shadow-2xl border-t-4 border-[#fdd910] transform transition hover:scale-105 duration-300">
          <h3 className="text-3xl font-semibold text-[#972326] mb-4">Founder</h3>
          <p className="text-lg text-gray-700">
            Akiliedge Solutions was founded by <strong>Stephen Gioche Nyambura</strong>, a visionary dedicated to creating impactful solutions.
          </p>
        </div>
        
        {/* Co-Founders Card */}
        <div className="bg-white rounded-lg p-8 shadow-2xl border-t-4 border-[#972326] transform transition hover:scale-105 duration-300 md:col-span-2">
          <h3 className="text-3xl font-semibold text-[#972326] mb-4">Co-Founders</h3>
          <p className="text-lg text-gray-700">
            <strong>Peter Muraya</strong> and <strong>Gideon Warui</strong> joined as co-founders, adding expertise and commitment to sustainable tech solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
