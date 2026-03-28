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
              I'm a full-stack software engineer specializing in developing solutions with **JavaScript, Python, and PHP**. I work on projects including building modern web applications, mobile apps, search engine optimization, digital marketing, and making code tutorials.
            </p>
            <p>
              I've helped startups and MSMEs grow and streamline their processes through software solutions. I've also built a community of over 200,000 developers sharing knowledge and mentorship.
            </p>
            <p>
              Lately, I've been diving deeper into the world of artificial intelligence, focusing on integrating AI tools and techniques into modern applications. My work now includes developing AI-powered solutions, creating intelligent applications, and leveraging generative AI to optimize development workflows and deliver cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Right: Access Card */}
        <div className="w-full md:w-1/3 flex justify-center">
          <motion.div 
            className="w-[300px] h-[450px] relative bg-gradient-to-br from-zinc-800 to-black rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden group"
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
