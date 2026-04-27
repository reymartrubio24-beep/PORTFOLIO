import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Database, Cloud, Layout, 
  Settings, Terminal, Globe, Github
} from 'lucide-react';

const techCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="text-blue-500" />,
    skills: ["React 18", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "Vue.js", "Three.js"]
  },
  {
    title: "Backend Engineering",
    icon: <Database className="text-purple-500" />,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "Socket.io"]
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="text-orange-500" />,
    skills: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Vercel", "Linux Admin", "Nginx", "Terraform"]
  }
];

const TechStack = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="tech-stack" className="py-32 px-10 bg-gray-50 dark:bg-zinc-950 transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">Capabilities</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight max-w-2xl mx-auto">
            A comprehensive <span className="text-blue-500 italic">toolkit</span> for building the next generation of web apps.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              className="p-8 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/5 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform duration-500 shadow-inner">
                {React.cloneElement(cat.icon, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">{cat.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.slice(0, showAll ? cat.skills.length : 5).map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-full border border-transparent hover:border-blue-500/30 transition-all hover:text-blue-500"
                  >
                    {skill}
                  </span>
                ))}
                {!showAll && cat.skills.length > 5 && (
                  <span className="px-4 py-2 text-gray-400 dark:text-gray-600 text-sm font-bold italic">+ {cat.skills.length - 5} MORE</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group px-10 py-4 bg-transparent border-2 border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-all flex items-center gap-3 mx-auto"
          >
            {showAll ? 'View Less' : 'View All Technologies'}
            <motion.div
              animate={{ y: showAll ? -2 : 2 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
            >
              <Terminal size={18} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
