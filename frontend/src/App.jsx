import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import AIChat from './components/AIChat';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black transition-colors duration-500">
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen key="loader" onFinish={() => setLoading(false)} />}
        </AnimatePresence>
        
        <AnimatePresence>
          {!loading && (
            <div key="main-container">
              <Navbar />
              <motion.main
                 initial={{ opacity: 0, scale: 0.98, filter: "blur(20px)" }}
                 animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </motion.main>
              <AIChat />
              <ScrollToTop />
            </div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
