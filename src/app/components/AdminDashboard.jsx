'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export default function AdminDashboard() {
  const [mensagens, setMensagens] = useState([]);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const setStatus = async (status) => {
      await supabase.from('admin_status').upsert({ id: 1, online: status });
      setOnline(status);
    };

    setStatus(true);
    return () => setStatus(false);
  }, []);

  useEffect(() => {
    const fetchMensagens = async () => {
      const { data } = await supabase.from('messages').select('*').order('criado_em', { ascending: true });
      if (data) setMensagens(data);
    };
    fetchMensagens();

    const channel = supabase.channel('public:messages')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, payload => {
        if (payload.eventType === 'INSERT') {
          setMensagens(prev => [...prev, payload.new]);
        } else if (payload.eventType === 'UPDATE') {
          setMensagens(prev => prev.map(m => m.id === payload.new.id ? payload.new : m));
        }
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  const handleReply = async (id, resposta) => {
    if (!resposta) return;
    await supabase.from('messages').update({ resposta }).eq('id', id);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '1rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Dashboard Admin {online ? '🟢 Online' : '🔴 Offline'}</h2>
      {mensagens.length === 0 && <p style={{ color: '#888' }}>Nenhuma mensagem ainda.</p>}
      {mensagens.map(msg => (
        <div key={msg.id} style={{ border: '1px solid gray', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '4px' }}>
          <p><b>{msg.nome}</b> ({msg.empresa} / {msg.whatsapp}): {msg.mensagem}</p>
          <input
            placeholder="Responder"
            defaultValue={msg.resposta || ''}
            onKeyDown={e => {
              if (e.key === 'Enter') handleReply(msg.id, e.target.value);
            }}
            style={{ width: '100%', padding: '0.25rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {msg.resposta && <p style={{ color: 'blue' }}><b>Você:</b> {msg.resposta}</p>}
        </div>
      ))}
    </div>
  );
}