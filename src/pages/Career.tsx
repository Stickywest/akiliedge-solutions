import React, { useState } from "react";
import { db } from "../components/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Career: React.FC = () => {
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
      await addDoc(collection(db, "careers"), formData);
      alert("Thank you for joining our community!");
      setFormData({ name: "", email: "", specialization: "", languages: [] });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error submitting your application. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f4c1c1] to-[#f8e4e4] p-8">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-8 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="hidden lg:block w-1/2 animate__animated animate__fadeInLeft">
          <img
            src="/akiliedge-solutions/src/assets/career1.png"
            alt="Team working together"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg animate__animated animate__zoomIn">
          <h2 className="text-4xl font-bold text-[#972326] text-center mb-6">Join Our Team</h2>
          <p className="text-gray-700 text-center mb-10">
            Explore exciting career opportunities and become part of our developer community!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
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
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
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
            <div className="mb-6">
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
            <div className="mb-6">
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
