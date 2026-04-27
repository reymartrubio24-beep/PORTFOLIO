import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "TechNexus Solutions",
    year: "2023 - Present",
    desc: "Leading the development of high-scale SaaS products using React, Node.js, and AWS architecture."
  },
  {
    role: "Frontend Engineer",
    company: "Creative Pulse Agency",
    year: "2021 - 2023",
    desc: "Crafted interactive web experiences for global brands with a focus on animation and performance."
  },
  {
    role: "Junior Developer",
    company: "StartUp Hub",
    year: "2019 - 2021",
    desc: "Collaborated in an agile team to ship MVP features and maintain cross-browser compatibility."
  },
  {
    role: "BS Computer Science",
    company: "State University of Tech",
    year: "2024 - 2028",
    desc: "Graduated with honors. Specialized in human-computer interaction and database systems."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-10 bg-white dark:bg-black transition-colors duration-500 overflow-hidden relative">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-40 bottom-40 w-[2px] bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-20 hidden md:block" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">The Journey <span className="text-blue-500 italic lowercase font-light tracking-tighter">/ timeline</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="w-full flex flex-col gap-12 relative">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col md:flex-row items-center w-full gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex-1 md:w-1/2 flex flex-col justify-center items-center md:items-end group">
                <div className={`p-8 bg-gray-50 dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-white/5 shadow-lg group-hover:shadow-blue-500/10 transition-all duration-500 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-sm font-mono text-blue-500 mb-2 block">{exp.year}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">{exp.company}</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed max-w-[300px]">{exp.desc}</p>
                </div>
              </div>

              {/* Connector Dot */}
              <div className="relative z-10 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)] md:mx-10" />

              <div className="flex-1 md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
