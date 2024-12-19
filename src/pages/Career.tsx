import React, { useState } from "react";
import axios from "axios";  // Add Axios for making HTTP requests
import careerImage from "../assets/career1.png";
import { useNavigate } from 'react-router-dom';

const Career: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialization: "",
    languages: [] as string[],
    
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      languages: checked
        ? [...prevData.languages, value]
        : prevData.languages.filter((lang) => lang !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Sending data to Flask backend
      const response = await axios.post("https://3139-62-24-118-61.ngrok-free.app/career/submit", formData);

      if (response.status === 201) {
        alert("Thank you for joining our community!");
        setFormData({ name: "", email: "", specialization: "", languages: [] });
        navigate('/Signup');
      }
    } catch (error) {
      console.error("Error submitting career form: ", error);
      alert("There was an error submitting your application. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f4c1c1] to-[#f8e4e4] p-4 md:p-8">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="hidden lg:block w-1/2 animate__animated animate__fadeInLeft">
          <img
            src={careerImage}
            alt="Team working together"
            className="rounded-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-lg animate__animated animate__zoomIn">
          <h2 className="text-3xl md:text-4xl font-bold text-[#972326] text-center mb-4 md:mb-6">
            Join Our Team
          </h2>
          {/* Conditionally hide description on smaller screens */}
          <p className="text-gray-700 text-center mb-6 md:mb-10 hidden md:block">
            Explore exciting career opportunities and become part of our developer community!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 md:mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#972326]"
                required
              />
            </div>
            <div className="mb-4 md:mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#972326]"
                required
              />
            </div>
            <div className="mb-4 md:mb-6">
              <label htmlFor="specialization" className="block text-gray-700 font-medium mb-2">
                Area of Specialization
              </label>
              <select
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#972326]"
                required
              >
                <option value="">Select specialization</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
                <option value="fullstack">Full Stack Development</option>
                <option value="data-science">Data Science</option>
                <option value="ai-ml">AI/ML</option>
              </select>
            </div>
            <div className="mb-4 md:mb-6">
              <label className="block text-gray-700 font-medium mb-2">Programming Languages</label>
              <div className="flex flex-wrap gap-4">
                {["JavaScript", "Python", "Java", "C++", "Ruby", "Go"].map((lang) => (
                  <label key={lang} className="flex items-center text-gray-700">
                    <input
                      type="checkbox"
                      name="languages"
                      value={lang}
                      onChange={handleLanguageChange}
                      className="mr-2 rounded border-gray-300 text-[#972326] focus:ring-[#972326]"
                    />
                    {lang}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#972326] text-white py-2 rounded hover:bg-[#a7353b] transition duration-200"
            >
              Join as Developer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
