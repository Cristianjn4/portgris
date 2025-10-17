import React from 'react';
import AdminDashboard from '../components/AdminDashboard';

export default function Adm() {
  return (
    <div>
<h2 className="relative z-10 lg:text-50 text-5xl  md:text-9xl font-extrabold text-white text-center tracking-widest drop-shadow-lg text-shadow-pink-500 text-shadow-lg">DASHBOARD </h2>
    
      <h1 className='text-center'> Olá, Gris Boladona ⚙️📊📈</h1>
      <AdminDashboard />
    </div>
  );
}
