'use client';
import './globals.css';
import Footer from './components/Footer';
import ScrollBackground from './components/ScrollBackground';

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="relative antialiased bg-[#0d0d0d] text-white">
  <ScrollBackground />
  <div className="relative">
    {children}
    <Footer />
  </div>
</body>
    </html>
  );
}
