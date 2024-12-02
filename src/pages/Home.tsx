import React from 'react';
import { Link } from 'react-router-dom';

import CommunitySection from '../components/CommunitySection';
const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      {/* Welcome Section with Background Image */}
      <div 
        className="flex flex-col sm:flex-row items-center text-center sm:text-left py-20 bg-cover bg-center w-full"
        style={{ backgroundImage: "url('/akiliedge-solutions/public/bac.jpg')" }}
      >
        
        {/* Text Content */}
        <div className="bg-black bg-opacity-70 p-6 rounded-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 animate-pulse">
            Welcome to <br></br>Akiliedge Solutions
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-lg text-gray-200 typing-effect">
            Delivering cutting-edge technology solutions.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="w-full max-w-6xl mx-auto mt-12 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  
  {[
    { title: "Product Design", description: "Innovative and sustainable product design services tailored to your needs.", link: "/Services" },
    { title: "Web Design", description: "Custom web design solutions that are both aesthetically pleasing and functional.", link: "/Services" },
    { title: "System Development", description: "End-to-end system development services to streamline your business processes.", link: "/Services" },
    { title: "Artificial Intelligence", description: "AI solutions that drive efficiency and innovation in your organization.", link: "/Services" },
  ].map((service, index) => (
    <Link key={index} to={service.link} className="block">
      <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl border-t-4 border-[#fdd910]">
        <h4 className="text-2xl md:text-3xl font-bold text-[#972326] mb-2">{service.title}</h4>
        <p className="text-black text-base md:text-lg leading-relaxed">{service.description}</p>
      </div>
    </Link>
  ))}
</div>



      {/* Clients Section */}
      <div className="w-full max-w-6xl mx-auto mt-16 flex flex-col items-center">
  {/* Header for Happy Clients */}
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#fdd910] font-rubik">
  Our Happy Clients
</h2>



  {/* Client Logos with Staggered Wave Animation */}
  <div className="flex flex-wrap justify-center gap-6">
    {['navmed.png', 'clientbill.jpg', '', 'smart.jpg', 'client5.png'].map((client, index) => (
      <a key={index} href={`https://client${index + 1}.com`} target="_blank" rel="noopener noreferrer">
        <img 
          src={`/akiliedge-solutions/src/assets/${client}`} 
          alt={`Client ${index + 1}`} 
          className={`w-24 sm:w-32 h-auto transform hover:scale-110 transition duration-300 shadow-md hover:shadow-lg animate-wave`}
          style={{ animationDelay: `${index * 0.2}s` }} // Stagger animation delay
        />
      </a>
    ))}
  </div>
</div>


  {/* Community Section */}
  <CommunitySection />
    </div>
  );
};

export default Home;
