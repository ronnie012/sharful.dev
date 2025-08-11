import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A web app built with React and Node.js.',
      image: 'https://via.placeholder.com/300',
      link: '#',
      githubLink: '#',
      techStack: [<FaReact className="text-cyan-500 text-2xl" />, <FaNodeJs className="text-green-500 text-2xl" />, <FaJs className="text-yellow-500 text-2xl" />],
    },
    {
      title: 'Project Two',
      description: 'A responsive e-commerce platform.',
      image: 'https://via.placeholder.com/300',
      link: '#',
      githubLink: '#',
      techStack: [<FaHtml5 className="text-orange-500 text-2xl" />, <FaCss3Alt className="text-blue-500 text-2xl" />, <FaJs className="text-yellow-500 text-2xl" />],
    },
    {
      title: 'Project Three',
      description: 'A portfolio site with Tailwind CSS.',
      image: 'https://via.placeholder.com/300',
      link: '#',
      githubLink: '#',
      techStack: [<FaReact className="text-cyan-500 text-2xl" />, <FaHtml5 className="text-orange-500 text-2xl" />, <FaCss3Alt className="text-blue-500 text-2xl" />],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-transparent"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-100 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-xl shadow-lg overflow-hidden md:flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between min-h-[300px]">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-semibold text-gray-400">Tech Stack:</span>
                    <div className="flex items-center gap-2">
                      {project.techStack.map((icon, i) => (
                        <span key={i}>{icon}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href={project.link}
                    className="btn-custom-gradient-border group px-3 py-1 text-sm"
                  >
                    <span className="btn-content">
                      Live Demo
                    </span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-1"
                  >
                    <FaGithub className="text-xl" /> GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}