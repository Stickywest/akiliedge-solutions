// src/pages/CommunityProjects.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  status: string;
  description: string;
  imageUrl: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Green Leaders Initiative",
    status: "Completed",
    description: "Promoting sustainable agriculture practices in rural areas.",
    imageUrl: "/src/assets/trees.avif",
    details: "A full description of the Green Leaders Initiative project...",
  },
  {
    id: 2,
    title: "Water Conservation Drive",
    status: "Ongoing",
    description: "Improving water resources in drought-affected regions.",
    imageUrl: "/src/assets/water.webp",
    details: "A full description of the Water Conservation Drive project...",
  },
  {
    id: 3,
    title: "Renewable Energy in Schools",
    status: "Upcoming",
    description: "Implementing solar panels in schools to reduce energy costs.",
    imageUrl: "/src/assets/solar.jpg",
    details: "A full description of the Renewable Energy in Schools project...",
  },
];

const CommunityProjects: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-[#972326] mb-10">Community-Based Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#972326] mb-2">{project.title}</h3>
              <p className="text-gray-500 italic">{project.status}</p>
              <p className="mt-4 text-gray-700">{project.description}</p>
              <Link
                to={`/community-projects/${project.id}`}
                className="inline-block mt-6 px-6 py-2 bg-[#fdd910] text-[#972326] font-semibold rounded-full shadow hover:bg-yellow-500 transition duration-300"
              >
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityProjects;
