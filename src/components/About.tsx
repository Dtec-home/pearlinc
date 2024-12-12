import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Download CV
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
                Contact Me
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gray-700 rounded-lg overflow-hidden">
              {/* Add your image here */}
              <img 
                src="/api/placeholder/600/400"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;