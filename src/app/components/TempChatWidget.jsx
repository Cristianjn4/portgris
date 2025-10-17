'use client';
import React, { useState, useEffect, useRef } from 'react';
import { supabase } from './supabaseClient';
import { v4 as uuidv4 } from 'uuid';

export default function TempChatWidget() {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [adminOnline, setAdminOnline] = useState(false);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); };
  useEffect(scrollToBottom, [messages]);

  // Verifica status do admin
  useEffect(() => {
    const fetchStatus = async () => {
      const { data } = await supabase.from('admin_status').select('*').eq('id', 1).single();
      setAdminOnline(data?.online || false);
    };
    fetchStatus();

    const sub = supabase
      .channel('admin-status')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'admin_status' }, payload => {
        setAdminOnline(payload.new.online);
      })
      .subscribe();

    return () => supabase.removeChannel(sub);
  }, []);

  // Observa mensagens
  useEffect(() => {
    if (!sessionId) return;

    const fetchMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .eq('session_id', sessionId)
        .order('criado_em', { ascending: true });
      setMessages(data);
    };
    fetchMessages();

    const sub = supabase
      .channel(`messages-${sessionId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'messages', filter: `session_id=eq.${sessionId}` }, payload => {
        setMessages(prev => [...prev, payload.new]);
      })
      .subscribe();

    return () => supabase.removeChannel(sub);
  }, [sessionId]);

  const iniciarChat = () => {
    if (!nome || !empresa || !whatsapp) return;
    setSessionId(uuidv4());
    setStarted(true);
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    const msgObj = {
      session_id: sessionId,
      nome,
      empresa,
      whatsapp,
      mensagem: currentMessage
    };

    setMessages(prev => [...prev, msgObj]);

    if (!adminOnline) {
      setMessages(prev => [...prev, { mensagem: 'Admin está offline. Sua mensagem foi salva e será respondida via WhatsApp.', aviso: true }]);
    }

    await supabase.from('messages').insert([msgObj]);
    setCurrentMessage('');
  };

  return (
    <>
      {!started ? (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-[#1a1a1a]/80 to-[#000000]/80 rounded-2xl p-8 shadow-xl backdrop-blur-md max-w-md mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-white text-center">CONTATO</h2>
          <p className="text-gray-300 text-center mb-8">
            Informe seu nome, empresa e WhatsApp para iniciar o chat
          </p>

          <input
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            className="w-full bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <input
            placeholder="Empresa"
            value={empresa}
            onChange={e => setEmpresa(e.target.value)}
            className="w-full bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            className="w-full bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-white/40"
          />

          <button
            onClick={iniciarChat}
            className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition"
          >
            Iniciar Chat
          </button>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '80vh',
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto',
          backgroundColor: '#fafafa',
          color: '#000',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '1rem'
        }}>
          <div style={{ marginBottom: '0.5rem' }}>Chat {adminOnline ? '🟢 Online' : '🔴 Offline'}</div>
          <div style={{ flex: 1, overflowY: 'auto', marginBottom: '0.5rem' }}>
            {messages.length === 0 && <p>Nenhuma mensagem ainda.</p>}
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                marginBottom: '0.5rem',
                maxWidth: '80%',
                alignSelf: msg.aviso ? 'center' : (msg.resposta ? 'flex-start' : 'flex-end'),
                background: msg.aviso ? '#ffeb99' : (msg.resposta ? '#d0e6ff' : '#a0ffa0'),
                padding: '0.5rem',
                borderRadius: '10px',
                color: '#000',
                wordBreak: 'break-word',
                textAlign: msg.aviso ? 'center' : 'left'
              }}>
                {msg.aviso ? msg.mensagem : (<><b>{msg.nome}:</b> {msg.mensagem}</>)}
                {msg.resposta && <p style={{ color: 'blue', margin: 0 }}><b>Admin:</b> {msg.resposta}</p>}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={currentMessage}
              onChange={e => setCurrentMessage(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSendMessage(); }}
              style={{ flex: 1, padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }}
            />
            <button onClick={handleSendMessage} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
}
