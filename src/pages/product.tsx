import { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: number;
}

const ProductsPage = () => {
  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration and inventory management.',
      category: 'Web Development',
      imageUrl: '/images/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/akiliedge/ecommerce-platform',
      year: 2023
    },
    {
      id: 2,
      title: 'IoT Smart Home System',
      description: 'Home automation system controlling lights, temperature and security via mobile app.',
      category: 'IoT',
      imageUrl: '/images/smart-home.jpg',
      technologies: ['Python', 'Raspberry Pi', 'AWS IoT', 'React Native'],
      liveUrl: 'https://iot.akiliedge.com',
      year: 2022
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      description: 'Digital solution for patient records, appointments and billing for clinics.',
      category: 'Software',
      imageUrl: '/images/healthcare.jpg',
      technologies: ['Angular', '.NET', 'SQL Server'],
      githubUrl: 'https://github.com/akiliedge/healthcare-system',
      year: 2023
    },
    {
      id: 4,
      title: 'Agricultural Analytics Dashboard',
      description: 'Data visualization platform for farmers to track crops and weather patterns.',
      category: 'AI Solutions',
      imageUrl: '/images/agriculture.jpg',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
      liveUrl: 'https://agri.akiliedge.com',
      year: 2021
    }
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(item => item.category))];

  // Filter projects
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#972326] mb-4">Our Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects delivering innovative solutions across various industries.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleFilterClick(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#972326] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                transform: `translateY(${animateCard.y}px)`,
                opacity: animateCard.opacity,
                transition: 'all 0.5s ease'
              }}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#972326] hover:text-[#7a1c1e] transition-colors"
                    >
                      <FiExternalLink className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <FiGithub className="mr-1" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-500">
              No projects found in this category
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;