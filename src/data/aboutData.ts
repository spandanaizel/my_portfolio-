import { ServiceItem, Skill } from '@/types';

export const services: ServiceItem[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'Building scalable web applications using React and Node.js.',
    icon: 'code',
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Creating modern responsive user interfaces.',
    icon: 'layout',
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Developing REST APIs and database systems.',
    icon: 'server',
  },
  {
    id: 'learning',
    title: 'Continuous Learning',
    description: 'Improving skills through projects and problem solving.',
    icon: 'brain',
  },
];

export const skills: Skill[] = [
  { id: 'html', name: 'HTML', level: 95 },
  { id: 'css', name: 'CSS', level: 90 },
  { id: 'javascript', name: 'JavaScript', level: 88 },
  { id: 'typescript', name: 'TypeScript', level: 80 },
  { id: 'react', name: 'React', level: 90 },
  { id: 'node', name: 'Node.js', level: 85 },
  { id: 'express', name: 'Express', level: 82 },
  { id: 'mongodb', name: 'MongoDB', level: 80 },
  { id: 'mysql', name: 'MySQL', level: 75 },
  { id: 'tailwind', name: 'Tailwind CSS', level: 92 },
  { id: 'git', name: 'Git', level: 85 },
  { id: 'github', name: 'GitHub', level: 85 },
  { id: 'python', name: 'Python', level: 78 },
  { id: 'c', name: 'C', level: 70 },
];
