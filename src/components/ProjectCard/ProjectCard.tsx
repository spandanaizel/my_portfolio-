import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6 }}
      className="group glass-card overflow-hidden rounded-xl2 shadow-glass"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-bg/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-accent/40 bg-card px-4 py-2 text-sm text-whiteText transition-all hover:bg-accent hover:text-bg hover:shadow-glow"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg transition-all hover:shadow-glow"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
      <div className="p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-accent">
          {project.category[0]}
        </span>
        <h3 className="mt-1 text-base font-medium text-whiteText">{project.title}</h3>
        <p className="mt-1 text-sm text-secondary">{project.stack}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
