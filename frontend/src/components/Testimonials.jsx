import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import useData from '../hooks/useData';

const Testimonials = () => {
  const { data: quotes, loading, error } = useData('recommendations');

  if (loading) return null;
  if (error) return null;
  return (
    <section id="testimonials" className="py-32 px-10 bg-white dark:bg-black transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center mb-8">
            <Quote size={40} className="text-blue-500 transform rotate-180" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            What <span className="text-blue-500 italic">visionaries</span> & <span className="text-purple-500 italic">collaborators</span> say about our work.
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
            These kind words from industry colleagues inspire me to keep pushing the boundaries of what's possible in web development.
          </p>
        </motion.div>

        <div className="flex-1 flex flex-col gap-6">
          {quotes.map((quote, idx) => (
            <motion.div 
              key={idx}
              className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-[2rem] border border-gray-100 dark:border-white/5 relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="absolute top-0 right-0 p-8 text-blue-500/5 group-hover:text-blue-500/10 transition-colors">
                <Quote size={80} />
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 italic mb-8 relative z-10 leading-relaxed max-w-[400px]">"{quote.text}"</p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={quote.image} alt={quote.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">{quote.name}</h4>
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">{quote.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
