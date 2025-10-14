'use client';
import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0
  })
};

export default function PageSlideTransition({ children, direction }) {
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: 'tween', duration: 0.4 }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
