import { useState } from 'react';
import ProjectCards from '../components/ProjectCard';
import { projects } from '../constants/data';
import { motion } from 'framer-motion'; 
import Navbar from '../components/Navbar'; // Import Navbar

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="bg-teal-100 py-16" id="projects">
      {/* <Navbar /> Add Navbar here */}
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-5xl font-bold text-center text-teal-600 mb-8">
          Projects
          <span className="block h-1 w-24 bg-teal-600 mx-auto mt-4"></span>
        </h2>

        {/* Description */}
        <div className="text-center text-gray-800 mb-10">
          <p className="text-lg max-w-2xl mx-auto">
            I have worked on a wide range of projects, from web applications to mobile apps. Here are some of my noteworthy projects.
          </p>
        </div>

        {/* Project Cards */}
        <div className="justify-center items-center flex  md:flex-row flex-col gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="transform transition-transform duration-300 hover:scale-105 md:w-1/3 w-full hover:shadow-lg bg-white rounded-lg overflow-hidden"
              onClick={() => handleOpenModal(project)}
            >
              <ProjectCards project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying project details */}
      {openModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 p-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              &#x2715; {/* Close icon */}
            </button>

            {/* Project Details */}
            <div>
              {/* Image Section - Full Width */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />

              {/* Title and Description */}
              <h2 className="text-3xl font-bold text-purple-600 mt-4">
                {selectedProject.title}
              </h2>
              <div className="mt-4">
                <ul className="flex flex-wrap space-x-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg text-gray-700 mt-2">
                {selectedProject.description}
              </p>

              {/* Buttons */}
              <div className="flex justify-start space-x-4 mt-6">
                <a
                  href={selectedProject.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition duration-300"
                >
                  View Live App
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
