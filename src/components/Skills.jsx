import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiReactrouter, SiFirebase, SiExpress, SiJsonwebtokens, SiMongodb, SiVercel, SiNetlify, SiVisualstudiocode, SiPostman, SiVite } from 'react-icons/si';

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-10 bg-transparent"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl  font-bold mb-12 text-gray-100 text-center">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FaHtml5 className="text-orange-500 text-6xl" />, name: 'HTML5' },
            { icon: <FaCss3Alt className="text-blue-500 text-6xl" />, name: 'CSS3' },
            { icon: <SiTailwindcss className="text-cyan-400 text-6xl" />, name: 'Tailwind CSS' },
            { icon: <FaJs className="text-yellow-500 text-6xl" />, name: 'JavaScript (ES6)' },
            { icon: <FaReact className="text-cyan-500 text-6xl" />, name: 'React' },
            { icon: <p className="text-purple-500 text-6xl font-bold">D</p>, name: 'Daisy UI' },
            { icon: <SiReactrouter className="text-red-500 text-6xl" />, name: 'React Router' },
            { icon: <SiFirebase className="text-orange-500 text-6xl" />, name: 'Firebase' },
            { icon: <FaNodeJs className="text-green-500 text-6xl" />, name: 'Node.js' },
            { icon: <SiExpress className="text-gray-500 text-6xl" />, name: 'Express.js' },
            { icon: <SiJsonwebtokens className="text-purple-500 text-6xl" />, name: 'JWT' },
            { icon: <SiMongodb className="text-green-500 text-6xl" />, name: 'MongoDB' },
            { icon: <SiVercel className="text-white text-6xl" />, name: 'Vercel' },
            { icon: <SiNetlify className="text-cyan-500 text-6xl" />, name: 'Netlify' },
            { icon: <SiVisualstudiocode className="text-blue-500 text-6xl" />, name: 'VS Code' },
            { icon: <FaGitAlt className="text-red-500 text-6xl" />, name: 'Git' },
            { icon: <FaGithub className="text-white text-6xl" />, name: 'GitHub' },
            { icon: <SiPostman className="text-orange-500 text-6xl" />, name: 'Postman' },
            { icon: <SiVite className="text-blue-400 text-6xl" />, name: 'Vite' }
            /* { icon: <p className="text-blue-500 text-6xl font-bold">S</p>, name: 'Surge' }, */
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="border border-gray-800 rounded-lg p-4 flex items-center justify-center space-x-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              {skill.icon}
              <span className="text-lg font-medium text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
