'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WorksContent() {
  const categorias = ['Logos', 'Postagens', 'Banners', 'Offline', 'Projetos'];

  // Mock de posts original (mantido)
  const posts = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    titulo: `Projeto ${i + 1}`,
    img: `/posts/a${(i % 6) + 1}.png`,
    desc: 'Projeto Figet Toys - Anchieta.',
  }));

  const [scrollPos, setScrollPos] = useState(0);
  const scroll = (dir) => {
    const container = document.getElementById('carousel');
    const width = container.offsetWidth;
    const newScroll = dir === 'left' ? scrollPos - width : scrollPos + width;
    container.scrollTo({ left: newScroll, behavior: 'smooth' });
    setScrollPos(newScroll);
  };

  // === NOVO: POSTS DINÂMICOS ===
  const postsData = [
    { prefix: 'a', title: 'Anchieta', qty: 8, format: 'png' },
    { prefix: 'dn', title: 'Dan Terceirizações', qty: 15, format: 'jpg' },
    { prefix: 'd', title: 'DWGA', qty: 8, format: 'jpeg' },
    { prefix: 'ph', title: 'Pharmaó', qty: 13, format: 'jpg' },
    { prefix: 'pl', title: 'Polo Cervejeiro', qty: 6, format: 'webp' },
    { prefix: 'rc', title: 'REC', qty: 3, format: 'jpg' },
    { prefix: 's', title: 'Simmons', qty: 5, format: 'png' },
    { prefix: 'sc', title: 'Scatt Bikes', qty: 2, format: 'jpg' },
  ];

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
          <p className="hidden pt-10 lg:block"> TRABALHOS </p>
          <p className="block text-left lg:hidden">
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
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* === LOGOTIPOS === */}
      <section className="w-full bg-[#0b0018a4] text-center py-20 rounded-b-4xl">
        <h2 className="text-white text-2xl font-bold tracking-widest mb-10">
          LOGOTIPOS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center max-w-5xl mx-auto mb-10 px-6">
          {[
            'ard.png',
            'dsk.jpg',
            'fty.png',
            'hnn.png',
            'htg.png',
            'ord.png',
            'red.jpg',
            'rst1.png',
            'sin.png',
            'logom.png',
          ].map((logo, i) => (
            <div
              key={i}
              className="w-20 h-20 md:w-24 md:h-24 bg-transparent rounded-full overflow-hidden flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`/logos/${logo}`}
                alt={`Logo ${logo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button className="text-white border border-white rounded-full px-6 py-2 m-10 hover:bg-white hover:text-[#0B0018] transition">
          VER MAIS
        </button>

        {/* === POSTAGENS DINÂMICAS === */}
        {postsData.map(({ prefix, title, qty, format }, index) => (
          <div key={index} className="mb-16 px-6">
            <h3 className="text-white text-lg font-semibold mb-4">
              {title} ({qty})
            </h3>

            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scroll-smooth">
              {Array.from({ length: qty }).map((_, i) => (
                <div
                  key={i}
                  className="snap-center flex-shrink-0 bg-[#1A0026]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] p-4 w-[80%] sm:w-[45%] md:w-[30%] transition-all duration-500"
                >
                  <img
                    src={`/posts/${prefix}${i + 1}.${format}`}
                    alt={`${title} ${i + 1}`}
                    className="rounded-xl w-full h-40 object-cover"
                  />
                  <h3 className="font-semibold mt-4 text-white">
                    {title} {i + 1}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
                    Projeto realizado para {title}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Botão "Ver Mais" */}
        <button className="text-white border border-white rounded-full px-6 py-2 hover:bg-white hover:text-[#0B0018] transition">
          VER MAIS
        </button>
      </section>

      {/* === FINAL === */}
      <footer className="bg-[#08000F] py-10 text-center rounded-3xl lg:rounded-full my-10">
        <h3 className="font-bold text-lg">OBRIGADA POR CHEGAR ATÉ AQUI 🌙</h3>
        <p className="text-gray-400 text-sm mt-2">
          Veja todos os trabalhos no meu portfólio completo.
        </p>
        <button className="mt-4 px-6 py-2 border font-medium border-white bg-pink-600 rounded-full hover:bg-[#3e1a58] transition">
          VER MAIS
        </button>
      </footer>
    </main>
  );
}
