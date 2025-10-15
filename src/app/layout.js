'use client';
'use client';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticlesOverlay from './components/ParticlesOverlay';
import AnimatedPage from './components/AnimatedPage';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const { scrollY } = useViewportScroll();

  // Faz a lua descer conforme o scroll
  const moonY = useTransform(scrollY, [200, 5500], [0, 400]); // ajuste conforme altura da página
  const moonOpacity = useTransform(scrollY, [5000, 0], [0.5, 1]); // opacidade levemente crescente

  return (
    <html lang="pt">

     <body className="relative antialiased bg-[#0d0d0d] text-white min-h-screen overflow-hidden">
        <Header />

        <main className="relative z-10 flex-1">
          <AnimatedPage>{children}</AnimatedPage>
        </main>

        <Footer />
        <ParticlesOverlay />


        {/* === LUA === */}
        <motion.img
          src="/lua.png"
          alt="Lua"
          className="fixed right-8 top-40 w-24 h-auto -z-20" // menor e mais à direita
          style={{ y: moonY, opacity: moonOpacity }}
        />

        {/* === CÉU - movimento horizontal contínuo e lento === */}
        <div className="absolute top-0 left-0 w-[200%] h-auto overflow-hidden opacity-40 -z-10">
          <motion.div
            className="flex"
            animate={{ x: ['0%', '10%'] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <img src="/sky.svg" alt="sky" className="w-1/2 h-auto" />
            <img src="/sky.svg" alt="sky repeat" className="w-1/2 h-auto" />
          </motion.div>
        </div>

        {/* === FUNDO - movimento horizontal contínuo, mais rápido === */}
        <div className="absolute bottom-0 left-0 w-[200%] h-auto overflow-hidden -z-10">
          <motion.div
            className="flex"
            animate={{ x: ['0%', '-20%'] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <img src="/backsvg.svg" alt="ground" className="w-1/2 h-auto" />
            <img src="/backsvg.svg" alt="ground repeat" className="w-1/2 h-auto" />
          </motion.div>
        </div>

        

      </body>
    </html>
  );
}
