import React from 'react';
import greenleader from "../assets/greenleaders.jpeg";
import clientbill from "../assets/clientbill.jpg";
import navmed from "../assets/navmed.png";
import smart from "../assets/smart.jpg";
import eldocity from "../assets/eldocitylogo.jpeg";
import Diamond from "../assets/Diamond.jpeg";
import Jarika from "../assets/jarikalogo.png";
import { motion } from 'framer-motion';

const clients = [
  { name: navmed, url: 'https://client1.com', alt: 'Navmed Logo' },
  { name: clientbill, url: 'https://billwayssacco.co.ke', alt: 'Client Bill Logo' },
  { name: smart, url: 'https://client3.com', alt: 'Smart Logo' },
  { name: greenleader, url: 'https://stickywest.github.io/green/', alt: 'Green Leader Logo' },
  { name: eldocity, url: 'https://stickywest.github.io/eldocity/', alt: 'Eldo City Logo' },
  { name: Diamond, url: 'https://diamonddovetours.com', alt: 'Diamond Dove Tours' },
  { name: Jarika, url: 'https://jarikawatamu.com', alt: 'Jarika watamu Logo' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const HappyClients: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#fdd910] blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Trusted by <span className="text-[#fdd910]">World-Class</span> Organizations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We've had the privilege to collaborate with industry leaders and innovative startups
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8"
        >
          {clients.map((client, index) => (
            <motion.a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover="hover"
              className="group relative flex items-center justify-center p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#fdd910]/50"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-[#fdd910]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={client.name}
                alt={client.alt}
                className="w-full h-auto max-h-16 object-contain grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fdd910] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm md:text-base">
            Interested in joining our network of satisfied clients?{' '}
            <a 
  href="https://wa.me/254703373810?text=Hello%20there,%20I'm%20interested%20in%20your%20services" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-[#fdd910] font-medium hover:underline"
>
  Get in touch
</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HappyClients;