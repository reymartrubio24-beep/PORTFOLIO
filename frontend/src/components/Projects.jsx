import React from 'react';
import { motion } from 'framer-motion';
import useProjects from '../hooks/useProjects';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const { projects, loading, error } = useProjects();

  if (loading) return (
    <div className="py-20 text-center animate-pulse text-gray-400">Loading modules...</div>
  );

  // Show headers even if empty as per user request
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto bg-white dark:bg-black transition-colors duration-500 border-t border-gray-100 dark:border-zinc-900">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Recent Projects</h2>
        <button className="text-sm font-medium text-gray-500 hover:text-blue-500 flex items-center gap-1 group transition-colors">
          View All <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col group cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <div className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-lg border border-gray-100 dark:border-zinc-800 transition-all hover:bg-white dark:hover:bg-zinc-800 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">{project.title}</h3>
                <ArrowUpRight size={20} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
              </div>
              <p className="text-sm text-gray-500 dark:text-zinc-400 mb-8 leading-relaxed line-clamp-2 max-w-[400px]">
                {project.description}
              </p>
              
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-400 dark:text-zinc-500 text-[10px] font-mono rounded tracking-tight uppercase group-hover:text-blue-500 transition-colors">
                  {project.link.replace('https://', '').replace('/', '') || 'case-study.dev'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
