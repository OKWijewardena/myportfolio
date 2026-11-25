import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

// Fade-up on scroll. Wraps (not replaces) the target element so its own CSS
// hover transforms keep working.
export const Reveal = ({ children, delay = 0, y = 32, x = 0, fill = false, className = '', ...rest }) => (
  <motion.div
    className={`${fill ? 'reveal-fill ' : ''}${className}`.trim()}
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease }}
    {...rest}
  >
    {children}
  </motion.div>
);

// Staggered hero entrance helpers
export const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
