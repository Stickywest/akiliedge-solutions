import React from 'react';

// Define TypeScript interfaces
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
}

// Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div
      className="bg-gray-800 p-8 text-center rounded-xl shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl"
      aria-label={`Service: ${title}`}
    >
      <div className="text-red-500 text-5xl mb-4" role="img" aria-label={title}>
        {icon}
      </div>
      <h4 className="text-red-500 text-2xl font-bold uppercase tracking-wide">{title}</h4>
      <p className="text-gray-300 mt-3 text-lg leading-relaxed">{description}</p>
    </div>
  );
};

// Main CompanySection Component
const CompanySection: React.FC = () => {
  const services: Service[] = [
    {
      title: "Our Services",
      description: "Explore how we can elevate your business with our innovative IT solutions.",
      icon: "🚀",
    },
    {
      title: "Our Expertise",
      description: "Discover why Akiliedge Solutions is the best choice for cutting-edge technology.",
      icon: "💡",
    },
    {
      title: "Our Customers",
      description: "See how we have transformed businesses worldwide with our expertise.",
      icon: "🌍",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-24 px-8" aria-label="About Akiliedge Solutions">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-yellow-500 uppercase text-lg font-semibold tracking-wide">
          Our Company
        </h3>
        <h1 className="text-5xl font-extrabold mt-3 leading-tight text-gray-100">
          Akiliedge Solutions: Your Trusted IT Partner
        </h1>
        <p className="text-gray-300 mt-6 text-lg max-w-4xl mx-auto leading-relaxed">
          At Akiliedge Solutions, we empower enterprises, SMEs, and tech innovators through cutting-edge software development, product design, QA, and consultancy. Our dedicated team of IT engineers thrives on solving your toughest tech challenges and driving business success.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default CompanySection;
