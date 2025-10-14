'use client';
import { useEffect, useState } from 'react';

export default function ScrollBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Opacidade sutil, aumenta com scroll, mas volta ao topo
  const opacity = Math.min(scrollY / 500, 0.05);

  return (
    <div
      className="fixed top-0 left-0 w-full pointer-events-none transition-opacity duration-200"
      style={{
        height: '80px',
        background: `rgba(255, 255, 255, ${opacity})`,
        zIndex: 20,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    />
  );
}
