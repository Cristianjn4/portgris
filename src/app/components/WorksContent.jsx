'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export default function WorksContent() {
  const categorias = ['Logos', 'Postagens', 'Banners', 'Offline', 'Projetos'];

  const postsData = [
    { prefix: 'dn', title: 'Dan Terceirizações', qty: 15, format: 'jpg' },
    { prefix: 'ph', title: 'Pharmaó', qty: 13, format: 'jpg' },
    { prefix: 'pl', title: 'Polo Cervejeiro', qty: 6, format: 'webp' },
    { prefix: 'd', title: 'DWGA', qty: 8, format: 'jpeg' },
    { prefix: 'a', title: 'Anchieta', qty: 8, format: 'png' },
    { prefix: 's', title: 'Simmons', qty: 5, format: 'png' },
    { prefix: 'rc', title: 'REC', qty: 3, format: 'jpg' },
    { prefix: 'sc', title: 'Scatt Bikes', qty: 2, format: 'jpg' },
  ];

  const scrollRefs = useRef([]);
  const [popup, setPopup] = useState({ open: false, src: '', alt: '' });

  const scroll = (index, dir) => {
    const container = scrollRefs.current[index];
    if (!container) return;
    const width = container.offsetWidth;
    const newScroll = dir === 'left' ? container.scrollLeft - width : container.scrollLeft + width;
    container.scrollTo({ left: newScroll, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setPopup({ open: false, src: '', alt: '' });
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openPopup = (src, alt) => setPopup({ open: true, src, alt });
  const closePopup = () => setPopup({ open: false, src: '', alt: '' });

  const handleCategoryClick = (cat) => {
    let targetId = '';
    if (cat === 'Logos') targetId = 'logos';
    else if (cat === 'Postagens') targetId = 'postagens';
    const section = document.getElementById(targetId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="lg:mt-14 mt-0 w-full overflow-x-hidden">
      {/* === HEADER === */}
      <section className="relative lg:bg-gradient-to-b from-transparent to-[#ffffff1d] h-[14rem] sm:h-[20rem] md:h-[24rem] py-16 sm:py-24 text-center overflow-visible">
        <motion.img
          src="/G7.webp"
          alt="Background"
          whileHover={{ scale: 1.1, zIndex: 50 }}
          className="absolute lg:left-1/2 left-72 -translate-x-1/2 bottom-0 w-[230px] sm:w-[100px] md:w-[100px] lg:w-[500px] max-w-none transition-all duration-500"
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-7xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-wide text-white -z-10 lg:z-10 drop-shadow-[0_4px_10px_rgba(255,255,255,0.15)]"
        >
          <p className="relative z-10 lg:text-50 text-5xl  md:text-9xl font-extrabold text-white text-center tracking-widest drop-shadow-lg text-shadow-pink-500 text-shadow-lg mb-4 hidden pt-10 lg:block"> TRABALHOS </p>
          <p className="block text-left lg:hidden tracking-widest drop-shadow-lg text-shadow-pink-500 text-shadow-lg ">
            TRABA <br /> LHOS
          </p>
        </motion.h1>

        <p className="relative hidden sm:block text-gray-200 mt-4 text-lg md:text-2xl z-10">
          Visualize por categoria
        </p>
      </section>

      {/* === CATEGORIAS === */}
      <section className="w-full bg-transparent lg:bg-[#08000F] py-4 overflow-x-auto scrollbar-hide">
        <div className="flex justify-start sm:justify-center gap-3 sm:gap-4 px-4 min-w-max">
          {categorias.map((cat, i) => (
            <button
              key={i}
              className="px-4 py-2 whitespace-nowrap bg-white text-black rounded-full hover:bg-pink-400 hover:text-white transition duration-200 flex-shrink-0"
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* === LOGOTIPOS === */}
      <section id="logos" className="w-full text-center py-20 rounded-b-4xl">
        <h2 className="text-white text-2xl font-bold tracking-widest mb-10">
          LOGOTIPOS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center max-w-5xl mx-auto mb-10 px-6">
          {[
            'ard.png','dsk.jpg','fty.png','hnn.png','htg.png',
            'orn.png','red.jpg','rst1.png','sin.png','logom.png'
          ].map((logo, i) => (
            <div
              key={i}
              className="w-20 h-20 md:w-24 md:h-24 bg-transparent rounded-full overflow-hidden flex items-center justify-center shadow-lg relative cursor-pointer"
              onClick={() => openPopup(`/logos/${logo}`, `Logo ${logo}`)}
            >
              <img
                src={`/logos/${logo}`}
                alt={`Logo ${logo}`}
                className="w-full h-full object-cover"
              />
              <ZoomIn className="absolute top-1 right-1 w-5 h-5 text-white opacity-80" />
            </div>
          ))}
        </div>

        <a
          href="https://drive.google.com/drive/folders/1vZ6mK0DOgmeG5-SV5y6fbHYtyPmxv9Sp?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white border border-white rounded-full px-6 py-2 m-10 hover:bg-white hover:text-[#0B0018] transition inline-block text-center"
        >
          VER MAIS
        </a>
      </section>

      {/* === POSTAGENS DINÂMICAS === */}
      <section id="postagens" className="w-full text-center rounded-b-4xl">
        <h2 className="text-white text-2xl font-bold tracking-widest mb-10">
          POSTAGENS
        </h2>
        {postsData.map(({ prefix, title, qty, format }, index) => (
          <div key={index} className="mb-16 px-6 relative">
            <h3 className="text-white text-lg font-semibold mb-4">
              {title} ({qty})
            </h3>

            <button
              onClick={() => scroll(index, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll(index, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-20"
            >
              <ChevronRight size={24} />
            </button>

            <div
              ref={(el) => (scrollRefs.current[index] = el)}
              className="flex gap-6 pb-4 snap-x snap-mandatory scroll-smooth overflow-hidden"
            >
              {Array.from({ length: qty }).map((_, i) => {
                const src = `/posts/${prefix}${i + 1}.${format}`;
                return (
                  <div
                    key={i}
                    className="snap-center flex-shrink-0 bg-[#1A0026]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] p-4 transition-all duration-500 inline-flex flex-col items-center cursor-pointer relative"
                    onClick={() => openPopup(src, `${title} ${i + 1}`)}
                  >
                    <img
                      src={src}
                      alt={`${title} ${i + 1}`}
                      className="rounded-xl w-auto h-40 max-w-full object-cover"
                    />
                    <ZoomIn className="absolute top-2 right-2 w-5 h-5 text-white opacity-80" />
                    <h3 className="font-semibold mt-4 text-white">
                      {title} {i + 1}
                    </h3>
                    <p className="text-sm text-gray-300 mt-2">
                      Projeto realizado para {title}.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <a
          href="https://drive.google.com/drive/folders/1DTqEBr_TUlvTRCT7GHzJ6C4S68G-RX88?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white border border-white rounded-full px-6 py-2 mb-10 hover:bg-white hover:text-[#0B0018] transition inline-block text-center"
        >
          VER MAIS
        </a>
      </section>

      {/* === POPUP LIGHTBOX ANIMADO === */}
      <AnimatePresence>
        {popup.open && (
          <motion.div
            key="popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={popup.src}
                alt={popup.alt}
                className="max-h-[70vh] max-w-[70vw] rounded-xl shadow-2xl"
              />
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/50 text-white p-2 rounded-full"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === FOOTER === */}
      <footer className="bg-gradient-to-br e to-stone-400 max-w-md mx-auto shadow-lg rounded-2xl p-6 flex flex-col items-center text-center mt-16">
  <h3 className="font-semibold text-white">OBRIGADA POR CHEGAR ATÉ AQUI 🌙</h3>
  <p className="text-white text-sm mb-4">
    Veja todos os trabalhos no meu portfólio completo.
  </p>
  <a
    className="w-auto px-6 py-2 border font-medium border-white bg-pink-600 rounded-full hover:bg-[#3e1a58] transition"
    href="https://drive.google.com/drive/folders/1TCRWErYp-pcSi8GbOOaFM50Oh2LDXSk-?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
  >
    VER MAIS
  </a>
      </footer>
    </main>
  );
}
