import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { BadgeCheck, Check, MapPin, Calendar, Mail, FileText, ChevronRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <section className="pt-12 md:pt-16 pb-16 px-4 md:px-6 max-w-6xl mx-auto bg-white dark:bg-black transition-colors duration-500">
      <div className="flex flex-row gap-4 md:gap-12 items-start relative">
        
        {/* Profile Image with cross-fade animation */}
        <div className="w-28 h-28 md:w-64 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 shrink-0 shadow-2xl relative bg-zinc-100 dark:bg-zinc-900">
          <AnimatePresence mode="wait">
            <motion.img 
              key={isDark ? 'dark' : 'light'}
              src={isDark ? '/back.jpg' : '/front.jpg'} 
              alt="Profile" 
              className="w-full h-full object-cover object-top"
              style={{ imageRendering: 'high-quality', objectPosition: 'center top' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </AnimatePresence>
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Info Area */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start w-full mb-3 md:mb-8">
            <div className="space-y-1 md:space-y-2">
              <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                <h1 className="text-xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Rey-Dev</h1>
                <div className="relative flex items-center justify-center">
                  <BadgeCheck size={18} className="md:w-6 md:h-6 text-blue-500 fill-blue-500" />
                  <Check size={8} className="md:w-3 md:h-3 text-white absolute stroke-[5]" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 dark:text-zinc-500 text-[8px] md:text-xs font-bold uppercase tracking-[0.05em] md:tracking-[0.2em]">
                <MapPin size={8} className="md:w-3 md:h-3 text-blue-500 shrink-0" />
                <span className="leading-tight">Barangay Bagong Oroquieta, Guipos, ZDS</span>
              </div>
            </div>

            {/* Premium Theme Switch (Bryl Style) */}
            <div 
              onClick={toggleTheme}
              className="w-10 h-5 md:w-16 md:h-8 bg-gray-100 dark:bg-zinc-900 rounded-lg p-0.5 md:p-1 cursor-pointer flex items-center transition-all relative border border-gray-200 dark:border-zinc-800 group hover:border-gray-300 dark:hover:border-zinc-700 shrink-0"
            >
              <div className="absolute inset-0 flex justify-between items-center px-1 md:px-2 z-0 opacity-40">
                <span className="text-[6px] md:text-[10px]">☀️</span>
                <span className="text-[6px] md:text-[10px]">🌙</span>
              </div>
              <motion.div 
                className="w-3.5 h-3.5 md:w-6 md:h-6 bg-white dark:bg-zinc-400 rounded md:rounded-md shadow-sm border border-gray-200 dark:border-zinc-600 z-10"
                animate={{ x: isDark ? (window.innerWidth < 768 ? 16 : 32) : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </div>
          </div>

          <p className="text-xs md:text-2xl text-gray-700 dark:text-zinc-300 font-medium mb-6 md:mb-10 leading-relaxed max-w-2xl">
            AI <span className="text-zinc-400 dark:text-zinc-700 font-extralight mx-1 md:mx-0">|</span> IT Student <span className="text-zinc-400 dark:text-zinc-700 font-extralight mx-1 md:mx-0">|</span> Naa BH tambay
          </p>

          <div className="hidden md:flex flex-wrap lg:flex-nowrap gap-4 items-center">
            <button className="flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-extrabold text-sm hover:translate-y-[-2px] active:translate-y-0 transition-all shadow-xl shadow-black/10 dark:shadow-white/5">
              <Calendar size={18} /> Schedule a Call <ChevronRight size={18} className="ml-2" />
            </button>
            <a href="mailto:reymartrubio24@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300 rounded-xl font-bold text-sm hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all">
              <Mail size={18} /> Send Email
            </a>
            <button className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300 rounded-xl font-bold text-sm hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all group lg:flex-1 justify-between">
              <span className="flex items-center gap-3"><FileText size={18} /> Read my blog</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Buttons Layout */}
      <div className="md:hidden mt-8 space-y-3">
        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-extrabold text-xs shadow-lg">
            <Calendar size={14} /> Schedule a Call
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300 rounded-xl font-bold text-xs">
            <FileText size={14} /> My blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
