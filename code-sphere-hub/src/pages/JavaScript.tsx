
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const JavaScript = () => {
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

  const jsTopics = [
    { title: "Variables and Data Types", path: "/javascript/variables-data-types" },
    { title: "Operators and Conditional Statements", path: "/javascript/operators-conditionals" },
    { title: "Loops and Strings", path: "/javascript/loops-strings" },
    { title: "Functions and Methods", path: "/javascript/functions-methods" },
    { title: "DOM - Part 1", path: "/javascript/dom-1" },
    { title: "DOM - Part 2", path: "/javascript/dom-2" },
    { title: "Events in JavaScript", path: "/javascript/events" },
    { title: "Classes and Objects", path: "/javascript/classes-objects" },
    { title: "Callbacks, Promises & Async Await", path: "/javascript/callbacks" }
  ];

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
          }`}>JavaScript Course</h1>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Master JavaScript fundamentals and advanced concepts for web development
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`rounded-xl p-8 ${
            darkMode 
              ? 'bg-gradient-to-br from-code-dark to-code-dark-light/90 border border-brand-purple/20' 
              : 'bg-white border border-gray-200'
          } shadow-lg mb-12`}
        >
          <h2 className={`text-2xl font-bold mb-6 ${
            darkMode 
              ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-cyan" 
              : "text-gray-800"
          }`}>JavaScript Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jsTopics.map((topic, index) => (
              <Link 
                key={index}
                to={topic.path}
                className={`p-4 rounded-lg transition-all hover:scale-105 ${
                  darkMode 
                    ? 'bg-code-dark-light/50 hover:bg-brand-purple/20 text-brand-cyan' 
                    : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
                } flex justify-between items-center`}
              >
                <span>{topic.title}</span>
                <span>→</span>
              </Link>
            ))}
          </div>
        </motion.div>

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
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-4 rounded-lg transition-all flex items-center ${
                darkMode 
                  ? 'bg-code-dark-light/50 hover:bg-brand-purple/20 text-brand-cyan' 
                  : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
              }`}
            >
              <span className="text-xl mr-2">📚</span> JavaScript MDN Docs
            </a>
            <a 
              href="https://www.w3schools.com/js/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-4 rounded-lg transition-all flex items-center ${
                darkMode 
                  ? 'bg-code-dark-light/50 hover:bg-brand-purple/20 text-brand-cyan' 
                  : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
              }`}
            >
              <span className="text-xl mr-2">🔍</span> JavaScript Tutorials on W3Schools
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link 
            to="/webdev"
            className={`inline-block py-2 px-4 rounded-lg transition-all ${
              darkMode 
                ? 'text-brand-purple hover:text-brand-purple-light' 
                : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            ← Back to Web Development
          </Link>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default JavaScript;
