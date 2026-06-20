import { motion } from 'framer-motion';

const AboutIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl2 p-6 shadow-glass sm:p-8"
    >
      <h2 className="mb-4 text-2xl font-semibold text-whiteText sm:text-3xl">About Me</h2>
      <p className="mb-4 leading-relaxed text-secondary">
        I am Spandana, a fourth-year B.Tech Computer Science student passionate about full-stack
        development and building modern web applications.
      </p>
      <p className="mb-4 leading-relaxed text-secondary">
        I enjoy creating responsive and scalable applications using React.js, Node.js, Express.js,
        MongoDB, and Tailwind CSS.
      </p>
      <p className="leading-relaxed text-secondary">
        Currently seeking internship opportunities to grow as a software engineer.
      </p>
    </motion.div>
  );
};

export default AboutIntro;
