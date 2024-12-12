import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

interface Skill {
  id: number;
  name: string;
  category: string;
  icon: string;
  proficiency: number;
}

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { data: skills = [] } = useQuery<Skill[]>({
    queryKey: ['skills'],
    queryFn: () => axios.get('http://localhost:8000/api/skills/').then(res => res.data),
  });

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
        
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, skillIdx) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: skillIdx * 0.1 }}
                    className="bg-gray-800 rounded-lg p-4"
                  >
                    <div className="flex items-center space-x-4">
                      <i className={`text-2xl text-blue-500 ${skill.icon}`} />
                      <div>
                        <h4 className="text-white font-medium">{skill.name}</h4>
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                          <div
                            className="bg-blue-500 h-2.5 rounded-full"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;