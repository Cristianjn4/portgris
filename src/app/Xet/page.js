import React from 'react';
import TempChatWidget from '../components/TempChatWidget';

export const metadata = {
  title: 'CHAT | Entre em contato de forma simplificada agora mesmo. ',
  description: 'Trabalhos',
};

export default function Xet() {
  return (
    <div style={{ padding: '1rem' }}>
<h2 className="relative z-10 lg:text-9xl text-8xl pb-6  md:text-9xl font-extrabold text-white text-center tracking-widest drop-shadow-lg text-shadow-pink-500 text-shadow-lg">CHAT </h2>
    
      <TempChatWidget />
    </div>
  );
}
