import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { ExperienceItem } from '@/types';

const ExperienceList = ({ items }: { items: ExperienceItem[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 * i }}
          className="glass-card rounded-xl2 p-5 shadow-glass"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Briefcase size={18} />
            </span>
            <div>
              <h3 className="text-base font-medium text-whiteText">{item.title}</h3>
              <p className="text-sm text-secondary">
                {item.organization} {item.duration && `· ${item.duration}`}
              </p>
            </div>
          </div>
          <ul className="ml-1 list-disc space-y-1.5 pl-4 text-sm text-secondary">
            {item.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceList;
