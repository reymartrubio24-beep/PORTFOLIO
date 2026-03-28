import React from 'react';
import { motion } from 'framer-motion';
import useData from '../hooks/useData';
import { Briefcase, ChevronRight } from 'lucide-react';

const TechStackExperience = () => {
  const { data: experience, loading: expLoading } = useData('experience');

  const techStack = [
    {
      category: "Frontend",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"]
    },
    {
      category: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions"]
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-white dark:bg-black transition-colors duration-500 border-t border-gray-100 dark:border-zinc-900">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left: Tech Stack */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
            <button className="text-sm font-medium text-gray-500 hover:text-blue-500 flex items-center gap-1 group transition-colors">
              View All <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="space-y-10">
            {techStack.map((cat, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-4">{cat.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-4 py-2 bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-zinc-300 rounded text-sm font-medium border border-gray-100 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Experience Timeline */}
        {!expLoading && (
          <div className="w-full lg:w-1/3">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
              <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                <Briefcase size={20} />
              </button>
            </div>

            <div className="relative border-l border-gray-100 dark:border-zinc-800 ml-3 pl-8 space-y-12">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded bg-gray-900 dark:bg-zinc-700 border-4 border-white dark:border-black group-hover:bg-blue-500 transition-colors" />
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">{exp.role}</h4>
                      <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">{exp.company}</p>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 mt-1 uppercase tracking-tighter">{exp.year}</span>
                  </div>
                </div>
              ))}
              
              {/* Legend entry if needed */}
              <div className="relative group grayscale hover:grayscale-0 transition-all opacity-50">
                <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded bg-gray-200 dark:bg-zinc-800 border-4 border-white dark:border-black" />
                <div>
                  <h4 className="text-base font-bold text-gray-400 dark:text-zinc-600">Starting the Journey</h4>
                  <p className="text-sm text-gray-400 dark:text-zinc-700 italic mt-1">First lines of code</p>
                </div>
                <span className="absolute right-0 top-1.5 text-[10px] font-mono text-gray-300 uppercase tracking-tighter">2015</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechStackExperience;
