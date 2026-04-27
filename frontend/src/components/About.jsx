import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto bg-white dark:bg-black transition-colors duration-500">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        {/* Left: Bio */}
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">About</h2>
          <div className="text-lg text-gray-700 dark:text-zinc-400 font-light leading-relaxed space-y-6">
            <p>
              I’m an IT student currently building my skills in web development. I work with technologies like HTML, CSS, JavaScript, and PHP, and I’m currently learning React.js to create more dynamic and modern web applications.
            </p>
            <p>
              I enjoy developing simple systems, experimenting with new ideas, and improving my coding skills through hands-on practice. Some of my projects include small applications like a voting system and other personal builds that help me understand real-world development.
            </p>
            <p>
              Right now, I’m focused on growing as a developer by learning full-stack development, working with databases, and understanding how real systems are designed and built. I’m also interested in exploring AI and modern web technologies in the future.
            </p>
            <p>
              I’m still in the learning stage, but I’m consistent, motivated, and committed to improving every day.
            </p>
            <p className="font-bold text-gray-900 dark:text-white pt-4">
              REY-DEV — Developer in Progress.
            </p>
          </div>
        </div>

        {/* Right: Access Card */}
        <div className="w-full md:w-1/3 flex justify-center mt-12 md:mt-0">
          <motion.div 
            className="w-[280px] h-[420px] md:w-[300px] md:h-[450px] relative bg-gradient-to-br from-zinc-800 to-black rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden group scale-90 md:scale-100"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Glossy top overlay */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            <div className="space-y-4">
              <Terminal size={40} className="text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white tracking-widest mt-6">REY-DEV</h3>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest -mt-2">DEVELOPER ACCESS CARD</p>
            </div>

            <div className="space-y-12">
              <div className="space-y-1">
                <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">FOUNDING MEMBER</p>
                <p className="text-xl font-bold text-white uppercase italic">REY</p>
              </div>

              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">RANK</p>
                  <p className="text-sm font-bold text-zinc-400 uppercase italic tracking-tighter">ELITE TAMBAY</p>
                </div>
                <div className="bg-white/5 p-2 rounded-xl border border-white/5 backdrop-blur-sm">
                  <QrCode size={48} className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
