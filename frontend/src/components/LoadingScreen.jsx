import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1800); // Faster duration: 1.8 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Symmetrical Dual-Panel Wipe */}
      <motion.div 
        className="absolute top-0 left-0 bottom-0 w-1/2 bg-zinc-950 z-50 origin-left"
        exit={{ 
          scaleX: 0,
          transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.1 } 
        }}
      />
      <motion.div 
        className="absolute top-0 right-0 bottom-0 w-1/2 bg-zinc-950 z-50 origin-right"
        exit={{ 
          scaleX: 0,
          transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.1 } 
        }}
      />
      
      {/* Black Fade Layer */}
      <motion.div 
        className="absolute inset-0 bg-black z-40"
        exit={{ 
          opacity: 0,
          transition: { duration: 0.4, delay: 0.4 } 
        }}
      />

      {/* Content Container with Entrance & Exit Enhancements */}
      <motion.div 
        className="relative h-full flex flex-col items-center justify-center p-6 z-[60] text-center"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ 
          opacity: 0, 
          scale: 1.2,
          filter: "blur(40px)",
          transition: { duration: 0.6, ease: "easeInOut" } 
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="space-y-12">
           {/* Enhanced Logo entrance */}
           <motion.div 
            className="w-24 h-24 mx-auto relative"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
           >
              <div className="absolute inset-0 border-[3px] border-blue-500 rounded-[2rem] animate-spin-slow opacity-20" />
              <div className="absolute inset-3 border border-white/10 rounded-[1.5rem] animate-spin-reverse-slow opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div 
                    className="w-10 h-10 bg-blue-600 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,1)] flex items-center justify-center relative overflow-hidden"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                 >
                    <div className="w-full h-full absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                    <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                 </motion.div>
              </div>
           </motion.div>

           {/* Brand Header with Staggered Entrance */}
           <div className="space-y-4">
              <div className="overflow-hidden">
                 <motion.h1 
                  className="text-4xl md:text-5xl font-black text-white tracking-[0.5em] uppercase italic"
                  initial={{ y: 60, skewX: 10 }}
                  animate={{ y: 0, skewX: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                 >
                   REY-DEV
                 </motion.h1>
              </div>
              <motion.div 
                className="h-[2px] w-32 bg-blue-600 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
           </div>

           {/* Pulse Progress Bar */}
           <div className="w-64 mx-auto space-y-4">
              <div className="flex justify-between items-end px-1">
                 <p className="text-[8px] text-zinc-500 font-bold uppercase tracking-[0.4em] opacity-40">Initializing System</p>
                 <motion.div className="h-1 w-1 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative border border-white/5">
                 <motion.div 
                  className="h-full bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,1)]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                 />
                 <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                 />
              </div>
           </div>
        </div>

        {/* Ambient Atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
           <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[150px] opacity-20"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
           />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
