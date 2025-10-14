'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

const pageOrder = ['home', 'about', 'works', 'xet'];

export default function AnimatedPage({ children }) {
  const pathname = usePathname();
  const lastPathRef = useRef(pathname);

  // remove '/' inicial
  const cleanPath = pathname.replace(/^\/+/, '') || 'home';
  const cleanLast = lastPathRef.current.replace(/^\/+/, '') || 'home';

  const lastIndex = pageOrder.indexOf(cleanLast);
  const currentIndex = pageOrder.indexOf(cleanPath);

  const direction = currentIndex > lastIndex ? 1 : -1;

  lastPathRef.current = pathname;

  const variants = {
    hidden: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    enter: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}
