'use client';
import RevealRight from './RevealRight';

export default function Start() {
  return (
    <main className="text-white p-8 flex flex-col items-center justify-center text-center">
      <div className="w-5/6 max-w-lg">
        <RevealRight>
          <p className="font-bold text-xl mb-2">SEJA BEM-VINDO(A)</p>
        </RevealRight>

        <RevealRight delay={0.2}>
          <p className="mb-8">
            Por gentileza, escolha uma aba acima e comece a navegar.
          </p>
        </RevealRight>

        <RevealRight delay={0.4}>
        <img
  className="mx-auto h-48 w-48 rounded-full bg-white shadow-lg shadow-pink-500/30 
             transform transition-transform duration-500 
             hover:scale-105 hover:shadow-pink-500/70 
             animate-[float_3s_ease-in-out_infinite]"
  src="/STK-20251013-WA0064.webp"
  alt="Imagem de boas-vindas"
/>
        </RevealRight>
      </div>
    </main>
  );
}
