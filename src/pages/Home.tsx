import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import HappyClients from '../components/HappyClients';
import Hero from '../components/HeroSection';

const Home: React.FC = () => {
  // Coding animation setup
  useEffect(() => {
    const typed = new Typed('#coding-animation', {
      strings: [
        'npm install innovation^\n100% installed\n\n',
        'const solution = {\n  creativity: true,\n  technology: "cutting-edge",\n  delivery: "on-time"\n}^\n\n',
        'git commit -m "Building the future"^\n\n',
        'while(success) {\n  keepInnovating();\n}^\n\n'
      ],
      typeSpeed: 40,
      backSpeed: 0,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const services = [
    { 
      title: "Product Design", 
      description: "From concept to creation, we design products users love.", 
      icon: "🎨"
    },
    { 
      title: "Web Development", 
      description: "Fast, responsive websites that drive results.", 
      icon: "🌐"
    },
    { 
      title: "AI Solutions", 
      description: "Harnessing artificial intelligence for business growth.", 
      icon: "🧠"
    },
    { 
      title: "IoT Systems", 
      description: "Connecting devices to create smart ecosystems.", 
      icon: "📶"
    }
  ];

  const languages = [
    { name: "JavaScript/TypeScript", proficiency: 90, color: "bg-yellow-400" },
    { name: "Python", proficiency: 85, color: "bg-blue-500" },
    { name: "Java", proficiency: 80, color: "bg-red-500" },
    { name: "C#", proficiency: 75, color: "bg-purple-500" },
    { name: "PHP", proficiency: 70, color: "bg-indigo-500" },
    { name: "Swift", proficiency: 65, color: "bg-orange-500" }
  ];

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "254703373810";
    const message = "Hello! I'm interested in a free consultation about your services.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Stats Bar with Wave Animation */}
      <div className="relative py-16 bg-yellow-500 text-white overflow-hidden">
        {/* Wave Animation */}
        <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
          <svg 
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              className="fill-white" 
              opacity=".25"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              className="fill-white" 
              opacity=".5"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              className="fill-white"
            ></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center relative z-10">
          {[
            { value: "200+", label: "Projects Completed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Technologies Used" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="p-4"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-yellow-300 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-yellow-100 flex items-center justify-center text-3xl transition-all duration-300 group-hover:bg-yellow-200 group-hover:text-4xl">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <div className="inline-flex items-center text-yellow-600 font-medium group-hover:text-yellow-700 transition-colors">
                    Learn more
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-yellow-500">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Languages and technologies we're proficient in
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Coding Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 rounded-xl p-6 shadow-lg"
            >
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div id="coding-animation" className="font-mono text-green-400 h-64 overflow-auto text-sm"></div>
            </motion.div>

            {/* Language Proficiency */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {languages.map((language, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg font-medium text-gray-900">{language.name}</span>
                    <span className="text-sm text-gray-500">{language.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${language.color}`} 
                      style={{ width: `${language.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Happy Clients */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HappyClients />
        </div>
      </section>

      {/* CTA Section - Transparent Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        {/* Floating bubbles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                y: [100, -100],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              className="absolute rounded-full bg-yellow-400 opacity-30"
              style={{
                width: `${5 + Math.random() * 20}px`,
                height: `${5 + Math.random() * 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Ready to start your project?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Let's build something amazing together
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={handleWhatsAppRedirect}
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-12.968c-5.258 0-9.525 4.267-9.525 9.525 0 1.907.573 3.697 1.547 5.18L2 22l5.233-1.365a9.56 9.56 0 0 0 4.55 1.158c5.258 0 9.525-4.267 9.525-9.525S16.73 3.414 11.472 3.414z"/>
              </svg>
              Get Free Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;