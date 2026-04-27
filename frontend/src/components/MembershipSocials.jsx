import React from 'react';
import { Github, Instagram, Linkedin, Facebook } from 'lucide-react';

const TikTokIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const MembershipSocials = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-white dark:bg-black transition-colors duration-500 border-t border-gray-100 dark:border-zinc-900">
      <div className="flex flex-col items-center">
        <h3 className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-12">Social Links</h3>
        
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 md:gap-16 w-full max-w-sm md:max-w-none">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-500/20">
              <Linkedin size={24} />
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-zinc-300 group-hover:text-blue-500 transition-colors">LinkedIn</span>
          </a>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white dark:group-hover:text-black group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-white/10">
              <Github size={24} />
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-zinc-300 group-hover:text-blue-500 transition-colors">GitHub</span>
          </a>

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-500/20">
              <Facebook size={24} />
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-zinc-300 group-hover:text-blue-500 transition-colors">Facebook</span>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 flex items-center justify-center group-hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-red-500/20">
              <Instagram size={24} />
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-zinc-300 group-hover:text-blue-500 transition-colors">Instagram</span>
          </a>

          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 dark:group-hover:bg-zinc-200 dark:group-hover:text-black group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-white/5">
              <TikTokIcon size={24} />
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-zinc-300 group-hover:text-blue-500 transition-colors">TikTok</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MembershipSocials;
