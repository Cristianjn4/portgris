'use client';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticlesOverlay from './components/ParticlesOverlay';
import AnimatedPage from './components/AnimatedPage';
import { motion } from 'framer-motion';

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="relative antialiased bg-[#0d0d0d] text-white min-h-screen overflow-hidden">
        <Header />
        <ParticlesOverlay />

        <main className="relative z-10 flex-1">
          <AnimatedPage>{children}</AnimatedPage>
        </main>

        <Footer />

        {/* === CÉU - movimento horizontal contínuo e lento === */}
        <div className="absolute top-10 lg:top-0 left-0 lg:w-[200%] w-[500%] h-auto overflow-hidden opacity-40 -z-20">
          <motion.div
            className="flex"
            animate={{ x: ['0%', '10%'] }}
            transition={{
              duration: 50, // bem lento, dá sensação de vento
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <img src="/sky.svg" alt="sky" className="w-1/2 h-auto" />
            <img src="/sky.svg" alt="sky repeat" className="w-1/2 h-auto" />
          </motion.div>
        </div>

        {/* === FUNDO - movimento horizontal contínuo, mais rápido === */}
        <div className="absolute bottom-0 left-0 lg:w-[200%] w-[600%] h-auto overflow-hidden -z-10">
          <motion.div
            className="flex"
            animate={{ x: ['0%', '-20%'] }}
            transition={{
              duration: 40, // mais rápido que o céu
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <img src="/backsvg.svg" alt="ground" className="w-1/2 h-auto" />
            <img src="/backsvg.svg" alt="ground repeat" className="w-1/2 h-auto" />
          </motion.div>
        </div>

        {/* === GRADIENTE BASE === */}
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-b from-transparent to-[#5e0b2f] -z-30" />
      </body>
    </html>
  );
}
