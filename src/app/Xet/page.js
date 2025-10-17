'use client';
import React from 'react';
import TempChatWidget from '../components/TempChatWidget';

export default function Xet() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2 className="relative z-10 lg:text-50 text-xl  md:text-9xl font-extrabold text-white text-center tracking-widest drop-shadow-lg text-shadow-pink-500 text-shadow-lg mb-4">CHAT </h2>
    
      <h1 className='text-center mb-8 w-auto'> Entre em contato agora mesmo pelo chat!</h1>
      <TempChatWidget />
    </div>
  );
}
