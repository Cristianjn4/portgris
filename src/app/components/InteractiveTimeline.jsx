'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from './AnimatedPage';

export default function AboutContent() {
  const [mounted, setMounted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  const handleMouseMove = (e, intensity = 20) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * intensity;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * intensity;
    setCursorPos({ x, y });
  };

  const handleMouseLeave = () => setCursorPos({ x: 0, y: 0 });

  const timelineItems = [
    { title: 'Flowbite Library v1.0.0', date: 'Dec 2, 2021', description: 'Get started with dozens of web components.', image: '/G3.webp' },
    { title: 'Flowbite Library v1.2.0', date: 'Dec 23, 2021', description: 'New interactive elements added.', image: '/G4.webp' },
    { title: 'Flowbite Library v1.3.0', date: 'Jan 5, 2022', description: 'Bug fixes and enhancements.', image: '/G5.webp' },
  ];

  const handleCircleClick = (index) => {
    setActiveIndex(index);
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 400);
  };

  return (
    <AnimatedPage>
      {/* Header */}
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
          <motion.div className="z-10 relative bg-white rounded-xl p-6 overflow-visible shadow-md flex flex-col justify-between h-full" variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0 }}>
            <p className="text-black mt-2 pr-[35%]">
🌙 Sou Gris Ayumi, designer e desenvolvedora front-end que acredita que o design é, antes de tudo, uma forma de comunicação emocional. Gosto de pensar que cada projeto é um espaço para contar histórias, despertar sensações e criar experiências que toquem as pessoas — mesmo nas coisas simples, como um botão bem posicionado ou uma paleta que respira calma.
            </p>
            <motion.img src="/G3.webp" alt="Imagem 1" className="absolute right-[-150px] bottom-0 w-100 h-auto rounded-2xl object-cover" initial={{ opacity: 0, y: 20 }} whileHover={{ scale: 1.05 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} />
          </motion.div>

          {/* CARD 2 */}
          <motion.div className="relative bg-[#ffffff1d] rounded-xl shadow-md flex flex-col justify-center items-center h-full p-5" variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="flex flex-col justify-center items-center h-full w-full">
              <h2 className="text-xl text-center text-white font-bold mb-2">COMPETÊNCIAS</h2>
              <p className="text-white text-center">
Domino o ecossistema Adobe Creative Cloud (Photoshop, Illustrator, After Effects, Premiere, InDesign) e ferramentas de desenvolvimento web como JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, HTML5, CSS3, Git, APIs RESTful e GraphQL. Gosto de trabalhar com interfaces limpas, animações sutis e fluxos intuitivos — pequenos detalhes que fazem toda a diferença.
              </p>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div className="relative z-10 bg-white rounded-xl p-6 overflow-visible shadow-md flex flex-col justify-between h-full" variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.3 }}>
            <h2 className="text-xl text-center invisible sm:block text-black font-bold mb-2">DESIGN & EMOÇÃO</h2>
            <p className="text-black mt-2 pl-[35%]">
💡 Gosto de pensar o design como um equilíbrio entre propósito e emoção. Trabalho com identidade visual, branding, UI/UX, motion e marketing digital, sempre com o foco em construir narrativas visuais consistentes e humanas. Acredito que o visual ideal é aquele que se comunica com clareza, mas também deixa espaço para sentir.
            </p>
            <motion.img src="/G4.webp" alt="Imagem 2" className="absolute left-[-150px] bottom-0 w-100 h-auto rounded-2xl object-cover" initial={{ opacity: 0, y: 20 }} whileHover={{ scale: 1.05 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} />
          </motion.div>

          {/* CARD 4 */}
          <motion.div className="relative bg-[#ffffff1d] rounded-xl shadow-md flex flex-col justify-center items-center h-full p-5" variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.3 }}>
            <h2 className="text-xl text-center text-white font-bold mb-2">NOTAS</h2>
            <p className="text-white text-center">
Acredito em criar com propósito, sentir antes de executar e ouvir antes de desenhar. Meu trabalho é, em essência, uma tentativa de equilibrar estética, acessibilidade e afeto — porque pra mim, design é o espaço onde a técnica encontra o humano.
            </p>
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
          whileHover={{ x: [0, 10, -10, 0], y: [0, -5, 5, 0], scale: 1.05 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'loop' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: cursorPos.x, y: cursorPos.y }}
        />
        <h2 className="relative z-10 text-6xl sm:text-8xl md:text-9xl font-extrabold text-white text-center tracking-widest drop-shadow-lg">CARREIRA</h2>
      </div>

      {/* TIMELINE HORIZONTAL */}
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-8 py-16 flex flex-col items-center">
        {/* Linha horizontal fina */}
        <div className="relative w-full h-1 bg-pink-300 rounded-full">
          <div
            className="absolute top-0 left-0 h-1 bg-pink-500 rounded-full"
            style={{
              width: `${activeIndex !== null ? ((activeIndex + 1) / timelineItems.length) * 100 : 0}%`,
              transition: 'width 0.4s',
            }}
          />
        </div>

        {/* Círculos */}
        <div className="flex justify-between w-full mt-0 relative">
          {timelineItems.map((item, index) => {
            const isActive = activeIndex !== null && index <= activeIndex;

            return (
              <div key={index} className="flex flex-col items-center relative">
                {/* Título acima da bolinha */}
                <span className="mb-2 text-white font-bold">{item.title}</span>

                {/* Bolinha */}
                <motion.button
                  onClick={() => handleCircleClick(index)}
                  className="w-8 h-8 rounded-full border-2 border-pink-500 flex items-center justify-center relative"
                  style={{ backgroundColor: isActive ? '#f472b6' : 'transparent' }}
                  whileHover={{ scale: 1.2 }}
                >
                  {/* Estrelinhas */}
                  {isActive && (
                    <>
                      {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                          initial={{ x: 0, y: 0, opacity: 1 }}
                          animate={{
                            x: [0, (Math.random() - 0.5) * 60],
                            y: [0, (Math.random() - 0.5) * 60],
                            opacity: [1, 0],
                          }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                      ))}
                    </>
                  )}
                </motion.button>

                {/* Imagem abaixo da bolinha */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="mt-3 w-24 h-24 object-cover rounded-xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Popup */}
      {showPopup && activeIndex !== null && (
        <motion.div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="bg-white rounded-xl p-8 max-w-md relative">
            <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 text-black font-bold text-xl">X</button>
            <h2 className="text-xl font-bold mb-2">{timelineItems[activeIndex].title}</h2>
            <time className="block mb-2 text-gray-500">{timelineItems[activeIndex].date}</time>
            <p className="text-gray-700">{timelineItems[activeIndex].description}</p>
          </div>
        </motion.div>
      )}

      {/* Final da página */}
      <div className="flex flex-col items-center mt-24 text-center">
        <p className="text-white text-8xl font-black mt-2">THA<br />NK-<br />YOU</p>
        <motion.img src="/G6-1.webp" alt="Imagem Final" className="w-full sm:w-[300px] object-cover rounded-t-xl mx-auto mt-8" initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, ease: 'easeOut' }} />
      </div>
    </AnimatedPage>
  );
}

