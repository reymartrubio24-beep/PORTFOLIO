import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ArrowRight } from 'lucide-react';
import axios from 'axios';
import avatarImg from '../assets/profile-light.png';

const AIChat = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { 
      type: 'ai', 
      text: "Hi there! 👋 Thanks for visiting my website. Feel free to ask me anything about programming, web development, or my tech experiences. Let me know how I can help!" 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsgText = message;
    const userMessage = { type: 'user', text: userMsgText };
    setChatHistory(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    try {
      const res = await axios.post('/api/chat', { 
        message: userMsgText,
        history: chatHistory 
      });
      
      const aiResponse = { type: 'ai', text: res.data.text };
      setChatHistory(prev => [...prev, aiResponse]);
    } catch (err) {
      console.error('Chat error:', err);
      setChatHistory(prev => [...prev, { type: 'ai', text: "Sorry, I'm having trouble connecting to my brain right now. Please try again later!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {/* Chat Toggle Button */}
      <motion.button 
        className="bg-zinc-950 dark:bg-zinc-800 text-white px-5 md:px-7 py-3 md:py-4 rounded-2xl flex items-center gap-3 md:gap-4 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6)] font-extrabold hover:scale-[1.05] active:scale-95 transition-all group"
        onClick={() => setShowChat(!showChat)}
      >
        <div className="relative">
          <MessageSquare size={18} className="group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-zinc-950 dark:border-zinc-800" />
        </div>
        <span className="text-[10px] md:text-sm tracking-tight">
          <span className="md:hidden">AI Chat</span>
          <span className="hidden md:inline">Chat with Rey-Dev</span>
        </span>
      </motion.button>

      <AnimatePresence>
        {showChat && (
          <motion.div 
            className="absolute bottom-20 md:bottom-24 right-0 w-[85vw] sm:w-[400px] h-[70vh] md:h-[600px] bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.4)] rounded-[2rem] md:rounded-[2.5rem] flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
          >
            {/* Chat Header */}
            <div className="px-8 py-6 border-b border-gray-100 dark:border-zinc-800 flex justify-between items-center bg-white dark:bg-zinc-950">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm relative">
                  <img src={avatarImg} alt="AI Avatar" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-blue-500/10" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-gray-900 dark:text-white">Chat with Rey-Dev</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-zinc-950 animate-pulse" />
                    <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">Active Now</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setShowChat(false)}
                className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-2xl transition-all text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar bg-white dark:bg-zinc-950/40">
              {chatHistory.map((item, idx) => (
                <div key={idx} className={`flex gap-4 ${item.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  {item.type === 'ai' && (
                    <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 mt-1 border border-gray-100 dark:border-zinc-800 self-start shadow-sm">
                      <img src={avatarImg} alt="AI" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <motion.div 
                    className={`p-5 rounded-[1.8rem] text-sm leading-relaxed shadow-sm max-w-[85%] ${
                      item.type === 'ai' 
                        ? 'bg-gray-50 dark:bg-zinc-900 text-gray-700 dark:text-zinc-200 border border-gray-100 dark:border-white/5 rounded-tl-[0.5rem]' 
                        : 'bg-zinc-950 dark:bg-zinc-100 text-white dark:text-black rounded-tr-[0.5rem] font-bold shadow-zinc-500/10'
                    }`}
                    initial={{ opacity: 0, x: item.type === 'ai' ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    {item.text}
                  </motion.div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-gray-100 dark:border-zinc-800 self-start">
                    <img src={avatarImg} alt="AI" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 bg-gray-50 dark:bg-zinc-900 rounded-[1.8rem] rounded-tl-[0.5rem] border border-gray-100 dark:border-white/5 flex gap-2 items-center">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-8 pt-0 bg-white dark:bg-zinc-950">
              <form onSubmit={handleSend} className="relative group/input">
                <input 
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full pl-6 pr-16 py-5 bg-gray-50 dark:bg-black text-gray-900 dark:text-white rounded-2xl border border-gray-100 dark:border-zinc-800 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-zinc-700 shadow-inner group-focus-within/input:border-blue-500/30"
                />
                <button 
                  type="submit"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-3 bg-zinc-950 dark:bg-zinc-800 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-xl transition-all text-white group-hover/input:scale-95"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
              <div className="flex justify-between items-center mt-5 px-1 font-extrabold text-[#999]">
                <p className="text-[9px] uppercase tracking-widest opacity-80">Syncing with Rey-Dev_AI_V.1.0</p>
                <p className="text-[10px] font-mono">{message.length}/1000</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChat;
