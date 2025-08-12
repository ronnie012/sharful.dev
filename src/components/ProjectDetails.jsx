import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import projects from '../data/projects';
import { FaReact, FaNodeJs, FaGithub, FaGlobe } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiStripe } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';

const techIcons = {
  'React': <FaReact className="text-cyan-500" />,
  'Node.js': <FaNodeJs className="text-green-500" />,
  'Express.js': <SiExpress className="text-gray-500" />,
  'MongoDB': <SiMongodb className="text-green-500" />,
  'Firebase': <SiFirebase className="text-yellow-500" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
  'Stripe': <SiStripe className="text-purple-500" />,
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="pt-12 pb-20 bg-transparent text-white">
      <div className="container mx-auto px-4">
        <Link to="/#projects" className="text-blue-500 hover:underline mb-4 block">
          &larr; Back to Projects
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-96">
            <img
              src={project.images[0]}
              alt={project.title}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-400 mb-6">{project.description}</p>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Main Technology Stack</h3>
              <ul className="flex flex-wrap gap-2">
                {project.mainTechnology.map((tech, index) => (
                  <li key={index} className="flex items-center bg-gray-700 rounded-full px-4 py-2 text-base">
                    {React.cloneElement(techIcons[tech], { className: `${techIcons[tech].props.className} text-2xl mr-2` })} {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Challenges Faced</h3>
              <p className="text-gray-400">{project.challenges}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Future Plans</h3>
              <p className="text-gray-400">{project.futurePlans}</p>
            </div>
            <div className="flex space-x-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-custom-gradient-border flex items-center px-3 py-1 gap-1 group"
              >
                <FaGlobe className="text-lg" /> {/* Made icon slightly larger */}
                <span className="btn-content">Live Demo</span>
                <FiArrowRight className="text-2xl transition-transform duration-300 group-hover:-rotate-45" /> {/* Made icon slightly larger and added hover effect */}
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-400 hover:border-blue-500 text-gray-400 hover:text-blue-500 font-bold flex items-center px-3 py-1 rounded-xl gap-1"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;



