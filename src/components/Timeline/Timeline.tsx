import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { TimelineItem } from '@/types';

const Timeline = ({ items }: { items: TimelineItem[] }) => {
  return (
    <ol className="relative ml-3 border-l border-borderLight">
      {items.map((item, i) => (
        <motion.li
          key={item.id}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 * i }}
          className="mb-6 ml-6 last:mb-0"
        >
          <span className="absolute -left-[1.05rem] flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent ring-4 ring-bg">
            <GraduationCap size={16} />
          </span>
          <div className="glass-card rounded-xl2 p-4 shadow-glass">
            <span className="mb-1 inline-block rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
              {item.duration}
            </span>
            <h3 className="mt-2 text-base font-medium text-whiteText">{item.title}</h3>
            <p className="text-sm text-secondary">{item.organization}</p>
            {item.description && <p className="mt-2 text-sm text-secondary">{item.description}</p>}
          </div>
        </motion.li>
      ))}
    </ol>
  );
};

export default Timeline;
