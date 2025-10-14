'use client';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticlesOverlay from './components/ParticlesOverlay';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';
import AnimatedPage from './components/AnimatedPage';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const lastPathRef = useRef(pathname);
  const [direction, setDirection] = useState(1);

  const pageOrder = ['home', 'about', 'works', 'xet']; // ordem das páginas

  useEffect(() => {
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
        <Header />
        <ParticlesOverlay />

        <AnimatePresence mode="wait">
          <AnimatedPage key={pathname} direction={direction}>
            <main className="relative z-10 flex-1">{children}</main>
          </AnimatedPage>
        </AnimatePresence>

        <Footer />
      </body>
    </html>
  );
}
