'use client';
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { Star } from 'lucide-react';

export default function RatingCount() {
  const [average, setAverage] = useState(0);
  const [count, setCount] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);

  // Carrega média, quantidade e feedbacks com texto
  const loadRating = async () => {
    const { data, error } = await supabase
      .from('ratings')
      .select('rating, user_feedback, created_at');

    if (!error && data) {
      const ratings = data.map(r => r.rating).filter(r => r != null);
      const total = ratings.length;
      const avg = total ? ratings.reduce((a, b) => a + b, 0) / total : 0;

      setAverage(avg);
      setCount(total);

      // Apenas feedbacks com texto
      const feedbackList = data
        .filter(r => r.user_feedback && r.user_feedback.trim() !== '')
        .map(r => ({ rating: r.rating, feedback: r.user_feedback, created_at: r.created_at }));
      setFeedbacks(feedbackList);
    }
  };

  useEffect(() => {
    loadRating();
  }, []);

  // Renderiza estrelas grandes para a média
  const renderAverageStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      let fill = 'text-gray-400';
      if (i <= Math.floor(average)) fill = 'fill-yellow-400 text-yellow-400';
      else if (i - average < 1) fill = 'fill-yellow-200 text-yellow-200';
      stars.push(
        <Star key={i} className={`w-14 h-14 drop-shadow-lg ${fill}`} />
      );
    }
    return stars;
  };

  // Renderiza estrelas cinza para cada feedback
  const renderFeedbackStars = (rating) => {
    return [1, 2, 3, 4, 5].map((n) => {
      const fill = n <= rating ? 'text-gray-600' : 'text-gray-300';
      return <Star key={n} className={`w-5 h-5 ${fill}`} />;
    });
  };

  // Formata data
  const formatDate = (dateString) => {
    const d = new Date(dateString);
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <div className="pt-12 flex flex-col items-center max-w-4xl mx-auto">
      <p className="font-bold text-2xl text-white mb-2">Avaliação do site</p>

      {/* Linha de estrelas da média */}
      <div className="flex w-80 gap-3 mb-4">{renderAverageStars()}</div>

      <p className="white mb-4">
        Média: <span className="font-semibold">{average.toFixed(1)} ⭐</span> | {count} avaliação{count === 1 ? '' : 's'}
      </p>

      {/* Lista de feedbacks */}
      {feedbacks.length > 0 && (
        <div className="w-full">
          <p className="text-white font-medium mb-2">Feedbacks dos usuários:</p>
          <ul className="list-none space-y-2 max-h-64 overflow-y-auto">
            {feedbacks.map((f, idx) => (
              <li key={idx} className="p-2 bg-gray-50 rounded-lg shadow-sm flex flex-colo overflow-hidden">
                <span className="text-gray-400 text-xs mb-1">{formatDate(f.created_at)}</span>
                <div className="flex gap-1 mb-1">{renderFeedbackStars(f.rating)}</div>
                <p className="text-gray-700">{f.feedback}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
