import { motion } from 'framer-motion';
import { skills } from '@/data/aboutData';

const Skills = () => {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold text-whiteText">My Skills</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skills.map((skill, i) => (
          <div key={skill.id}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-whiteText">{skill.name}</span>
              <span className="text-secondary">{skill.level}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-card">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, delay: 0.05 * i, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
