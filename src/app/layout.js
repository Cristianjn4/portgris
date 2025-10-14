'use client';
import './globals.css';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import PageSlideTransition from './components/AnimatedPage';
import Footer from './components/Footer';
import Header from './components/Header';

function ParticlesOverlay() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map(() => ({
      id: Math.random(),
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.speed}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const lastPathRef = useRef(pathname);
  const [direction, setDirection] = useState(1);

  // Atualiza a direção de animação
  useEffect(() => {
    const pageOrder = ['home', 'about', 'works', 'xet'];
    const cleanPath = pathname.replace(/^\/+/, '') || 'home';
    const cleanLast = lastPathRef.current.replace(/^\/+/, '') || 'home';

    const lastIndex = pageOrder.indexOf(cleanLast);
    const currentIndex = pageOrder.indexOf(cleanPath);

    setDirection(currentIndex >= lastIndex ? 1 : -1);
    lastPathRef.current = pathname;
  }, [pathname]);

  return (
    <html lang="pt">
      <body className="relative antialiased bg-[#0d0d0d] text-white min-h-screen">
        <ParticlesOverlay />
        <Header /> {/* Sempre fixo */}

        <AnimatePresence mode="wait">
          <PageSlideTransition key={pathname} direction={direction}>
            <main className="relative z-10 min-h-screen flex flex-col">
              {children} {/* Aqui vai o conteúdo de cada página */}
            </main>
          </PageSlideTransition>
        </AnimatePresence>

        <Footer /> {/* Sempre fixo */}
      </body>
    </html>
  );
}
