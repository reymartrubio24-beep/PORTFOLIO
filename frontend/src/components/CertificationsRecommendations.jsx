import React from 'react';
import { motion } from 'framer-motion';
import useData from '../hooks/useData';
import { Award, ChevronRight, Quote } from 'lucide-react';

const CertificationsRecommendations = () => {
  const { data: certs, loading: certLoading } = useData('certifications');
  const { data: quotes, loading: recLoading } = useData('recommendations');

  // Show headers even if empty as per user request

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-white dark:bg-black transition-colors duration-500 border-t border-gray-100 dark:border-zinc-900">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left: Certifications */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Recent Certifications</h2>
            <button className="text-sm font-medium text-gray-500 hover:text-blue-500 flex items-center gap-1 group transition-colors">
              View All <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="space-y-4">
            {!certLoading && certs.map((cert, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-lg border border-gray-100 dark:border-zinc-800 transition-all hover:bg-white dark:hover:bg-zinc-800 flex justify-between items-center cursor-pointer group"
                whileHover={{ x: 5 }}
              >
                <div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors uppercase tracking-tight">{cert.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-zinc-500 mt-1">{cert.issuer}</p>
                </div>
                <Award size={20} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Recommendations */}
        <div className="w-full lg:w-1/3">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Recommendations</h2>
          </div>

          <div className="space-y-8">
            {!recLoading && quotes.slice(0, 1).map((quote, idx) => (
              <div key={idx} className="relative">
                <p className="text-base text-gray-800 dark:text-zinc-300 italic mb-6 leading-relaxed font-light">
                  "{quote.text}"
                </p>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">{quote.name}</h4>
                  <p className="text-[10px] font-mono text-gray-400 mt-1 uppercase tracking-tighter">{quote.title}</p>
                </div>
              </div>
            ))}
            
            {/* Dots Pagination Placeholder */}
            <div className="flex gap-2 pt-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-black dark:bg-white' : 'bg-gray-200 dark:bg-zinc-800'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsRecommendations;
