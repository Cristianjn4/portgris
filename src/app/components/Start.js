'use client';
import { useRef, useState } from 'react';

export default function Start() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.currentTime = 0; // reinicia
        videoRef.current.play();
        setIsPlaying(true);

        // Quando o vídeo terminar, volta ao frame inicial
        videoRef.current.onended = () => {
          videoRef.current.currentTime = 0;
          setIsPlaying(false);
        };
      }
    }
  };

  return (
    <main className="text-white p-8 flex flex-col items-center justify-center text-center">
      <div className="w-5/6 max-w-lg">
        <p className="font-bold text-xl mb-2">SEJA BEM-VINDO(A)</p>
        <p className="mb-8">
          Por gentileza, escolha uma aba acima e comece a navegar.
        </p>

        <div
          onClick={handleClick}
          className="relative mx-auto w-48 h-48 rounded-full overflow-hidden shadow-lg shadow-pink-500/30
                     transform transition-transform duration-500
                     hover:scale-125 hover:shadow-pink-500/70
                     focus:scale-125 focus:shadow-pink-500/70 cursor-pointer"
        >
          <video
            ref={videoRef}
            src="/G1.webm"
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover rounded-full bg-amber-50"
          />
        </div>
      </div>
    </main>
  );
}
