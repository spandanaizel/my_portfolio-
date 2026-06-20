import { motion } from 'framer-motion';
import { Code2, LayoutGrid, Server, BrainCircuit } from 'lucide-react';
import { services } from '@/data/aboutData';
import { ServiceItem } from '@/types';

const iconMap: Record<ServiceItem['icon'], JSX.Element> = {
  code: <Code2 size={26} />,
  layout: <LayoutGrid size={26} />,
  server: <Server size={26} />,
  brain: <BrainCircuit size={26} />,
};

const ServicesGrid = () => {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold text-whiteText">What I'm Doing</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.08 * i }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass-card rounded-xl2 p-5 shadow-glass transition-shadow hover:shadow-glow"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
              {iconMap[service.icon]}
            </div>
            <h3 className="mb-2 text-lg font-medium text-whiteText">{service.title}</h3>
            <p className="text-sm leading-relaxed text-secondary">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
