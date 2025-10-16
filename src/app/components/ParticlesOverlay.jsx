'use client';
import { useEffect, useState } from 'react';

export default function ParticlesOverlay() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Cria partículas aleatórias
    const newParticles = Array.from({ length: 50 }).map(() => ({
      id: Math.random(),
      left: Math.random() * 100, // posição horizontal em %
      top: Math.random() * 100,  // posição vertical em %
      size: Math.random() * 4 + 1, // tamanho 1px a 5px
      speed: Math.random() * 3 + 2, // duração da animação
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
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
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
