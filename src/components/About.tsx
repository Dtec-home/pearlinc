import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import mdkamauImage from '../assets/mdkamau.jpeg';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-800" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <p className="text-gray-300 text-lg">
              I'm a Full Stack Developer with expertise in modern web technologies.
              My journey in software development started with a passion for creating
              innovative solutions to complex problems.
            </p>
            <p className="text-gray-300 text-lg">
              Specializing in the MERN stack and Django REST Framework, I've built
              numerous applications ranging from e-commerce platforms to real-time
              collaboration tools. I'm particularly interested in cloud architecture
              and scalable systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://drive.google.com/file/d/1J-NmtW7fxHg70--ZqfTLzxWfeEAvrqS7/view?usp=drive_link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Contact Me
              </motion.a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src={mdkamauImage}
                alt="MD Kamau" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;