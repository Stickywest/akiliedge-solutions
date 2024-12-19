import React from 'react';
import { Link } from 'react-router-dom';
import CommunitySection from '../components/CommunitySection';
import HappyClients from '../components/HappyClients';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      {/* Welcome Section with Background Image */}
      <div
        className="flex flex-col sm:flex-row items-center text-center sm:text-left py-20 bg-cover bg-center w-full"
        style={{ backgroundImage: "url('/akiliedge-solutions/src/assets/bac.jpg')" }}
      >
        {/* Text Content */}
        <div className="bg-black bg-opacity-70 p-6 rounded-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 animate-pulse">
            Welcome to <br /> Akiliedge Solutions
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-lg text-gray-200 typing-effect">
            Delivering cutting-edge technology solutions.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        className="w-full max-w-6xl mx-auto mt-12 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {[
          { title: "Product Design", description: "Innovative and sustainable product design services tailored to your needs.", link: "/Services", icon: "fa-cogs" },
          { title: "Web Design", description: "Custom web design solutions that are both aesthetically pleasing and functional.", link: "/Services", icon: "fa-desktop" },
          { title: "System Development", description: "End-to-end system development services to streamline your business processes.", link: "/Services", icon: "fa-code" },
          { title: "Artificial Intelligence", description: "AI solutions that drive efficiency and innovation in your organization.", link: "/Services", icon: "fa-robot" },
        ].map((service, index) => (
          <Link key={index} to={service.link} className="block">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl border-t-4 border-[#fdd910]">
              {/* Icon */}
              <i className={`fa ${service.icon} text-4xl text-[#972326] mb-2`} />
              <h4 className="text-2xl md:text-3xl font-bold text-[#972326] mb-2">
                {service.title}
              </h4>
              <p className="text-black text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Happy Clients Section */}
     

      {/* Community Section */}
      <CommunitySection />
      <HappyClients />
    </div>
  );
};

export default Home;
