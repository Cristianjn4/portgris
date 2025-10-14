'use client';
import { motion } from 'framer-motion';

export default function AnimatedPage({ children, direction = 1 }) {
  const variants = {
    initial: (direction) => ({
      x: direction * 200,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: (direction) => ({
      x: direction * -200,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
