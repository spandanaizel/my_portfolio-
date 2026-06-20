import { ContactInfo, SocialLink } from '@/types';

export const contactInfo: ContactInfo[] = [
  { id: 'email', label: 'Email', value: 'spandana.izel@example.com', icon: 'mail' },
  { id: 'location', label: 'Location', value: 'Hyderabad, India', icon: 'mapPin' },
  { id: 'birthday', label: 'Birthday', value: 'Aug 31, 2006', icon: 'cake' },
  { id: 'phone', label: 'Phone', value: '+91 8919662044', icon: 'phone' },
];

export const socialLinks: SocialLink[] = [
  { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/spandana-izel', icon: 'linkedin' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/spandana-izel', icon: 'github' },
  { id: 'leetcode', name: 'LeetCode', url: 'https://leetcode.com/spandana-izel', icon: 'leetcode' },
];
