'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WorksContent() {
  const categorias = ['Design', 'Ilustração', 'Vídeo', 'Social', 'Outros'];
  
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
    <main className="min-h-screen bg-[#0B0014] text-white overflow-hidden">
      {/* === HEADER FIXO === */}
      <section className="bg-pink-700 py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-wide"
        >
          MEUS TRABALHOS
        </motion.h1>
        <p className="text-gray-200 mt-2 text-sm">Visualize por categoria</p>
      </section>

      {/* === CATEGORIAS === */}
      <section className="flex justify-center space-x-4 py-4 flex-wrap">
        {categorias.map((cat, i) => (
          <button
            key={i}
            className="px-4 py-2 bg-[#1E0033] rounded-full hover:bg-pink-600 transition"
          >
            {cat}
          </button>
        ))}
      </section>

      {/* === PRIMEIRO CARROSSEL === */}
      <section className="relative py-10">
        <h2 className="text-center text-2xl font-bold mb-6">PROJETOS RECENTES</h2>

        <div className="flex justify-between px-6">
          <button onClick={() => scroll('left')}>
            <ChevronLeft size={32} className="hover:text-pink-400" />
          </button>
          <button onClick={() => scroll('right')}>
            <ChevronRight size={32} className="hover:text-pink-400" />
          </button>
        </div>

        <div
          id="carousel"
          className="flex overflow-x-scroll scrollbar-hide gap-6 px-6 py-6 snap-x snap-mandatory scroll-smooth"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="snap-center min-w-[260px] bg-[#1A0026] rounded-2xl shadow-lg p-4 flex-shrink-0"
            >
              <img
                src={post.img}
                alt={post.titulo}
                className="rounded-xl w-full h-40 object-cover"
              />
              <h3 className="font-semibold mt-4">{post.titulo}</h3>
              <p className="text-sm text-gray-300 mt-2">{post.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === SEGUNDA SEÇÃO === */}
      <section className="bg-[#14001F] py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">PROJETOS DESTACADOS</h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-8">
          Veja alguns dos meus trabalhos que marcaram minha trajetória criativa.
        </p>

        <div className="flex overflow-x-scroll scrollbar-hide gap-6 px-6 snap-x snap-mandatory">
          {posts.map((post) => (
            <div
              key={post.id}
              className="snap-center min-w-[260px] bg-[#1F0033] rounded-2xl shadow-lg p-4 flex-shrink-0"
            >
              <img
                src={post.img}
                alt={post.titulo}
                className="rounded-xl w-full h-40 object-cover"
              />
              <h3 className="font-semibold mt-4">{post.titulo}</h3>
              <p className="text-sm text-gray-300 mt-2">{post.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === FINAL === */}
      <footer className="bg-[#08000F] py-10 text-center">
        <h3 className="font-bold text-lg">OBRIGADA POR CHEGAR ATÉ AQUI 🌙</h3>
        <p className="text-gray-400 text-sm mt-2">
          Veja todos os trabalhos no meu portfólio completo.
        </p>
        <button className="mt-4 px-6 py-2 bg-pink-600 rounded-full hover:bg-pink-700 transition">
          VER MAIS
        </button>
      </footer>
    </main>
  );
}
