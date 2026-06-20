import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageTransition from '@/components/Common/PageTransition';
import FilterTabs from '@/components/Portfolio/FilterTabs';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { projects } from '@/data/projectsData';
import { ProjectCategory } from '@/types';

const Portfolio = () => {
  const [active, setActive] = useState<ProjectCategory>('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.category.includes(active));
  }, [active]);

  return (
    <PageTransition>
      <div className="glass-card rounded-xl2 p-6 shadow-glass sm:p-8">
        <h2 className="mb-2 text-2xl font-semibold text-whiteText sm:text-3xl">Portfolio</h2>
        <p className="mb-6 text-secondary">A selection of projects I've built and shipped.</p>

        <FilterTabs active={active} onChange={setActive} />

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
