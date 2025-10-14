'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveTimelineAnimated({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (index) => {
    setShowPopup(false);
    if (index > activeIndex) setActiveIndex(index);
    setTimeout(() => setShowPopup(true), 500); // delay pra pop-up
  };

  const handleClose = () => setShowPopup(false);

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-8 py-16 h-full">
      {/* Linha de fundo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-pink-200 rounded-full"></div>

      {/* Linha progressiva animada */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-pink-400 rounded-full origin-top"
        animate={{ height: `${activeIndex >= 0 ? ((activeIndex + 1) / items.length) * 100 : 0}%` }}
        transition={{ duration: 0.5 }}
      />

      {/* Círculos */}
      <div className="relative flex flex-col items-center justify-between h-full">
        {items.map((item, index) => {
          const isActive = activeIndex >= index;
          return (
            <div key={index} className="mb-12 flex flex-col items-center cursor-pointer">
              <div
                className={`w-8 h-8 rounded-full border-2 border-pink-400 flex items-center justify-center transition-all duration-300
                  ${isActive ? 'bg-pink-400' : 'bg-transparent'}`}
                onClick={() => handleClick(index)}
              >
                {isActive && <div className="w-3 h-3 rounded-full bg-pink-600"></div>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pop-up */}
      <AnimatePresence>
        {showPopup && activeIndex >= 0 && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 pointer-events-none"
            />
            <motion.div
              key="popup"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.4 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 sm:w-96 bg-purple-700 bg-opacity-70 rounded-2xl shadow-2xl p-6 text-white"
            >
              <div className="flex justify-end">
                <button
                  className="text-white text-2xl font-bold hover:text-pink-300"
                  onClick={handleClose}
                >
                  &times;
                </button>
              </div>
              <h3 className="text-xl font-bold mb-2">{items[activeIndex].title}</h3>
              <p className="text-sm text-gray-200 mb-4">{items[activeIndex].date}</p>
              <p className="text-base">{items[activeIndex].description}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
