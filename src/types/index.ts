export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: 'linkedin' | 'github' | 'instagram' | 'leetcode';
}

export interface ContactInfo {
  id: string;
  label: string;
  value: string;
  icon: 'mail' | 'mapPin' | 'cake' | 'phone';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'code' | 'layout' | 'server' | 'brain';
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  duration: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  duration?: string;
  points: string[];
}

export type ProjectCategory = 'All' | 'Web Development' | 'React' | 'Full Stack';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  stack: string;
  description: string;
  features?: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
