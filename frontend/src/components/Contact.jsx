import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, Instagram, ExternalLink } from 'lucide-react';
import useContact from '../hooks/useContact';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { sendMessage, loading, success, error } = useContact();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sent = await sendMessage(formData);
    if (sent) {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-32 px-10 bg-white dark:bg-black transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
            Let's <span className="text-blue-500 italic">collaborate</span> and build something <span className="text-purple-500 italic text-3xl block mt-2 tracking-tighter uppercase font-light">remarkable together.</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 font-light leading-relaxed">
            I'm currently available for freelance work and full-time opportunities. If you have a project that needs a touch of digital magic, feel free to reach out.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-3xl bg-gray-50 dark:bg-zinc-900 flex items-center justify-center border border-gray-100 dark:border-white/5 transition-all group-hover:bg-blue-500/10 group-hover:border-blue-500/30">
                <Mail size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 italic">Direct Mail</div>
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300">hello@anneb.dev</div>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-3xl bg-gray-50 dark:bg-zinc-900 flex items-center justify-center border border-gray-100 dark:border-white/5 transition-all group-hover:bg-purple-500/10 group-hover:border-purple-500/30">
                <Linkedin size={24} className="text-gray-400 group-hover:text-purple-500 transition-colors" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 italic">LinkedIn Profile</div>
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-tight">LinkedIn.com/In/AnneB</div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-100 dark:border-white/5 flex gap-6">
            <a href="#" className="p-3 rounded-2xl bg-gray-100 dark:bg-white/5 text-gray-400 hover:text-blue-500 transition-all border border-transparent hover:border-blue-500/30"><Github size={20} /></a>
            <a href="#" className="p-3 rounded-2xl bg-gray-100 dark:bg-white/5 text-gray-400 hover:text-purple-500 transition-all border border-transparent hover:border-purple-500/30"><Instagram size={20} /></a>
            <a href="#" className="p-3 rounded-2xl bg-gray-100 dark:bg-white/5 text-gray-400 hover:text-blue-400 transition-all border border-transparent hover:border-blue-400/30"><ExternalLink size={20} /></a>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form 
            onSubmit={handleSubmit}
            className="p-10 bg-gray-50 dark:bg-zinc-900 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-2xl relative overflow-hidden flex flex-col gap-8"
          >
            {/* Form decorative background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="space-y-2 relative z-10">
              <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold ml-1">Your Name</label>
              <input 
                id="name"
                type="text" 
                required
                placeholder="Ex. Marcus Aurelius" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-5 bg-white dark:bg-black rounded-3xl border border-gray-100 dark:border-white/5 text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-700 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2 relative z-10">
              <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold ml-1">Email Address</label>
              <input 
                id="email"
                type="email" 
                required
                placeholder="Ex. hello@world.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-5 bg-white dark:bg-black rounded-3xl border border-gray-100 dark:border-white/5 text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-700 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2 relative z-10">
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold ml-1">Message</label>
              <textarea 
                id="message"
                required
                placeholder="What are we building?" 
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-5 bg-white dark:bg-black rounded-3xl border border-gray-100 dark:border-white/5 text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-700 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all shadow-inner resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`relative z-10 w-full py-5 rounded-3xl font-extrabold shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-blue-500/20'
              }`}
            >
              {loading ? 'INITIATING...' : (
                <>
                  TRANSMIT MESSAGE <Send size={20} className="transform rotate-12" />
                </>
              )}
            </button>

            {success && (
              <motion.div 
                className="p-4 bg-green-500/10 border border-green-500/50 text-green-500 rounded-2xl text-center text-sm font-bold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message transmitted successfully!
              </motion.div>
            )}

            {error && (
              <motion.div 
                className="p-4 bg-red-500/10 border border-red-500/50 text-red-500 rounded-2xl text-center text-sm font-bold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

      <footer className="mt-40 border-t border-gray-100 dark:border-white/5 py-12 flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px] uppercase tracking-widest font-mono">
        <div>© 2026 ARCHIVE_SYSTEM_V.1.0 // ALL RIGHTS RESERVED</div>
        <div className="flex gap-10 mt-6 md:mt-0">
          <a href="#" className="hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500">Terms of Service</a>
          <a href="#" className="hover:text-blue-500">Cookie Protocol</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
