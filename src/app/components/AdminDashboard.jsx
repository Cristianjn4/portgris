'use client';
import React, { useState, useEffect, useRef } from 'react';
import { supabase } from './supabaseClient';

export default function AdminDashboard() {
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState('');
  const [adminOnline, setAdminOnline] = useState(false);
  const [leads, setLeads] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const savedSessionId = localStorage.getItem('adminCurrentSession');
    if (savedSessionId) {
      const session = JSON.parse(localStorage.getItem(`session-${savedSessionId}`));
      if (session) setCurrentSession(session);
    }
  }, []);

  useEffect(() => {
    const setStatus = async (status) => {
      await supabase.from('admin_status').upsert({ id: 1, online: status });
      setAdminOnline(status);
    };
    setStatus(true);
    return () => setStatus(false);
  }, []);

  useEffect(() => {
    const sub = supabase
      .channel('admin-status')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'admin_status', filter: 'id=eq.1' }, payload => {
        setAdminOnline(payload.new.online);
      })
      .subscribe();
    return () => supabase.removeChannel(sub);
  }, []);

  useEffect(() => {
    const fetchSessions = async () => {
      const { data } = await supabase
        .from('messages')
        .select('session_id, nome, empresa, whatsapp, lida')
        .order('criado_em', { ascending: true });
      if (data) {
        const unique = Array.from(new Map(data.map(item => [item.session_id, item])).values());
        setSessions(unique);
        unique.forEach(s => localStorage.setItem(`session-${s.session_id}`, JSON.stringify(s)));
      }
    };
    fetchSessions();

    const sub = supabase
      .channel('messages-all')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, payload => {
        const m = payload.new;
        setSessions(prev => {
          if (!prev.find(s => s.session_id === m.session_id)) {
            const newSession = { session_id: m.session_id, nome: m.nome, empresa: m.empresa, whatsapp: m.whatsapp };
            localStorage.setItem(`session-${m.session_id}`, JSON.stringify(newSession));
            return [...prev, newSession];
          }
          return prev;
        });
        if (currentSession && m.session_id === currentSession.session_id) {
          setMessages(prev => [...prev, m]);
        }
      })
      .subscribe();

    return () => supabase.removeChannel(sub);
  }, [currentSession]);

  useEffect(() => {
    const fetchLeads = async () => {
      const { data } = await supabase.from('leads').select('*').order('id', { ascending: true });
      if (data) setLeads(data);
    };
    fetchLeads();
  }, []);

  const openSession = async (session) => {
    setCurrentSession(session);
    localStorage.setItem('adminCurrentSession', session.session_id);

    const { data } = await supabase
      .from('messages')
      .select('*')
      .eq('session_id', session.session_id)
      .order('criado_em', { ascending: true });

    await supabase.from('messages').update({ lida: true }).eq('session_id', session.session_id);

    setMessages(data || []);
  };

  const handleReply = async () => {
    if (!reply.trim() || !currentSession) return;

    const msgObj = {
      session_id: currentSession.session_id,
      nome: 'Admin',
      empresa: 'Admin',
      whatsapp: '',
      mensagem: reply,
      criado_em: new Date().toISOString(),
      lida: true
    };

    const { error } = await supabase.from('messages').insert([msgObj]);
    if (error) console.log('Erro ao enviar mensagem:', error);
    else setMessages(prev => [...prev, msgObj]);

    setReply('');
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      height: '100vh',
      padding: '1rem',
      gap: '1rem',
      boxSizing: 'border-box'
    }}>
      
      {/* Sessões */}
      <div style={{
        flex: '1 1 250px',
        maxWidth: '250px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflowY: 'auto',
        backgroundColor:'#fff',
        minWidth: '200px'
      }}>
        <h3 style={{ padding: '0.5rem', borderBottom: '1px solid #ccc', color: '#000' }}>
          Sessões / Usuários {adminOnline ? '🟢 Online' : '🔴 Offline'}
        </h3>
        {sessions.map(session => (
          <div
            key={session.session_id}
            onClick={() => openSession(session)}
            style={{
              padding: '0.5rem',
              cursor: 'pointer',
              backgroundColor: currentSession?.session_id === session.session_id ? '#f0f0f0' : 'transparent',
              color: '#000'
            }}
          >
            <b>{session.nome}</b> <br />
            {session.empresa} <br />
            {session.whatsapp}
            {!messages.find(m => m.session_id === session.session_id && !m.lida) ? null : <span style={{color:'red'}}> •</span>}
          </div>
        ))}
      </div>

      {/* Chat estreito */}
      <div style={{
        flex: '2 1 400px',
        minWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor:'#fafafa'
      }}>
        {currentSession ? (
          <>
            {/* Topo */}
            <div style={{ display:'flex', alignItems:'center', padding:'0.5rem', borderBottom:'1px solid #ccc', backgroundColor:'#f0f0f0', color:'#000', gap:'0.5rem', flexWrap:'wrap' }}>
              <img src="/profile.png" alt="Foto do usuário" style={{ width: '40px', height: '40px', borderRadius:'50%' }} />
              <div><b>{currentSession.nome}</b> | {currentSession.empresa} | {currentSession.whatsapp}</div>
            </div>

            {/* Mensagens */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '0.5rem' }}>
              {messages.map(msg => (
                <div key={`${msg.id}-${msg.criado_em}`} style={{
                  marginBottom: '0.5rem',
                  maxWidth: '80%',
                  alignSelf: msg.nome === 'Admin' ? 'flex-end' : 'flex-start',
                  background: msg.nome === 'Admin' ? '#a0d2ff' : '#a0ffa0',
                  padding: '0.5rem',
                  borderRadius: '10px',
                  wordBreak: 'break-word',
                  color:'#000',
                  textAlign: 'left'
                }}>
                  <div><b>{msg.nome}</b> {msg.nome !== 'Admin' && `| ${msg.empresa} | ${msg.whatsapp}`}</div>
                  <div>{msg.mensagem} {msg.lida && <span style={{marginLeft:'4px', color:'blue'}}>✓✓</span>}</div>
                  <div style={{ fontSize: '0.7rem', color: '#555' }}>{new Date(msg.criado_em).toLocaleString()}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem', borderTop: '1px solid #ccc', flexWrap:'wrap' }}>
              <input
                type="text"
                placeholder="Digite sua resposta..."
                value={reply}
                onChange={e => setReply(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleReply(); }}
                style={{ flex: '1 1 auto', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc', color:'#000', minWidth:'150px' }}
              />
              <button onClick={handleReply} style={{ padding: '0.5rem 1rem', cursor: 'pointer', color:'black', flex:'0 0 auto' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M2.01 21l20.99-9L2.01 3v7l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div style={{ padding: '1rem', color:'#000' }}>Selecione uma sessão para abrir o chat.</div>
        )}
      </div>

      {/* Leads */}
      <div style={{
        flex: '1 1 250px',
        minWidth:'200px',
        border: '1px solid #ccc',
        borderRadius:'8px',
        padding:'1rem',
        overflowY:'auto',
        backgroundColor:'#fff',
        color:'#000'
      }}>
        <h3 style={{ marginBottom:'1rem' }}>Leads</h3>
        {leads.map(lead => (
          <div key={lead.id} style={{ border:'1px solid #ccc', borderRadius:'8px', padding:'0.5rem', marginBottom:'0.5rem', color:'#000' }}>
            <b>{lead.nome}</b> <br />
            {lead.empresa} <br />
            {lead.whatsapp}
            <div style={{ display:'flex', gap:'0.5rem', marginTop:'0.5rem', flexWrap:'wrap' }}>
              <button style={{ flex:'1 1 45%', padding:'0.3rem', backgroundColor:'#4caf50', color:'#fff', borderRadius:'5px', cursor:'pointer' }}>Potencial</button>
              <button style={{ flex:'1 1 45%', padding:'0.3rem', backgroundColor:'#2196f3', color:'#fff', borderRadius:'5px', cursor:'pointer' }}>Turista</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
