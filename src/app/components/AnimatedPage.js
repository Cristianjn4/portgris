'use client';
import { motion } from 'framer-motion';

export default function AnimatedPage({ children }) {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex justify-center"
    >
      <div className="w-full max-w-6xl px-4">{children}</div>
    </motion.div>
  );
}
