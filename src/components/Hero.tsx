import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Full Stack Developer
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Specializing in MERN Stack, Django REST, and Cloud Solutions
        </motion.p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" className="text-white hover:text-gray-300">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-white hover:text-gray-300">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;