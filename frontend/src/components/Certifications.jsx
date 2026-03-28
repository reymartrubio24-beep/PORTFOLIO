import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import useData from '../hooks/useData';

const Certifications = () => {
  const { data: certs, loading, error } = useData('certifications');

  if (loading) return null;
  if (error) return null;
  return (
    <section id="certifications" className="py-24 px-10 bg-gray-50 dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-16 flex items-center gap-4">
          <Award className="text-blue-500" /> Professional <span className="text-blue-500 italic lowercase tracking-tight">/ certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl hover:shadow-blue-500/10 transition-all duration-500 group"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-white/10 group-hover:rotate-6 transition-transform">
                  <img src={cert.badge} alt={cert.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-2 rounded-full bg-green-500/10 text-green-500">
                  <CheckCircle size={16} />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">{cert.title}</h3>
              <p className="text-sm text-gray-400 dark:text-gray-500 font-medium mb-1">{cert.issuer}</p>
              <div className="text-xs font-mono text-blue-500 uppercase tracking-widest">{cert.date} ISSUE</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
