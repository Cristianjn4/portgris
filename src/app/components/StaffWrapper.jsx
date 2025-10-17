'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StaffWrapper({ children }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'Bc140810@') {
      handleCloseModal();
      router.push('/Adm'); // rota do AdminDashboard
    } else {
      alert('Senha incorreta. Acesso negado.');
      handleCloseModal();
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {children}

      {/* Ícone de engrenagem */}
      <button
        onClick={handleOpenModal}
        title="Área de staff"
        style={{
          position: 'fixed',
          bottom: '1rem',
          left: '1rem',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#ed07020e',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          fontSize: '1.4rem',
          transition: 'transform 0.2s, background-color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        ⚙️
      </button>

      {/* Modal de senha */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: '#121212',
              padding: '2rem',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              minWidth: '320px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              color: '#fff',
            }}
          >
            <h2 style={{ margin: 0, textAlign: 'center', fontWeight: 600 }}>Área para staff</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite a senha"
              style={{
                padding: '0.6rem',
                fontSize: '1rem',
                borderRadius: '8px',
                border: '1px solid #333',
                backgroundColor: '#1e1e1e',
                color: '#fff',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.currentTarget.style.borderColor = '#2196f3'}
              onBlur={e => e.currentTarget.style.borderColor = '#333'}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={handleCloseModal}
                style={{
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  border: '1px solid #555',
                  backgroundColor: '#1e1e1e',
                  color: '#fff',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#333')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1e1e1e')}
              >
                Cancelar
              </button>
              <button
                type="submit"
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#2196f3',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1976d2')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2196f3')}
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
