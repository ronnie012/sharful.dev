import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaUser, FaComment, FaPaperPlane } from 'react-icons/fa'; // Import icons

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-8xl mx-auto px-6"> {/* This div now wraps the h2, p, and the main content div */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-100 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Feel free to reach out via email or the form below.
        </motion.p>
        <div className="border border-gray-700 rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Main content div with grid */}
          {/* Left Column: Contact Info */}
          <div className="md:pr-4 space-y-6"> {/* Added padding-right for spacing and space-y for vertical spacing */}
            <h3 className="text-3xl font-bold mb-4 text-gray-100">Get in Touch</h3>
            <p>Have queries or want to get your tasks done? Just send <br/> me a message and I'll be back to you as soon as possible.</p>
            <div className="flex flex-col">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-500 text-3xl pt-1" />
                <span className="text-gray-100">Email:</span>
              </div>
              <span className="text-gray-300 text-lg mt-2 ml-10">m.sharful.i247@gmail.com</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-green-500 text-3xl pt-1" />
                <span className="text-gray-100">Phone:</span>
              </div>
              <span className="text-gray-300 text-lg mt-2 ml-10">+880 187 065 0965</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-green-500 text-3xl pt-1" />
                <span className="text-gray-100">WhatsApp:</span>
              </div>
              <span className="text-gray-300 text-lg mt-2 ml-10">+880 187 065 0965</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <form className="max-w-lg mx-auto space-y-6">
              <h3 className="text-3xl font-bold mb-4 text-gray-100">Send Me a Message </h3>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="relative ">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-4 pl-10 rounded-xl border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-4 pl-10 rounded-xl border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="relative">
                  <FaComment className="absolute left-3 top-4 text-gray-400 text-xl" />
                  <textarea
                    placeholder="Enter your message"
                    className="w-full p-4 pl-10 rounded-xl border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                  ></textarea>
                </div>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full btn-custom-gradient-border group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <span className="btn-content flex items-center justify-center gap-4">
                  Send Message <FaPaperPlane className="transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:translate-x-2 group-hover:-translate-y-2" />
                </span>
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}