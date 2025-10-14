'use client';
import { useEffect, useState } from 'react';

export default function ScrollBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Opacidade aumenta conforme scroll
  const opacity = Math.min(scrollY / 200, 0.2);

  return (
    <div
      className="fixed top-0 left-0 w-full pointer-events-none"
      style={{
        height: '80px',
        background: `rgba(255, 255, 255, ${opacity})`,
        zIndex: 10, // acima do conteúdo
      }}
    />
  );
}
