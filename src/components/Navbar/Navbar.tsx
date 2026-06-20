import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navItems } from '@/data/navData';

const Navbar = () => {
  return (
    <nav className="glass-card sticky top-0 z-30 mb-6 rounded-xl2 px-2 py-2 shadow-glass">
      <ul className="flex items-center justify-center gap-1 sm:justify-start">
        {navItems.map((item) => (
          <li key={item.id} className="relative">
            <NavLink
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `relative z-10 block rounded-lg px-4 py-2 text-sm font-medium transition-colors sm:px-5 ${
                  isActive ? 'text-bg' : 'text-secondary hover:text-whiteText'
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
