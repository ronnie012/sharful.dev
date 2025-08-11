import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

export default function About() {
  return (
    <motion.section
      id="about"
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
          About Me
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          I'm a passionate Full-Stack Developer with expertise in building modern, responsive web applications using the MERN stack. I love creating user-friendly solutions and exploring new technologies.
        </motion.p>
        <h3 className="text-2xl font-semibold mb-6 text-gray-100 text-center">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FaHtml5 className="text-orange-500 text-4xl" />, name: 'HTML5' },
            { icon: <FaCss3Alt className="text-blue-500 text-4xl" />, name: 'CSS3' },
            { icon: <FaJs className="text-yellow-500 text-4xl" />, name: 'JavaScript' },
            { icon: <FaReact className="text-cyan-500 text-4xl" />, name: 'React' },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center space-x-3"
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
}