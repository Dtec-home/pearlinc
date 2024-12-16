import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen flex items-center justify-center bg-gray-900"
      id="hero"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500/20 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Full Stack Developer
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Building modern web applications with MERN Stack, Django REST, and Cloud Solutions
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.a
            href="https://github.com/Dtec-home"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github className="w-6 h-6 text-gray-300" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/kamau-david/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-gray-300" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-6 h-6 text-gray-300" />
          </motion.a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-block animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-300" />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;