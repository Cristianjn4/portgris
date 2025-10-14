'use client';
import { useEffect, useState } from 'react';

export default function ScrollBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Faixa bem sutil: opacidade máxima 0.05
  const opacity = Math.min(scrollY / 500, 0.05);

  return (
    <div
      className="fixed top-0 left-0 w-full pointer-events-none transition-opacity duration-300"
      style={{
        height: '80px',
        background: `rgba(255, 255, 255, ${opacity})`,
        zIndex: 10,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    />
  );
}
