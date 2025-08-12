import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiStripe } from 'react-icons/si';
import projects from '../data/projects';

const techIcons = {
  'React': <FaReact className="text-cyan-500" />,
  'Node.js': <FaNodeJs className="text-green-500" />,
  'Express.js': <SiExpress className="text-gray-500" />,
  'MongoDB': <SiMongodb className="text-green-500" />,
  'Firebase': <SiFirebase className="text-yellow-500" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
  'Stripe': <SiStripe className="text-purple-500" />,
};

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }n        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => observer.observe(el));

    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="flex flex-col space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
                            className="project-card bg-gray-800 bg-opacity-10 border border-gray-700 rounded-xl overflow-hidden"
            >
              <div className={`flex flex-col md:flex-row ${index === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex}>
                        <img src={image} alt={`${project.title} ${imgIndex + 1}`} className="w-full h-96 object-cover" />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold mb-2">Main Technology Stack:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {project.mainTechnology.map((tech, techIndex) => (
                        <li key={techIndex} className="flex items-center bg-gray-700 bg-opacity-20 rounded-full px-4 py-2 text-base">
                          {React.cloneElement(techIcons[tech], { className: `${techIcons[tech].props.className} text-2xl mr-2` })} {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-blue-500 hover:border-gray-400 text-blue-500 hover:text-gray-400 font-bold py-2 px-4 rounded-lg"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-blue-500 hover:border-gray-400 text-blue-500 hover:text-gray-400 font-bold py-2 px-4 rounded-lg"
                      >
                        GitHub Repo
                      </a>
                    )}
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-block border border-blue-500 hover:border-gray-400 text-blue-500 hover:text-gray-400 font-bold py-2 px-4 rounded-lg"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;