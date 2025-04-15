
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

interface LessonTemplateProps {
  title: string;
  videoId: string;
  oneShot: string;
  practiceLink: string;
  parentPath: string;
  parentTitle: string;
}

const LessonTemplate: React.FC<LessonTemplateProps> = ({ 
  title, 
  videoId,
  oneShot,
  practiceLink,
  parentPath,
  parentTitle
}) => {
  const [darkMode, setDarkMode] = useState(true);
  
  // Sync dark mode with document and localStorage
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
      
      <div className="pt-28 pb-12 px-4 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className={`text-4xl font-bold mb-4 ${
            darkMode 
              ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan" 
              : "text-gray-800"
          }`}>Learn {title}</h1>
        </motion.div>

        <div className="mb-12">
          <div className={`rounded-xl overflow-hidden shadow-lg ${
            darkMode ? 'border border-brand-purple/20' : ''
          }`}>
            <iframe 
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-gradient-to-br from-code-dark to-code-dark-light/90 border border-brand-purple/20' 
                : 'bg-white border border-gray-200'
            } shadow-lg`}
          >
            <h2 className={`text-2xl font-bold mb-4 text-center ${
              darkMode ? 'text-brand-cyan' : 'text-blue-600'
            }`}>1-SHOT</h2>
            <a 
              href={oneShot}
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-block w-full py-3 px-6 rounded-lg text-center font-bold transition-all ${
                darkMode 
                  ? 'bg-brand-purple text-white hover:bg-brand-purple-light' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              CLICK TO LEARN
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-gradient-to-br from-code-dark to-code-dark-light/90 border border-brand-purple/20' 
                : 'bg-white border border-gray-200'
            } shadow-lg`}
          >
            <h2 className={`text-2xl font-bold mb-4 text-center ${
              darkMode ? 'text-brand-cyan' : 'text-blue-600'
            }`}>PRACTICE</h2>
            <a 
              href={practiceLink}
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-block w-full py-3 px-6 rounded-lg text-center font-bold transition-all ${
                darkMode 
                  ? 'bg-brand-cyan text-white hover:bg-brand-cyan/80' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              TEST YOUR KNOWLEDGE
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link 
            to={parentPath}
            className={`inline-block py-2 px-4 rounded-lg transition-all ${
              darkMode 
                ? 'text-brand-purple hover:text-brand-purple-light' 
                : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            ← Back to {parentTitle}
          </Link>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LessonTemplate;
