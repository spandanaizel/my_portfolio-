import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const cards = [
  { id: 'email', icon: <Mail size={20} />, label: 'Email', value: 'spandana.izel@example.com' },
  { id: 'phone', icon: <Phone size={20} />, label: 'Phone', value: '+91 98765 43210' },
  { id: 'location', icon: <MapPin size={20} />, label: 'Location', value: 'Hyderabad, India' },
];

const ContactCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {cards.map((card, i) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 * i, duration: 0.4 }}
          whileHover={{ y: -4 }}
          className="glass-card rounded-xl2 p-5 text-center shadow-glass"
        >
          <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
            {card.icon}
          </div>
          <p className="text-xs uppercase tracking-wide text-secondary">{card.label}</p>
          <p className="mt-1 text-sm text-whiteText">{card.value}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactCards;
