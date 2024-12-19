import React, { useRef } from 'react';

const HappyClients: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 flex flex-col items-center">
      {/* Header for Happy Clients */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#fdd910] font-rubik">
        Our Happy Clients
      </h2>

      {/* Client Logos and Image with Scroll Reveal */}
      <div className="flex flex-wrap justify-center gap-6">
        {['navmed.png', 'clientbill.jpg', '', 'smart.jpg', 'client5.png'].map((client, index) => (
          <a
            key={index}
            href={`https://client${index + 1}.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/akiliedge-solutions/src/assets/${client}`}
              alt={`Client ${index + 1}`}
              className="w-24 sm:w-32 h-auto transform hover:scale-110 transition duration-300 shadow-md hover:shadow-lg"
            />
          </a>
        ))}
        <div
          ref={imageRef}
          className="w-32 h-32 sm:w-48 sm:h-48 bg-cover bg-center bg-no-repeat rounded-full hidden sm:flex items-center justify-center"
          style={{ backgroundImage: "url('/akiliedge-solutions/src/assets/happyclients.png')" }}
        >
          <div className="transform translate-x-[-50%] opacity-0 hidden sm:flex">
            {/* Example of left-side sliding animation */}
            <span className="text-white font-bold text-lg">Our Client</span>
          </div>
        </div>
      </div>

      {/* Intersection Observer for Scroll Reveal */}
      <script>
        {`
          const imageRef = document.querySelector('.image-ref');
          const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
              imageRef.classList.add('fade-in');
            } else {
              imageRef.classList.remove('fade-in');
            }
          }, { threshold: 0.5 });
          
          observer.observe(imageRef);
        `}
      </script>
    </div>
  );
};

export default HappyClients;
