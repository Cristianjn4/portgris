'use client';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Rating() {
  const [rating, setRating] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [rated, setRated] = useState(false);
  const [saving, setSaving] = useState(false);
  const [okVisible, setOkVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [rowId, setRowId] = useState(null);

  // Carrega contagem total de avaliações
  const loadCount = async () => {
    const { count, error } = await supabase
      .from('ratings')
      .select('*', { count: 'exact', head: true });
    if (!error) setCount(count || 0);
  };

  useEffect(() => {
    loadCount();
  }, []);

  // Salvar avaliação
  const handleRating = async (value) => {
    if (rated || saving) return;

    try {
      setSaving(true);

      const { data, error } = await supabase
        .from('ratings')
        .insert([{ rating: value, item_id: 'site', user_feedback: '' }])
        .select('id');

      if (error) {
        console.error('Erro ao salvar avaliação:', error);
        alert('Ocorreu um erro ao registrar sua avaliação.');
      } else {
        setRating(value);
        setRated(true);
        setOkVisible(true);
        setCount((prev) => prev + 1);
        setRowId(data[0].id);
      }
    } finally {
      setSaving(false);
    }
  };

  // Salvar feedback
  const handleFeedback = async () => {
    if (!feedback.trim() || !rowId) return;

    try {
      setSaving(true);
      const { error } = await supabase
        .from('ratings')
        .update({ user_feedback: feedback })
        .eq('id', rowId);

      if (!error) {
        setFeedbackSent(true);
        setFeedback('');
      } else {
        console.error('Erro ao salvar feedback:', error);
        alert('Erro ao enviar feedback.');
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto mt-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
        <p className="text-lg font-semibold mb-2 text-gray-800">
          Avalie nosso site
        </p>
        <p className="text-sm text-gray-600 mb-4">
          {rated
            ? '🙏 Obrigado pelo seu voto! Sua opinião ajuda a melhorar nosso site e nossos projetos.'
            : 'Sua opinião é muito importante para melhorar nosso trabalho!'}
        </p>

        {/* Estrelas */}
        <div className="flex gap-3 items-center justify-center mb-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <motion.div
              key={value}
              whileHover={!rated ? { scale: 1.3 } : {}}
              whileTap={!rated ? { scale: 0.9 } : {}}
              onClick={() => !rated && handleRating(value)}
              onMouseEnter={() => !rated && setHovered(value)}
              onMouseLeave={() => !rated && setHovered(null)}
              className={`${rated ? 'cursor-default' : 'cursor-pointer'} transition-all`}
            >
              <Star
                className={`w-12 h-12 transition-all duration-300 drop-shadow-lg ${
                  value <= (hovered || rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300 hover:text-yellow-300'
                }`}
              />
            </motion.div>
          ))}
        </div>

        {saving && <span className="text-gray-400 text-sm mt-2">Salvando...</span>}

        {/* Campo de feedback */}
        {rated && !feedbackSent && (
          <div className="mt-4 w-full flex flex-col items-center gap-2">
            <textarea
              className="w-full border text-gray-500 border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
              rows={3}
              placeholder="Deixe um feedback adicional (opcional)"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button
              onClick={handleFeedback}
              disabled={saving}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 disabled:opacity-50"
            >
              Enviar Feedback
            </button>
          </div>
        )}

        {/* Feedback enviado */}
        {feedbackSent && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 text-green-800 font-medium shadow-md rounded-xl p-4 mt-4 w-full text-center"
          >
            ✅ Feedback enviado! Obrigado por contribuir.
          </motion.div>
        )}

        {/* Contador de avaliações */}
        <p className="text-sm text-gray-500 mt-3">
          {count} avaliação{count === 1 ? '' : 's'}
        </p>
      </div>
    </div>
  );
}
