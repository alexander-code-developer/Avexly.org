// components/ui/ImageSlider.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = images.length > 1;

  if (!images.length) return null;

  return (
    <div className="relative group rounded-xl overflow-hidden border border-slate-700 bg-slate-900">
      <div className="relative aspect-video">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={images[currentIndex]}
            alt={title}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {hasMultiple && (
          <>
            <button
              onClick={() => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <FaArrowLeft className="text-white text-sm" />
            </button>
            <button
              onClick={() => setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <FaArrowRight className="text-white text-sm" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all rounded-full ${
                    idx === currentIndex ? 'w-6 h-1 bg-blue-500' : 'w-1.5 h-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};