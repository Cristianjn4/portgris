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
            src="/G2.webp"
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
              src="/G3.webp"
              alt="Imagem 1"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <p className="text-black mt-2">
                🌙 Sou Gris Ayumi, designer e desenvolvedora front-end que acredita que o design é, 
                antes de tudo, uma forma de comunicação emocional. Gosto de pensar que cada projeto 
                é um espaço para contar histórias, despertar sensações e criar experiências que toquem 
                as pessoas — mesmo nas coisas simples, como um botão bem posicionado ou uma paleta que 
                respira calma..
              </p>
            </div>
          </div>

          {/* Card 3 */}
          
          <h2 className="text-xl text-center text-white font-bold">COMPETENCIAS </h2>

          <div className="bg-[#ffffff1d] rounded-xl overflow-hidden shadow-lg">

            <div className="p-6 text-center">
              <p className="text-white mt-2">
                Domino o ecossistema Adobe Creative Cloud (Photoshop, Illustrator, After Effects, Premiere, InDesign) e ferramentas de desenvolvimento web como JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, HTML5, CSS3, Git, APIs RESTful e GraphQL. Gosto de trabalhar com interfaces limpas, animações sutis e fluxos intuitivos — pequenos detalhes que fazem toda a diferença.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ffffff] rounded-xl overflow-hidden shadow-lg">
            <img
              src="G4.webp"
              alt="Imagem 2"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <p className="text-black mt-2">
                💡 Gosto de pensar o design como um equilíbrio entre propósito e emoção. Trabalho com identidade visual, branding, UI/UX, motion e marketing digital, sempre com o foco em construir narrativas visuais consistentes e humanas. Acredito que o visual ideal é aquele que se comunica com clareza, mas também deixa espaço para sentir.
              </p>
            </div>
          </div>

          {/* Card 4 */}
         <h2 className="text-xl text-center text-white font-bold">NOTAS </h2>

          <div className="bg-[#ffffff1d] rounded-xl overflow-hidden shadow-lg">

            <div className="p-6 text-center">
              <p className="text-white mt-2">
                Acredito em criar com propósito, sentir antes de executar e ouvir antes de desenhar. Meu trabalho é, em essência, uma tentativa de equilibrar estética, acessibilidade e afeto — porque pra mim, design é o espaço onde a técnica encontra o humano.
              </p>
            </div>
          </div>
        </div>

                      <p className="text-white text-8xl font-black mt-2 text-right">
                          THA<br/>NK-<br/>YOU
                      </p>
                      <img
              src="G6-1.webp"
              alt="Imagem 2"
              className="w-full object-cover rounded-t-xl"
            />

      </div>
    </AnimatedPage>
  );
}
