import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg'; 
import img15 from '../assets/15.jpg';
import img16 from '../assets/16.jpg';
import img17 from '../assets/17.jpg';
import img18 from '../assets/18.jpg';

const images = [img11, img12, img13, img14, img15, img16, img17, img18];

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setSelectedIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === -1) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setSelectedIdx(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIdx !== -1) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedIdx]);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section id="gallery" className="py-20 px-6 max-w-6xl mx-auto bg-white dark:bg-black transition-colors duration-500 border-t border-gray-100 dark:border-zinc-900 overflow-hidden text-center md:text-left">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Gallery</h2>
      </div>

      <div 
        className="relative group/gallery cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="flex gap-4"
          initial={{ x: 0 }}
          animate={{ x: isHovered ? undefined : "-50%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedImages.map((img, idx) => (
            <div
              key={idx}
              className="min-w-[300px] md:min-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover:grayscale-0 grayscale transition-all duration-500 hover:scale-[0.98]"
              onClick={() => setSelectedIdx(idx % images.length)}
            >
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" draggable={false} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- LIGHTBOX SYSTEM (Portal to body so it's above everything) --- */}
      {selectedIdx !== -1 && createPortal(
        <AnimatePresence>
          <motion.div 
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(-1)}
          >
            {/* Top Bar: Counter and Close */}
            <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-10">
              <span className="text-xs font-mono font-bold text-white tracking-widest bg-white/10 px-4 py-2 rounded-lg">
                {selectedIdx + 1} / {images.length}
              </span>
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedIdx(-1); }}
                className="p-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all hover:scale-105 active:scale-95"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Content Area */}
            <div className="relative w-full h-full flex items-center justify-center group/lightbox" onClick={(e) => e.stopPropagation()}>
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 p-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all hidden md:block z-20"
              >
                <ChevronLeft size={32} />
              </button>

              <button 
                onClick={nextImage}
                className="absolute right-4 p-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all hidden md:block z-20"
              >
                <ChevronRight size={32} />
              </button>

              {/* Main Image */}
              <motion.img 
                key={selectedIdx}
                src={images[selectedIdx]} 
                alt="Lightbox Full" 
                className="max-w-[90vw] max-h-[70vh] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              />

              {/* Bottom Instructions */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em] bg-black/50 px-6 py-3 rounded-full border border-white/10">
                  Use arrow keys to navigate &bull; ESC to close
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Gallery;
