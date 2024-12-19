import React, { useState } from 'react';

// Import images
import aiImage from "../assets/AI.png";
import productDesignImage from "../assets/product.jpg";
import webDesignImage from "../assets/webd.jpg";
import softwareDevelopmentImage from "../assets/product.png";
import iotImage from "../assets/product.png";

const servicesList = [
  { id: 1, title: "AI Solutions", description: "Harness the power of artificial intelligence to optimize your business processes.", image: aiImage },
  { id: 2, title: "Product Design", description: "Innovative design solutions that transform ideas into tangible products.", image: productDesignImage },
  { id: 3, title: "Web Design", description: "Creative and responsive web design services that enhance user experience.", image: webDesignImage },
  { id: 4, title: "Software Development", description: "Custom software solutions tailored to meet your unique business needs.", image: softwareDevelopmentImage },
  { id: 5, title: "Internet Of Things", description: "Custom software solutions tailored to meet your unique business needs.", image: iotImage },
];

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; image: string } | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const filteredServices = servicesList.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleServiceClick = (service: { title: string; description: string; image: string }) => {
    setSelectedService(service);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedService) {
      // Construct the WhatsApp URL
      const phoneNumber = "254703373810"; // Replace with your WhatsApp number in international format (without the +)
      const message = `Hello! I am interested in your service: ${selectedService.title}. 
Here are my details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Redirect to WhatsApp
      window.location.href = whatsappUrl;
    }

    setSelectedService(null); // Close the form
    setFormData({ name: '', email: '', phone: '' }); // Reset form
  };

  return (
    <div className="p-8 bg-gradient-to-r from-yellow-100 to-yellow-200 min-h-screen">
      <h2 className="text-3xl font-semibold text-yellow-700 text-center">Our Services</h2>
      <input
        type="text"
        placeholder="Search services..."
        className="mt-4 p-2 border border-gray-400 rounded shadow focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredServices.map(service => (
          <div 
            key={service.id} 
            className="bg-white bg-opacity-10 rounded-lg p-4 text-center transform hover:scale-105 transition duration-300 shadow-lg"
            onClick={() => handleServiceClick(service)}
          >
            <img src={service.image} alt={service.title} className="h-40 w-full object-cover rounded-lg mb-4 transition duration-300 transform hover:scale-110" />
            <h3 className="text-2xl text-yellow-400 mb-2">{service.title}</h3>
            <p className="text-black">{service.description}</p> {/* Changed to black */}
          </div>
        ))}
      </div>

      {/* Modal for Form */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 animate__animated animate__fadeIn">
            <h3 className="text-2xl font-semibold mb-4">{selectedService.title}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-gray-400 p-2 rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border border-gray-400 p-2 rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border border-gray-400 p-2 rounded w-full"
                  required
                />
              </div>
              <button type="submit" className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-200">
                Submit
              </button>
              <button type="button" onClick={() => setSelectedService(null)} className="ml-2 text-gray-600 hover:underline">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
