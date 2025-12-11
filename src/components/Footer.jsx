import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <motion.footer
      className="py-8 bg-transparent text-white text-center border-t border-gray-200 border-opacity-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto pl-4 pr-4 flex items-center justify-between">
        <p className="text-2xl font-bold mr-36">&lt;Sharful.Dev/&gt;</p>
        <div className="flex gap-40 flex-cl items-centr">
          <p className="text-lg mr-12 mb-0">© 2026 Sharful. All rights reserved.</p>
          <SocialLinks />
        </div>
        <div className="w-[150px]"></div> {/* Placeholder to balance the left title */}
      </div>
    </motion.footer>
  );
}