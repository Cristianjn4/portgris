'use client';
import { useState, useEffect } from 'react';
import AnimatedPage from './AnimatedPage';

export default function AboutContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <AnimatedPage>
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-16 space-y-12 max-w-6xl mx-auto">
        {/* Bloco principal com imagem e título grande */}
        <div className="flex items-center justify-center space-y-6 w-full sm:w-4/5 md:w-3/5">
          <img
            src="/Group 2.png"
            className="w-46 sm:w-64 md:w-72 object-cover bg-[#D9D9D9] rounded-full"
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white text-right leading-tight">
            QUEM <br /> É <br /> GRIS?
          </h1>
        </div>

        {/* Texto de descrição */}
        <p className="max-w-3xl text-gray-300 text-right px-2 sm:px-0">
          Esta é a página About. Aqui você pode colocar uma descrição da empresa, projeto ou portfólio.
        </p>

        {/* Cards individualizados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl px-2 sm:px-0">
          {/* Card 1 */}
          <div className="bg-[#ffffff] rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://source.unsplash.com/random/400x300?sig=1"
              alt="Imagem 1"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-black">Card 2</h2>
              <p className="text-black mt-2">
                Descrição personalizada do card 1.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ffffff] rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://source.unsplash.com/random/400x300?sig=2"
              alt="Imagem 2"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-black">Card 2</h2>
              <p className="text-black mt-2">
                Descrição personalizada do card 2.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#ffffff] rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://source.unsplash.com/random/400x300?sig=3"
              alt="Imagem 3"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-black">Card 2</h2>
              <p className="text-black mt-2">
                Descrição personalizada do card 3.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#ffffff] rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://source.unsplash.com/random/400x300?sig=4"
              alt="Imagem 4"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-black">Card 2</h2>
              <p className="text-black mt-2">
                Descrição personalizada do card 4.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
