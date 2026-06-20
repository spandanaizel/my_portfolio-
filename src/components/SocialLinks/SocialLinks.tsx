import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { socialLinks } from '@/data/sidebarData';
import { SocialLink } from '@/types';

const iconMap: Record<SocialLink['icon'], JSX.Element> = {
  linkedin: <FaLinkedinIn />,
  github: <FaGithub />,
  instagram: <FaInstagram />,
  leetcode: <SiLeetcode />,
};

const SocialLinks = () => {
  return (
    <ul className="flex items-center justify-center gap-3">
      {socialLinks.map((link, i) => (
        <motion.li
          key={link.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i, duration: 0.4 }}
        >
          <motion.a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            whileHover={{ y: -4, scale: 1.08, boxShadow: '0 0 16px rgba(244,196,48,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-borderLight bg-card text-whiteText transition-colors hover:text-accent"
          >
            {iconMap[link.icon]}
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
};

export default SocialLinks;
