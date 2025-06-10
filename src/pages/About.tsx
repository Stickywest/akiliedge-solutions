import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiGlobe, FiCode, FiMessageSquare, FiLinkedin, FiGithub, FiTwitter, FiExternalLink } from 'react-icons/fi';

// Import images - replace these paths with your actual image files
import stephenImage from '../assets/about/stephen.png';
import peterImage from '../assets/about/peter.jpg';
import gideonImage from '../assets/about/gideon.png';
import award2024 from '../assets/awards/origin-fest-2024.jpg';
import award2025 from '../assets/awards/origin-fest-2025.jpeg';
import companyOffice from '../assets/about/gideon.png';

const About: React.FC = () => {
  // Animated counter hook
  const useCounter = (target: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = target / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [target, duration]);

    return count;
  };

  // Stats data with animated counters
  const stats = [
    { value: 15, label: 'Projects Completed', icon: <FiCode className="text-3xl" /> },
    { value: 2, label: 'Awards Won', icon: <FiAward className="text-3xl" /> },
    { value: 5000, label: 'Farmers Impacted', icon: <FiUsers className="text-3xl" /> },
    { value: 3, label: 'Countries Reached', icon: <FiGlobe className="text-3xl" /> }
  ];

  // Awards data
  const awards = [
    {
      year: '2024',
      title: 'ORIGIN Fest Winners',
      description: 'Won for our AI-powered USSD solution helping remote farmers access critical agricultural information',
      image: award2024,
      link: 'https://originfest.com/winners-2024'
    },
    {
      year: '2025',
      title: 'ORIGIN Fest VR/AR Award',
      description: 'Recognized for our immersive cultural education platform using VR/AR to preserve African heritage',
      image: award2025,
      link: 'https://originfest.com/winners-2025'
    }
  ];

  // Team data with social links
  const team = [
    {
      name: "Stephen Gioche Nyambura",
      role: "Founder & CEO",
      bio: "Visionary leader with a passion for community-driven technology solutions",
      image: stephenImage,
      social: [
        { icon: <FiLinkedin />, url: "https://linkedin.com/in/stephen-profile", label: "LinkedIn" },
        { icon: <FiGithub />, url: "https://github.com/stephen-profile", label: "GitHub" },
        { icon: <FiTwitter />, url: "https://twitter.com/stephen-profile", label: "Twitter" }
      ]
    },
    {
      name: "Peter Muraya",
      role: "Co-Founder & CTO",
      bio: "Tech innovator specializing in sustainable digital solutions",
      image: peterImage,
      social: [
        { icon: <FiLinkedin />, url: "https://linkedin.com/in/peter-profile", label: "LinkedIn" },
        { icon: <FiGithub />, url: "https://petermuraya.github.io/personal-website/", label: "GitHub" }
      ]
    },
    {
      name: "Gideon Warui",
      role: "Co-Founder & COO",
      bio: "Operations expert focused on scalable impact",
      image: gideonImage,
      social: [
        { icon: <FiLinkedin />, url: "https://linkedin.com/in/gideon-profile", label: "LinkedIn" },
        { icon: <FiTwitter />, url: "https://twitter.com/gideon-profile", label: "Twitter" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Innovating for <span className="text-[#972326]">Impact</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            At Akiliedge Solutions, we bridge technology and community needs to create sustainable solutions that make a real difference.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const count = useCounter(stat.value);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-[#972326] mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {count}+
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognized <span className="text-[#fdd910]">Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our innovative solutions have been celebrated at prestigious platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#972326] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {award.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {award.title}
                    </h3>
                    <a 
                      href={award.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#972326] hover:text-[#fdd910] transition-colors"
                      aria-label="View award details"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                  <p className="text-gray-600">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#972326] mb-4">
              Our <span className="text-[#fdd910]">Headquarters</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Nairobi's tech ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
              <img
                src={companyOffice}
                alt="Akiliedge Solutions Office"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nairobi, Kenya</h3>
              <p className="text-gray-600 mb-6">
                Our central location allows us to collaborate with partners across Africa and beyond. 
                Visit us to discuss how we can work together to create impactful solutions.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">123 Tech Avenue, Nairobi, Kenya</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@akiliedge.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+254 703 373 810</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-[#972326]">Minds</span> Behind the Innovation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the passionate team driving Akiliedge Solutions forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#972326]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#972326] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  {member.social.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#972326] transition-colors p-2 rounded-full hover:bg-yellow-50"
                      aria-label={`${member.name}'s ${social.label}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to Innovate Together?
          </h2>
          <p className="text-lg text-gray-600">
            Let's discuss how we can create impactful solutions for your community
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/254703373810?text=Hello%20Akiliedge%20Solutions,%20I'd%20like%20to%20learn%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#972326] text-white font-medium py-3 px-8 rounded-full hover:bg-[#7a1c1f] transition-all shadow-md hover:shadow-lg"
          >
            <FiMessageSquare />
            Contact Us on WhatsApp
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default About;