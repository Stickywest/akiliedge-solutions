// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-yellow-300 to-yellow-100 min-h-screen text-gray-900">
      {/* Main Section */}
      <div className="p-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 animate__animated animate__fadeInDown">
          About Akiliedge Solutions
        </h1>
        <p className="text-sm md:text-lg text-black max-w-4xl leading-relaxed mb-10 animate__animated animate__fadeInUp">
          At Akiliedge Solutions, we empower communities with innovative, sustainable technology solutions to address real-world challenges. Discover more about who we are, our goals, and our values below.
        </p>
      </div>

      {/* Core Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 pb-16">
        {/* Vision */}
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#972326] mb-4">Vision</h2>
          <p className="text-xs md:text-sm text-gray-700">
            To become a leader in sustainable technology solutions, empowering communities globally.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#fdd910] mb-4">Mission</h2>
          <p className="text-xs md:text-sm text-gray-700">
            Deliver eco-friendly, high-quality technology solutions that meet client needs while fostering growth and sustainability.
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#972326] mb-4">Core Values</h2>
          <ul className="text-xs md:text-sm text-gray-700 space-y-2">
            <li>Innovation</li>
            <li>Sustainability</li>
            <li>Integrity</li>
            <li>Community Focus</li>
          </ul>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gray-100 p-8 md:p-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#972326] mb-6">Our Location</h2>
        <p className="text-sm md:text-base text-gray-700 text-center max-w-3xl mb-8">
          Akiliedge Solutions is headquartered in Nairobi, Kenya. Visit us at our main office for consultations or connect with us online to explore innovative solutions tailored for your business.
        </p>

        {/* Map */}
        <div className="w-full h-48 md:h-64 lg:h-96 mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317695.4557145723!2d36.706505990156234!3d-1.2863890000081154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d90f66e1f7%3A0x4836e96e1e89c293!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1691234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Button */}
        <a
          href="/contact"
          className="bg-[#972326] text-white py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg hover:bg-[#fdd910] hover:text-[#972326] transition duration-300"
        >
          Contact Us
        </a>
      </div>

      {/* Team Section */}
      <div className="p-8 md:p-16 bg-white text-gray-900">
        <h2 className="text-2xl md:text-3xl font-bold text-[#972326] text-center mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Founder */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Stephen Gioche Nyambura"
              className="rounded-full w-24 h-24 md:w-32 md:h-32 mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#972326]">Stephen Gioche Nyambura</h3>
            <p className="text-xs md:text-sm text-gray-700">
              Founder of Akiliedge Solutions, dedicated to creating impactful solutions for a better future.
            </p>
          </div>

          {/* Co-Founders */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Peter Muraya & Gideon Warui"
              className="rounded-full w-24 h-24 md:w-32 md:h-32 mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#972326]">Peter Muraya & Gideon Warui</h3>
            <p className="text-xs md:text-sm text-gray-700">
              Co-founders committed to sustainable innovation and community empowerment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
