import { motion } from 'framer-motion';
import { Mail, MapPin, Cake, Phone } from 'lucide-react';
import { contactInfo } from '@/data/sidebarData';
import { ContactInfo } from '@/types';
import SocialLinks from '@/components/SocialLinks/SocialLinks';

const iconMap: Record<ContactInfo['icon'], JSX.Element> = {
  mail: <Mail size={16} />,
  mapPin: <MapPin size={16} />,
  cake: <Cake size={16} />,
  phone: <Phone size={16} />,
};

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card w-full rounded-xl2 p-6 shadow-glass lg:sticky lg:top-6 lg:w-[320px]"
    >
      {/* Profile */}
      <div className="flex flex-col items-center text-center">
        <motion.img
          src="/profile.svg"
          alt="Spandana (Izel)"
          className="h-24 w-24 rounded-full border-2 border-accent/60 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        />
        <h1 className="mt-4 text-xl font-semibold text-whiteText">Spandana (Izel)</h1>
        <span className="mt-2 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
          Full Stack Developer
        </span>
      </div>

      <hr className="my-6 border-borderLight" />

      {/* Contact Info */}
      <ul className="flex flex-col gap-4">
        {contactInfo.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i }}
            className="flex items-center gap-3 rounded-lg border border-borderLight bg-card/60 p-3 transition-colors hover:border-accent/40"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              {iconMap[item.icon]}
            </span>
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-wide text-secondary">{item.label}</p>
              <p className="truncate text-sm text-whiteText">{item.value}</p>
            </div>
          </motion.li>
        ))}
      </ul>

      <hr className="my-6 border-borderLight" />

      <SocialLinks />
    </motion.aside>
  );
};

export default Sidebar;
