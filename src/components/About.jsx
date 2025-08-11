import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiReactrouter, SiFirebase, SiExpress, SiJsonwebtokens, SiMongodb, SiVercel, SiNetlify, SiVisualstudiocode, SiPostman } from 'react-icons/si';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-10 bg-transparent"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 mt-10 text-gray-100 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          I'm a passionate Full-Stack Developer with expertise in building modern, responsive web applications using the MERN stack. I love creating user-friendly solutions and exploring new technologies.
        </motion.p>
      </div>
    </motion.section>
  );
}