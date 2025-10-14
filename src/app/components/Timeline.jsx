'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveTimeline({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-8 py-16">
      {/* Linha da timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-pink-300 rounded-full"></div>

      <div className="relative flex flex-col items-center space-y-10">
        {items.map((item, index) => {
          const isActive = activeIndex !== null && index <= activeIndex;
          return (
            <div key={index} className="relative flex flex-col items-center cursor-pointer">
              {/* Círculo interativo */}
              <motion.div
                className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-4 border-pink-300 flex items-center justify-center`}
                onClick={() => handleClick(index)}
                animate={{ backgroundColor: isActive ? '#f472b6' : '#fff' }}
                transition={{ duration: 0.3 }}
              />
              {/* Linha progressiva */}
              {index !== items.length - 1 && (
                <div
                  className={`w-1 h-20 sm:h-32 bg-pink-300 rounded-full mt-1`}
                  style={{
                    opacity: index < activeIndex ? 1 : 0.3,
                  }}
                ></div>
              )}
            </div>
          );
        })}
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg mx-4 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white font-bold"
                onClick={handleClose}
              >
                X
              </button>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {items[activeIndex].title}
              </h3>
              <time className="block mb-2 text-sm text-gray-400 dark:text-gray-500">
                {items[activeIndex].date}
              </time>
              <p className="text-gray-700 dark:text-gray-300">
                {items[activeIndex].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
