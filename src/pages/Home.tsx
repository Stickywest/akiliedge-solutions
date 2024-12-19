import React from 'react';
import { Link } from 'react-router-dom';
import CommunitySection from '../components/CommunitySection';
import HappyClients from '../components/HappyClients';
import bacImage from "../assets/bac.jpg";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white font-sans bg-gray-100">

      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center text-center w-full h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bacImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60" /> {/* Dark overlay */}
        <div className="z-10 px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg animate-fadeIn">
            Welcome to Akiliedge Solutions
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed animate-slideUp">
            Empowering communities with innovative and sustainable technology solutions.
          </p>
          <Link
            to="/Services"
            className="inline-block px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition duration-300"
          >
            Explore Services
          </Link>
        </div>
      </div>

      <div className="w-full py-16 bg-gradient-to-b from-gray-100 to-white">
  <h2 className="text-4xl text-center font-extrabold text-gray-800 mb-10">
    Our Services
  </h2>
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      { title: "Product Design", description: "Innovative and sustainable product design services tailored to your needs.", link: "/Services", icon: "fa-cogs" },
      { title: "Web Design", description: "Custom web design solutions that are both aesthetically pleasing and functional.", link: "/Services", icon: "fa-desktop" },
      { title: "System Development", description: "End-to-end system development services to streamline your business processes.", link: "/Services", icon: "fa-code" },
      { title: "Artificial Intelligence", description: "AI solutions that drive efficiency and innovation in your organization.", link: "/Services", icon: "fa-robot" },
    ].map((service, index) => (
      <Link
        key={index}
        to={service.link}
        className="block group transform hover:scale-105 transition-transform duration-500"
      >
        <div className="relative p-6 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-500">
          {/* Icon Section */}
          <div className="relative bg-white p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
  {/* Icon container */}
  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500" style={{ clipPath: 'circle(50% at 50% 50%)' }}>
    <i className={`fa ${service.icon} text-3xl`} />
  </div>

  {/* Content */}
  
</div>

          {/* Card Content */}
          <div className="pt-8 text-center">
            <h4 className="text-2xl font-extrabold text-gray-800 mb-2">
              {service.title}
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              {service.description}
            </p>
            <div className="flex items-center justify-center">
              <span className="inline-block px-4 py-2 bg-yellow-400 text-white font-semibold rounded-full hover:bg-yellow-500 transition duration-300">
                Learn More
              </span>
            </div>
          </div>

          {/* Background Shine */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br from-yellow-300 to-yellow-600" />
        </div>
      </Link>
    ))}
  </div>
</div>

      {/* Happy Clients Section */}
      <div className="w-full py-12 bg-gray-900 text-white">
        <h2 className="text-4xl font-extrabold text-center mb-6">Our Happy Clients</h2>
        <p className="text-center text-lg text-gray-300 mb-8">
          Trusted by organizations around the world.
        </p>
        <HappyClients />
      </div>

      {/* Community Section */}
      <div className="w-full py-16 bg-gray-50">
        <CommunitySection />
      </div>

    </div>
  );
};

export default Home;
