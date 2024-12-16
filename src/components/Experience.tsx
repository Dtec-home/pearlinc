import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
  current: boolean;
}

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { data: experiences = [], isLoading } = useQuery<Experience[]>({
    queryKey: ['experiences'],
    queryFn: () => axios.get('https://pearlbe.onrender.com/api/experiences/').then(res => res.data),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section ref={ref} className="py-20 bg-gray-900" id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-600" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-blue-500 mb-4">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.duration}</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full relative z-10 mx-auto md:mx-0">
                  <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;