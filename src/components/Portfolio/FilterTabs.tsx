import { motion } from 'framer-motion';
import { ProjectCategory } from '@/types';

const categories: ProjectCategory[] = ['All', 'Web Development', 'React', 'Full Stack'];

interface Props {
  active: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
}

const FilterTabs = ({ active, onChange }: Props) => {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive ? 'text-bg' : 'border border-borderLight text-secondary hover:text-whiteText'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 -z-10 rounded-full bg-accent"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{cat}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterTabs;
