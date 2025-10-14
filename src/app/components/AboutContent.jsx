'use client';
import { useState, useEffect } from 'react';
import AnimatedPage from './AnimatedPage';
import { motion } from 'framer-motion';

export default function AboutContent() {
  const [mounted, setMounted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const handleMouseMove = (e, intensity = 20) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * intensity;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * intensity;
    setCursorPos({ x, y });
  };

  const handleMouseLeave = () => setCursorPos({ x: 0, y: 0 });

  return (
    <AnimatedPage>
      {/* Bloco principal */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-16 space-y-12 max-w-6xl mx-auto">
        <div className="flex items-center justify-center space-y-6 w-full sm:w-4/5 md:w-3/5">
          <motion.img
            src="/G2.webp"
            className="w-46 sm:w-64 md:w-72 object-cover bg-[#D9D9D9] rounded-full"
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 120 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: cursorPos.x, y: cursorPos.y }}
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white text-right leading-tight">
            QUEM <br /> É <br /> GRIS?
          </h1>
        </div>
        <p className="max-w-3xl text-gray-300 text-center px-2 sm:px-0">
          ✨ Gris Ayumi Mariano — designer e criadora multidisciplinar que une arte, tecnologia e emoção para transformar ideias em experiências visuais autênticas e sensíveis.
        </p>
      </div>

      {/* Grid de cards */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-16 space-y-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full max-w-6xl px-2 sm:px-0 items-stretch">

          {/* CARD 1 */}
          <motion.div
            className="z-10 relative bg-white rounded-xl p-6 overflow-visible shadow-md flex flex-col justify-between h-full"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0 }}
          >
            <p className="text-black mt-2 pr-[35%]">
              🌙 Sou Gris Ayumi, designer e desenvolvedora front-end que acredita que o design é,
              antes de tudo, uma forma de comunicação emocional. Gosto de pensar que cada projeto
              é um espaço para contar histórias, despertar sensações e criar experiências que toquem
              as pessoas — mesmo nas coisas simples, como um botão bem posicionado ou uma paleta que
              respira calma.
            </p>
            <motion.img
              src="/G3.webp"
              alt="Imagem 1"
              className="absolute right-[-150px] bottom-0 w-100 h-auto rounded-2xl object-cover"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            className="relative bg-[#ffffff1d] rounded-xl shadow-md flex flex-col justify-center items-center h-full p-5"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col justify-center items-center h-full w-full">
              <h2 className="text-xl text-center text-white font-bold mb-2">
                COMPETÊNCIAS
              </h2>
              <p className="text-white text-center">
                Domino o ecossistema Adobe Creative Cloud (Photoshop, Illustrator, After Effects, Premiere, InDesign) e ferramentas de desenvolvimento web como JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, HTML5, CSS3, Git, APIs RESTful e GraphQL. Gosto de trabalhar com interfaces limpas, animações sutis e fluxos intuitivos — pequenos detalhes que fazem toda a diferença.
              </p>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            className="relative z-10 bg-white rounded-xl p-6 overflow-visible shadow-md flex flex-col justify-between h-full"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl text-center sm:invisible text-black font-bold mb-2">
              DESIGN & EMOÇÃO
            </h2>
            <div className="flex flex-col justify-between h-full">
              <h2 className="text-xl text-center invisible sm:block text-black font-bold mb-2">
                DESIGN & EMOÇÃO
              </h2>
              <p className="text-black mt-2 pl-[35%]">
                💡 Gosto de pensar o design como um equilíbrio entre propósito e emoção. Trabalho com identidade visual, branding, UI/UX, motion e marketing digital, sempre com o foco em construir narrativas visuais consistentes e humanas. Acredito que o visual ideal é aquele que se comunica com clareza, mas também deixa espaço para sentir.
              </p>
            </div>
            <motion.img
              src="/G4.webp"
              alt="Imagem 2"
              className="absolute left-[-150px] bottom-0 w-100 h-auto rounded-2xl object-cover"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            className="relative bg-[#ffffff1d] rounded-xl shadow-md flex flex-col justify-center items-center h-full p-5"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col justify-center items-center h-full w-full">
              <h2 className="text-xl text-center text-white font-bold mb-2">
                NOTAS
              </h2>
              <p className="text-white text-center">
                Acredito em criar com propósito, sentir antes de executar e ouvir antes de desenhar. Meu trabalho é, em essência, uma tentativa de equilibrar estética, acessibilidade e afeto — porque pra mim, design é o espaço onde a técnica encontra o humano.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAIXA PROJETOS */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden my-24">
        <motion.img
          src="/G5.webp"
          alt="Projetos"
          className="absolute top-0 left-1/2 -translate-x-1/2 h-500px w-auto object-cover rounded-xl"
          initial={{ x: 0, y: 0 }}
          whileHover={{
            x: [0, 10, -10, 0],
            y: [0, -5, 5, 0],
            scale: 1.05
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: cursorPos.x, y: cursorPos.y }}
        />
        <h2 className="relative z-10 text-6xl sm:text-8xl md:text-9xl font-extrabold text-white text-center tracking-widest drop-shadow-lg">
          PROJETOS
        </h2>
      </div>

      {/* Final da página */}
      <div className="flex flex-col items-center mt-24 text-center">
        <p className="text-white text-8xl font-black mt-2">
          THA<br />NK-<br />YOU
        </p>
        <motion.img
          src="/G6-1.webp"
          alt="Imagem Final"
          className="w-full sm:w-[300px] object-cover rounded-t-xl mx-auto mt-8"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </AnimatedPage>
  );
}
