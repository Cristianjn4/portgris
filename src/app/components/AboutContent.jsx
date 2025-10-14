'use client';
import { useState, useEffect } from 'react';
import AnimatedPage from './AnimatedPage';

export default function AboutContent() {
  const [mounted, setMounted] = useState(false);

  // Garante renderização do conteúdo antes da animação
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <AnimatedPage>
      <div className="flex flex-col items-center justify-start px-4 py-16 space-y-12">
        <h1 className="text-4xl font-bold text-white text-center">Sobre Nós</h1>
        <p className="max-w-2xl text-center text-gray-300">
          Esta é a página About. Aqui você pode colocar uma descrição da empresa, projeto ou portfólio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={`https://source.unsplash.com/random/400x300?sig=${i + 1}`}
                alt={`Imagem ${i + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">Card {i + 1}</h2>
                <p className="text-gray-400 mt-2">
                  Descrição do card {i + 1}. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}
