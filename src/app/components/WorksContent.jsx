'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WorksContent() {
  const categorias = ['Logos', 'Postagens', 'Banners', 'Offline', 'Projetos'];
  
  // Mock de posts
  const posts = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    titulo: `Projeto ${i + 1}`,
    img: `/mock-${i + 1}.webp`,
    desc: 'Descrição breve do projeto realizado.',
  }));

  const [scrollPos, setScrollPos] = useState(0);

  const scroll = (dir) => {
    const container = document.getElementById('carousel');
    const width = container.offsetWidth;
    const newScroll = dir === 'left' ? scrollPos - width : scrollPos + width;
    container.scrollTo({ left: newScroll, behavior: 'smooth' });
    setScrollPos(newScroll);
  };

  return (
    <main className="mt-16 w-full ">
      {/* === HEADER FIXO === */}
<section className="relative bg-gradient-to-b from-transparent to-[#ffffff2a] h-80 py-28 text-center overflow-visible">
  {/* Imagem de fundo */}
  <motion.img
    src="/G7.webp"
    alt="Background"
    whileHover={{ width: 550, zIndex: 50 }}
    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-120 max-w-none transition-all duration-500"
  />

  {/* Texto em cima */}
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wide text-white z-10"
  >
    MEUS TRABALHOS
  </motion.h1>

  <p className="relative lg:block hidden text-gray-200 mt-6 text-2xl z-10">
    Visualize por categoria
  </p>
</section>




{/* === CATEGORIAS === */}
<section className="flex justify-center bg-white space-x-4 py-4 flex-wrap">
  {categorias.map((cat, i) => (
    <button
      key={i}
      className="px-4 py-2 bg-[#3e1a58] rounded-full hover:bg-pink-600 transition"
    >
      {cat}
    </button>
  ))}
</section>

{/* === LOGOTIPOS === */}
<section className="w-full bg-[#0b0018a4] text-center py-24 rounded-b-4xl">
  <h2 className="text-white text-2xl font-bold tracking-widest mb-10">
    LOGOTIPOS
  </h2>

  <div className="grid grid-cols-3 md:grid-cols-5 gap-6 justify-items-center max-w-5xl mx-auto mb-10 px-6">
    {[
      "ard.png",
      "dsk.jpg",
      "fty.png",
      "hnn.png",
      "htg.png",
      "orn.png",
      "red.jpg",
      "rst1.png",
      "sin.png",
      "logom.png",
    ].map((logo, i) => (
      <div
        key={i}
        className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
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

      {/* === PRIMEIRO CARROSSEL === */}
<section className="relative py-10 overflow-hidden">
  <h2 className="text-center text-2xl font-bold mb-6 text-white tracking-wide">
    POSTAGENS
  </h2>

  <div className="flex justify-between px-6">
    <button onClick={() => scroll("left")}>
      <ChevronLeft size={32} className="hover:text-pink-400 text-white" />
    </button>
    <button onClick={() => scroll("right")}>
      <ChevronRight size={32} className="hover:text-pink-400 text-white" />
    </button>
  </div>

  <div
    id="carousel"
    className="flex overflow-x-hidden gap-6 px-6 py-6 snap-x snap-mandatory scroll-smooth"
    onScroll={(e) => {
      const carousel = e.currentTarget;
      const cards = Array.from(carousel.children);
      const center = carousel.scrollLeft + carousel.offsetWidth / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - window.innerWidth / 2);
        const blur = Math.min(distance / 100, 4);
        const opacity = Math.max(1 - distance / 400, 0.4);

        card.style.filter = `blur(${blur}px)`;
        card.style.opacity = opacity;
      });
    }}
  >
    {posts.map((post) => (
      <div
        key={post.id}
        className="snap-center flex-shrink-0 bg-[#1A0026]/80 backdrop-blur-md border border-white/10
                   rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] p-4 transition-all duration-500 ease-out
                   w-[90%] sm:w-[80%] md:w-[32%]"
      >
        <img
          src={post.img}
          alt={post.titulo}
          className="rounded-xl w-full h-40 object-cover"
        />
        <h3 className="font-semibold mt-4 text-white">{post.titulo}</h3>
        <p className="text-sm text-gray-300 mt-2">{post.desc}</p>
      </div>
    ))}
  </div>
</section>


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
