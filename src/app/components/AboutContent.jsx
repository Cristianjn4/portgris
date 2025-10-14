'use client';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    { title: 'Início', date: '2018', 
      description: 'Em 2018, aos 13 anos, tive minha primeira experiência profissional no estúdio do DeskCast Podcast, onde mergulhei de cabeça no mundo da produção audiovisual e design digital. Lá, aprendi e pratiquei edição de vídeo, criação de identidade visual e gestão de conteúdo para o YouTube. Gravava tanto no estúdio quanto em casa, cuidando de toda a pós-produção: desde a edição dos episódios até a criação de intros, logos, banners e layouts para transmissões ao vivo. Também gerenciava o canal, organizava as lives e estruturava o conteúdo usando ferramentas como o Notion, garantindo que tudo estivesse pronto e alinhado para o público. Essa experiência foi minha porta de entrada no mundo criativo, permitindo desenvolver um olhar técnico e artístico, equilibrando produção audiovisual, design gráfico e gestão de conteúdo.', 
      image: '/daskcast.jpg' },
    { title: 'Jornada — ETEC (ETEVAV)', date: '2020', 
      description: 'Iniciei minha jornada na ETEVAV – Escola Técnica Vasco Antônio Venchiarutti, cursando o Ensino Técnico Integrado ao Médio em Desenvolvimento de Sistemas. Foi aqui que aprendi a base da programação, lógica computacional e desenvolvimento de interfaces, descobrindo o prazer de unir tecnologia e expressão criativa. Esse período marcou o início da minha trajetória multidisciplinar, onde o design e o código começaram a caminhar lado a lado.', 
      image: '/eteclogo.jpg' },
    { title: '1º projeto — ReadMee! (TCC — ETEC)', date: '2022', 
      description: 'Durante o curso técnico, desenvolvi o projeto ReadMee! – Clube para Compartilhamento de Conteúdo Literário, meu Trabalho de Conclusão de Curso. A plataforma foi criada com o objetivo de democratizar o acesso à leitura e permitir que usuários compartilhassem contos, poesias, resenhas e resumos com o público. Além da publicação, o site incluía recursos de seguidores, inscrições mensais, estatísticas, conquistas, anúncios e dark mode. Mais do que um projeto técnico, o ReadMee! representou uma inovação social, ao conectar autores independentes a leitores e valorizar a produção literária de forma inclusiva e acessível. “ReadMee! me mostrou o quanto design e tecnologia podem ser agentes reais de inclusão e transformação.”',
      image: '/logor.png' },
    { title: 'Universidad e— UNINTER e DWGA Soluções Plásticas', date: '2023', 
      description: 'Em 2023 iniciei o curso de Análise e Desenvolvimento de Sistemas no Centro Universitário Internacional UNINTER, ampliando meu domínio sobre lógica, banco de dados e arquitetura de software. No mesmo período, atuei como Designer Gráfica na DWGA Soluções Plásticas, onde desenvolvi materiais físicos e digitais, campanhas de marketing e layouts institucionais. Trabalhei com otimização de conteúdo visual, tráfego pago e estratégias de branding, integrando design, tecnologia e comunicação em soluções reais para o mercado corporativo.', 
      image: '/uninter.png' },
    { title: 'Design is my Passion — Casa Orner e UNIANCHIETA', date: '2024', 
      description: 'Em 2024, comecei minha graduação em Design Gráfico no Centro Universitário Padre Anchieta (UNIANCHIETA), marcando o início da fase mais criativa da minha jornada. Durante esse período, atuei como Designer Gráfica e Gestora de Mídias Sociais na Casa Orner, criando conteúdos visuais para e-commerce, catálogos de produtos, fotografia e identidade de marca. Essa etapa representou a união entre a formação artística e a prática profissional, consolidando minha linguagem visual e sensibilidade estética.', 
      image: '/casaor.png' },
    { title: 'Desenvolvimento — Hanni Yummi Café & Agência REC', date: '2025', 
      description: 'Em 2025, dei vida à Hanni Yummi Café, uma cafeteria itinerante e beneficente inspirada na cultura jovem e no universo anime. O projeto nasceu do desejo de unir estética, afeto e impacto social, criando um espaço acolhedor que promove eventos culturais e ações solidárias. Paralelamente, atuei na Agência REC como Designer Gráfica, criando identidades visuais, campanhas e peças digitais para clientes de diferentes segmentos. Foi um ano de amadurecimento criativo e expansão profissional, onde pude aplicar todo o repertório técnico e sensível acumulado nos últimos anos.', 
      image: '/logoh.png' },
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
            <motion.img src="/G3.webp" alt="Imagem 1" className=" absolute right-[-150px] bottom-0 w-100 h-auto rounded-2xl object-cover" initial={{ opacity: 0, y: 20 }} whileHover={{ scale: 1.05 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} />
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
            <motion.img src="/G4.webp" alt="Imagem 2" className="absolute left-[-120px] lg:left-[-150px] bottom-0 w-100 h-auto rounded-2xl object-cover" initial={{ opacity: 0, y: 20 }} whileHover={{ scale: 1.05 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} />
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
      <div className="relative w-full h-[450px] sm:h-[600px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <motion.img
          src="/G5.webp"
          alt="Projetos"
          className="hover:z-20 absolute top-0 left-1/2 -translate-x-1/2 h-500px w-auto object-cover rounded-xl"
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: [0, 10, -10, 0], y: [0, -5, 5, 0], scale: 1.05 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'loop' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: cursorPos.x, y: cursorPos.y }}
        />
        <h2 className="relative z-10 lg:text-50 text-5xl  md:text-9xl font-extrabold text-white text-center tracking-widest drop-shadow-lg text-shadow-pink-500 text-shadow-lg">CARREIRA</h2>
      </div>

      {/* TIMELINE RESPONSIVA */}
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-8 py-16 flex flex-col items-center">
        {/* === DESKTOP: Linha horizontal === */}
        <div className="hidden sm:block relative w-full">
          {/* Linha de fundo */}
          <div className="absolute top-1/2 left-0 w-full h-[4px] bg-pink-300 rounded-full z-0 -translate-y-1/2"></div>

          {/* Linha de progresso */}
          <div
            className="absolute top-1/2 left-0 h-[4px] bg-pink-500 rounded-full z-10 -translate-y-1/2 transition-all duration-500 ease-in-out"
            style={{
              width: `${activeIndex !== null ? ((activeIndex + 1) / timelineItems.length) * 100 : 0}%`,
              transformOrigin: 'left center',
            }}
          ></div>

          {/* Bolinhas + datas + imagens */}
          <div className="flex justify-between items-center relative z-20">
            {timelineItems.map((item, index) => {
              const isActive = activeIndex !== null && index <= activeIndex;

              return (
                <div key={index} className="flex flex-col items-center relative">
                  {/* Data acima da bolinha */}
                  <span className="mb-2 text-fuchsia-900 bg-amber-50 font-bold text-center px-2 py-1 rounded-md">
                    {item.date}
                  </span>

                  {/* Bolinha com estrelinhas */}
                  <motion.button
                    onClick={() => handleCircleClick(index)}
                    className="w-8 h-8 top-9 rounded-full border-2 border-pink-500 flex items-center justify-center relative z-30 bg-white"
                    style={{
                      backgroundColor: isActive ? '#f472b6' : 'white',
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {isActive &&
                      Array.from({ length: 6 }).map((_, i) => (
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
                  </motion.button>

                  {/* Imagem abaixo da bolinha */}
                  <motion.img
                    src={item.image}
                    alt={item.date}
                    className="mt-3 w-24 h-24 top-10 relative object-cover rounded-2xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* === MOBILE: Linha vertical === */}
        <div className="flex sm:hidden flex-col items-center relative w-[4px] min-h-[600px]">
          {/* Linha de fundo */}
          <div className="absolute left-1/2 top-0 h-full w-[4px] bg-pink-300 rounded-full -translate-x-1/2 z-0"></div>

          {/* Linha de progresso */}
          <div
            className="absolute left-1/2 top-0 w-[4px] bg-pink-500 rounded-full -translate-x-1/2 z-10 transition-all duration-500 ease-in-out"
            style={{
              height: `${activeIndex !== null ? ((activeIndex + 1) / timelineItems.length) * 100 : 0}%`,
              transformOrigin: 'top center',
            }}
          ></div>

          {/* Bolinhas + datas + imagens */}
          <div className="flex flex-col items-center justify-between h-full z-20">
            {timelineItems.map((item, index) => {
              const isActive = activeIndex !== null && index <= activeIndex;

              return (
                <div key={index} className="flex flex-col items-center relative mb-8">
                  {/* Data ao lado da bolinha */}
                  <span className="mb-2 text-fuchsia-900 bg-amber-50 font-bold text-center px-2 py-1 rounded-md">
                    {item.date}
                  </span>

                  {/* Bolinha */}
                  <motion.button
                    onClick={() => handleCircleClick(index)}
                    className="w-8 h-8 rounded-full border-2 border-pink-500 flex items-center justify-center relative z-30 bg-white"
                    style={{
                      backgroundColor: isActive ? '#f472b6' : 'white',
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {isActive &&
                      Array.from({ length: 6 }).map((_, i) => (
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
                  </motion.button>

                  {/* Imagem abaixo da bolinha */}
                  <motion.img
                    src={item.image}
                    alt={item.date}
                    className="mt-3 w-30 object-cover rounded-2xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Botão de contato */} <button target="_blank" className="flex items-center justify-center border border-white rounded-full px-6 py-3 mx-auto m-2 hover:bg-white hover:text-black transition"> <PaperAirplaneIcon className="h-5 w-5 mr-2" /> <a target="_blank" href="https://wa.me/5511963241576?text=Ol%C3%A1%2C%20me%20interessei%20por%20seus%20trabalhos."> SABER MAIS </a> </button> {/* Final da página */} <div className="flex flex-col items-center mt-24 text-center"> <p className="text-white text-8xl font-black mt-2">THA<br />NK-<br />YOU</p> <motion.img src="/G6-1.webp" alt="Imagem Final" className="w-full sm:w-[300px] object-cover rounded-t-xl mx-auto mt-8" initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, ease: 'easeOut' }} /> </div>

      {/* === NOVO POPUP CENTRALIZADO === */}
      <AnimatePresence>
        {showPopup && activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-80 sm:w-96 p-6 bg-white rounded-xl shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
                onClick={() => setShowPopup(false)}
              >
                ×
              </button>

              <h3 className="font-bold text-black text-lg mb-2">{timelineItems[activeIndex].title}</h3>
              <p className="text-gray-700">{timelineItems[activeIndex].description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
}
