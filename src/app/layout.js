'use client';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticlesOverlay from './components/ParticlesOverlay';
import AnimatedPage from './components/AnimatedPage';

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="relative antialiased bg-[#0d0d0d] text-white min-h-screen">
        <Header />
        <ParticlesOverlay />

        <main className="relative z-10 flex-1">
          <AnimatedPage>{children}</AnimatedPage>
        </main>

        <Footer />
      </body>
    </html>
  );
}
