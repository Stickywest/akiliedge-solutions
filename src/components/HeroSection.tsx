import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bacImage from "../assets/bac.jpg"; // First background image
import teamImage from "../assets/team.jpg"; // Second background image

const wishes = [
  "We build mobile applications that transform your ideas into reality, delivering seamless user experiences.",
  "At Akiliedge Solutions, we specialize in custom software development tailored to meet your unique business needs.",
  "Our AI-powered applications provide intelligent solutions to automate and optimize your processes.",
  "We offer IoT solutions that connect devices and streamline operations for a smarter future.",
  "Empower your business with our custom-built software solutions designed for efficiency and growth.",
  "Our mobile applications are designed to enhance user engagement and business performance.",
  "Leverage our AI expertise to develop smart applications that drive innovation and efficiency.",
  "We create IoT solutions that enable seamless communication between devices for better control and insights.",
  "Our custom software solutions are built with scalability and security in mind to support your business growth.",
  "Transform your ideas into reality with our expert mobile application development services.",
  "From AI-driven chatbots to predictive analytics, we bring cutting-edge technology to your business.",
  "We provide comprehensive IoT solutions that integrate seamlessly into your business operations.",
  "Unlock new opportunities with our AI-powered applications designed for modern businesses.",
  "Our custom software solutions help businesses automate tasks and improve productivity.",
  "We develop mobile applications that deliver a flawless experience across all platforms.",
  "At Akiliedge Solutions, we combine AI and IoT to create smart solutions for various industries.",
  "Our experienced team builds scalable, secure, and user-friendly software applications.",
  "We harness the power of AI to provide actionable insights and enhance decision-making.",
  "Our IoT solutions enable real-time monitoring and control, improving efficiency and reducing costs.",
  "Partner with us to build innovative digital solutions that align with your business goals.",
];

const Hero: React.FC = () => {
  const [randomWish, setRandomWish] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<string>(bacImage);

  useEffect(() => {
    // Change wish every 5 seconds
    const wishInterval = setInterval(() => {
      const wish = wishes[Math.floor(Math.random() * wishes.length)];
      setRandomWish(wish);
    }, 5000);

    // Change image every 8 seconds
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === bacImage ? teamImage : bacImage
      );
    }, 8000);

    return () => {
      clearInterval(wishInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-center w-full h-[90vh] overflow-hidden">
      {/* Background images with crossfade animation */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${bacImage})`,
          opacity: currentImage === bacImage ? 1 : 0,
        }}
      ></div>
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${teamImage})`,
          opacity: currentImage === teamImage ? 1 : 0,
        }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      {/* Content */}
      <div className="z-10 px-6 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 font-poppins animate-fadeIn">
          Welcome to <span className="text-yellow-400">Akiliedge Solutions</span>
        </h1>
        <p className="text-lg sm:text-2xl text-gray-200 mb-8 leading-relaxed animate-slideUp">
          {randomWish}
        </p>
        <Link
          to="/Services"
          className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
        >
          Explore Services
        </Link>
      </div>

      {/* Add modern font (Poppins) */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;