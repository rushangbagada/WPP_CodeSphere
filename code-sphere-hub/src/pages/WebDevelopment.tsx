
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const [darkMode, setDarkMode] = useState(true);
  

  useEffect(() => {
    const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("dark-mode", darkMode ? "disabled" : "enabled");
  };

  return (
    <div className={`min-h-screen ${
      darkMode 
        ? 'bg-gradient-to-b from-code-dark to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800'
    } transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-28 pb-12 px-4 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode 
              ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan" 
              : "text-gray-800"
          }`}>Web Development Course Overview</h1>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Learn modern web development from fundamentals to advanced concepts
          </p>
        </motion.div>

        <div className="mb-12">
          <div className={`rounded-xl overflow-hidden shadow-lg ${
            darkMode ? 'border border-brand-purple/20' : ''
          }`}>
            <iframe 
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/VlPiVmYuoqw" 
              title="JavaScript Tutorial" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`rounded-xl p-6 ${
              darkMode 
                ? 'bg-gradient-to-br from-code-dark to-code-dark-light/90 border border-brand-purple/20' 
                : 'bg-white border border-gray-200'
            } shadow-lg`}
          >
            <h2 className={`text-2xl font-bold mb-6 text-center ${
              darkMode 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-cyan" 
                : "text-gray-800"
            }`}>HTML</h2>
            <div className="text-center mb-6">
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Learn the foundation of web development with HTML
              </p>
            </div>
            <a 
              href="https://www.w3schools.com/html/"
              className={`inline-block w-full py-3 px-6 rounded-lg text-center font-bold transition-all ${
                darkMode 
                  ? 'bg-brand-purple text-white hover:bg-brand-purple-light' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Explore HTML Topics
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`rounded-xl p-6 ${
              darkMode 
                ? 'bg-gradient-to-br from-code-dark to-code-dark-light/90 border border-brand-purple/20' 
                : 'bg-white border border-gray-200'
            } shadow-lg`}
          >
            <h2 className={`text-2xl font-bold mb-6 text-center ${
              darkMode 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-cyan" 
                : "text-gray-800"
            }`}>CSS</h2>
            <div className="text-center mb-6">
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Style your websites with CSS
              </p>
            </div>
            <Link 
              to="/css"
              className={`inline-block w-full py-3 px-6 rounded-lg text-center font-bold transition-all ${
                darkMode 
                  ? 'bg-brand-purple text-white hover:bg-brand-purple-light' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Explore CSS Topics
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`rounded-xl p-6 ${
              darkMode 
                ? 'bg-gradient-to-br from-code-dark to-code-dark-light/90 border border-brand-purple/20' 
                : 'bg-white border border-gray-200'
            } shadow-lg`}
          >
            <h2 className={`text-2xl font-bold mb-6 text-center ${
              darkMode 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-cyan" 
                : "text-gray-800"
            }`}>JavaScript</h2>
            <div className="text-center mb-6">
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Add interactivity with JavaScript
              </p>
            </div>
            <Link 
              to="/javascript"
              className={`inline-block w-full py-3 px-6 rounded-lg text-center font-bold transition-all ${
                darkMode 
                  ? 'bg-brand-purple text-white hover:bg-brand-purple-light' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Explore JavaScript Topics
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className={`text-2xl font-bold mb-6 ${
            darkMode 
              ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-cyan" 
              : "text-gray-800"
          }`}>Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-4 rounded-lg transition-all flex items-center ${
                darkMode 
                  ? 'bg-code-dark-light/50 hover:bg-brand-purple/20 text-brand-cyan' 
                  : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
              }`}
            >
              <span className="text-xl mr-2">📚</span> MDN Web Docs
            </a>
            <a 
              href="https://www.w3schools.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-4 rounded-lg transition-all flex items-center ${
                darkMode 
                  ? 'bg-code-dark-light/50 hover:bg-brand-purple/20 text-brand-cyan' 
                  : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
              }`}
            >
              <span className="text-xl mr-2">🔍</span> W3Schools Tutorials
            </a>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WebDevelopment;
