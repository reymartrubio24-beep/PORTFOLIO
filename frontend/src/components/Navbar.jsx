import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav 
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-100 dark:border-zinc-800 rounded-full shadow-2xl flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-zinc-500"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: -100, x: "-50%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="#gallery" className="hover:text-black dark:hover:text-white transition-colors">Gallery</a>
          <div className="w-[1px] h-3 bg-gray-200 dark:bg-zinc-800" />
          <a href="#" className="bg-black dark:bg-zinc-100 text-white dark:text-black px-4 py-1.5 rounded-full hover:scale-105 active:scale-95 transition-all">Schedule a Call</a>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
