import React, { useEffect, useRef, useState } from 'react';
import happyImage from "../assets/happyclients.png"; 
import clientbill from "../assets/clientbill.jpg";
import navmed from "../assets/navmed.png";
import smart from "../assets/smart.jpg"; // Use relative import for image

const HappyClients: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, { threshold: 0.5 });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const clients = [
    { name: navmed, url: 'https://client1.com' },
    { name: clientbill, url: 'https://billwayssacco.co.ke' },
    { name: smart, url: 'https://client3.com' },
    { name: happyImage, url: 'https://client4.com' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 flex flex-col items-center">
      {/* Header for Happy Clients */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#fdd910] font-rubik">
        Our Happy Clients
      </h2>

      {/* Client Logos and Image with Scroll Reveal */}
      <div className="flex flex-wrap justify-center gap-6">
        {clients.map((client, index) => (
          <a
            key={index}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={client.name} // Use direct import for images
              alt={`Client ${index + 1}`}
              className="w-24 sm:w-32 h-24 sm:h-32 transform hover:scale-110 transition duration-300 shadow-md hover:shadow-lg"
             />
          </a>
        ))}

        <div
          ref={imageRef}
          className={`w-32 h-32 sm:w-48 sm:h-48 bg-cover bg-center bg-no-repeat rounded-full hidden sm:flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${happyImage})` }}
        >
          <div className="transform translate-x-[-50%] opacity-0 hidden sm:flex">
            {/* Example of left-side sliding animation */}
            <span className="text-white font-bold text-lg">Our Client</span>
          </div>
        </div>
      </div>

      {/* Footer or extra content (if any) */}
      <div className="mt-12 text-center text-gray-600">
        <p>We are proud to work with amazing clients who trust us with their projects.</p>
      </div>
    </div>
  );
};
export default HappyClients;
