'use client';
import { motion } from 'framer-motion';

export default function RevealRight({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}       // começa invisível e deslocado
      whileInView={{ opacity: 1, x: 0 }}    // entra suave
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }} // só anima ao rolar, não ao carregar
    >
      {children}
    </motion.div>
  );
}
