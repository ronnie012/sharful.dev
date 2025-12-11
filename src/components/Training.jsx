import { motion } from 'framer-motion';

const Training = () => {
  return (
    <motion.section
      id="training"
      className="py-8 bg-transparent"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-8xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-100 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Completed Training
        </motion.h2>
        <div className="border border-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Complete Web Development Bootcamp - Programming Hero</h3>
          <p className="text-gray-400 mb-4">December 2024 - August 2025</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Accomplished full-stack development with a focus on MERN stack technologies.</li>
            <li>Gained expertise in HTML5, CSS3, Tailwind CSS, Daisy UI, JavaScript (ES6), React, React Router, Firebase, Node.js, Express.js, CRUD operations, MongoDB, JWT, Axios, Tanstack Query, Stripe integration, etc., via building real-world projects.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Training;
