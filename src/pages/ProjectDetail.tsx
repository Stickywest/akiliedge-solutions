// src/pages/ProjectDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Green Leaders Initiative",
    status: "Completed",
    description: "Promoting sustainable agriculture practices in rural areas.",
    imageUrl: "/src/assets/trees.avif",
    details: "A full description of the Green Leaders Initiative project...",
  },
  // other projects
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === parseInt(id || ""));

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-3xl font-semibold text-[#972326]">{project.title}</h2>
          <p className="text-gray-500 italic">{project.status}</p>
          <p className="mt-4 text-gray-700">{project.details}</p>
          <h3 className="mt-8 text-2xl font-semibold">Ways to Contribute</h3>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded shadow-md hover:bg-green-600 transition">
              Donate
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition">
              Offer Expertise
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded shadow-md hover:bg-yellow-600 transition">
              Suggest a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
