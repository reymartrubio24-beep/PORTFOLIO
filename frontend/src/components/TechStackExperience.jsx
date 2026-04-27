import React from 'react';
import { motion } from 'framer-motion';
import useData from '../hooks/useData';
import { Briefcase, ChevronRight } from 'lucide-react';

const TechStackExperience = () => {
  const { data: experience, loading: expLoading } = useData('experience');

  const techStack = [
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript", color: "text-[#F7DF1E]", icon: <><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.29 14.99c-.23.11-.47.16-.73.16-.39 0-.71-.14-.95-.41-.24-.27-.36-.67-.36-1.2h1.29c.01.27.06.44.13.52.07.08.18.12.33.12.14 0 .25-.04.32-.12.07-.08.11-.19.11-.33 0-.17-.06-.3-.18-.39-.12-.09-.37-.2-.76-.34-.49-.17-.83-.35-1.02-.54-.19-.19-.29-.46-.29-.81 0-.39.14-.71.41-.95.27-.24.62-.36 1.05-.36.32 0 .61.06.87.18.26.12.44.29.54.51s.15.49.15.82h-1.27c-.01-.22-.06-.38-.15-.46-.09-.08-.22-.12-.39-.12-.13 0-.23.04-.3.12s-.1.19-.1.33c0 .13.06.24.18.33.12.09.39.2.8.34.48.16.82.34 1.01.53.19.19.29.47.29.83 0 .44-.15.8-.46 1.08-.31.28-.71.42-1.2.42zM7.5 13h1.2v3.7c0 .48-.12.83-.37 1.06-.25.23-.62.34-1.12.34-.33 0-.59-.04-.79-.11-.2-.07-.4-.18-.61-.34l.43-.91c.14.1.28.17.4.21.13.04.25.06.37.06.15 0 .26-.04.34-.12.08-.08.11-.22.11-.42V13z" fill="currentColor"/></> },
        { name: "React", color: "text-[#61DAFB]", icon: <><g transform="translate(12,12) scale(0.8)"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1.2" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></g></> },
        { name: "Next.js", color: "text-black dark:text-white", icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 15.5l-4.5-5.5V17h-1.3V7h1.1l4.4 5.4V7h1.3v10.5h-1z" fill="currentColor" /> }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", color: "text-[#339933]", icon: <path d="M12 6.5l4-2.3v4.6l-4 2.3-4-2.3v-4.6l4 2.3zm8-4.6l-8-4.6-8 4.6v9.2l8 4.6 8-4.6v-9.2z" fill="currentColor" /> },
        { name: "PHP", color: "text-[#777BB4]", icon: <path d="M12 2L2 7l10 5 10-5-10-5zm0 15l-10-5v5l10 5 10-5v-5l-10 5z" fill="currentColor" /> },
        { name: "Laravel", color: "text-[#FF2D20]", icon: <><path d="M12 2L2 7l10 5 10-5-10-5zm0 15l-10-5v5l10 5 10-5v-5l-10 5z" fill="currentColor" opacity=".5" /></> }
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "Docker", color: "text-[#2496ED]", icon: <><path d="M13.98 9.22h2.35v2.36h-2.35V9.22zm2.66 0h2.36v2.36h-2.36V9.22zm2.66 0h2.35v2.36h-2.35V9.22zM13.98 6.55h2.35v2.36h-2.35V6.55zm2.66 0h2.36v2.36h-2.36V6.55zM13.98 3.88h2.35v2.36h-2.35V3.88zm-11.23 8h2.36v2.36h-2.36v-2.36zm2.66 0h2.36v2.36h-2.36v-2.36zm2.66 0h2.36v2.36h-2.36v-2.36zm2.67 0h2.35v2.36h-2.35v-2.36zM3.41 12.56l-.01 1.63s-.1 3.51 3.73 3.51c3.83 0 3.73-3.51 3.73-3.51l-.01-1.63H3.41zM11.23 7.89c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" fill="currentColor" /></> },
        { name: "GitHub Actions", color: "text-black dark:text-white", icon: <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026.798-.222 1.653-.333 2.503-.337.85.004 1.705.115 2.503.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" fill="currentColor" /> }
      ]
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
                      className="flex items-center gap-2.5 px-4 py-2 bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-zinc-300 rounded text-sm font-medium border border-gray-100 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 transition-all cursor-default group"
                    >
                      <svg 
                        className={`w-4 h-4 ${skill.color} group-hover:scale-110 transition-transform`} 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        {skill.icon}
                      </svg>
                      {skill.name}
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
