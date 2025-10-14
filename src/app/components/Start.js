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
            className="mx-auto h-48 rounded-full bg-white shadow-lg"
            src="/STK-20251013-WA0064.webp"
            alt="Imagem de boas-vindas"
          />
        </RevealRight>
      </div>
    </main>
  );
}
