import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
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
          Continued Education
        </motion.h2>
        <div className="border border-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">B.Sc. in CSE (Computer Science and Engineering) - <br /> Bangladesh Open University (CSE Department, DUET)</h3>
          <p className="text-gray-400 mb-4">January 2026 - December 2029</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Enrolled in the B.Sc. in CSE program and started to dive deep into the amazing world of Computer Science and Engineering.</li>
            <li>With the launch of this remarkable journey into the magical universe of Computers, Software, Applications, Data Structures, Algorithms, and Artificial Intelligence, I've dedicated myself to acquiring the precious knowledge in this field, from fundamentals to advanced levels. Learning new technologies and building something (apps, websites, software, etc.) with those that can address any problem is what thrills me at the core of my heart. That’s why Computer Science is the field of my choice, and I’m fully committed to making myself successful in this awesome field.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
