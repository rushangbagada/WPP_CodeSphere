import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactUs = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { addToast } = useToast();
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast({
      title: "Query Submitted!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${darkMode ? "from-code-dark to-code-dark-light" : "from-gray-50 to-gray-100"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="pt-28 pb-12 px-4 max-w-4xl mx-auto"> {/* Added pt-28 to create space below navbar */}
        <h1 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${
          darkMode 
            ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan" 
            : "text-gray-800"
        }`}>Contact Us</h1>
        
        <p className={`text-center mb-4 max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Fill out the form below, and we'll be in touch shortly!</p>
        <p className={`text-center mb-6 max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Check out the <a href="/faq" className="text-brand-cyan hover:text-brand-purple-light transition-colors">FAQs</a> before submitting your query.
        </p>
        
        <form onSubmit={handleSubmit} className={`max-w-md mx-auto p-6 rounded-lg shadow-md border mt-8 ${
          darkMode 
            ? "bg-gradient-to-br from-code-dark to-code-dark-light/90 border-brand-purple/20" 
            : "bg-white border-gray-200"
        }`}>
          <div className="mb-4">
            <label className={`block text-left font-semibold mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Your email address:</label>
            <input 
              type="email" 
              placeholder="abc@gmail.com" 
              className={`w-full p-2 rounded-lg border focus:outline-none transition-colors ${
                darkMode 
                  ? "bg-code-dark-light border-brand-purple/30 text-white focus:border-brand-cyan" 
                  : "bg-gray-50 border-gray-300 text-gray-800 focus:border-brand-blue"
              }`}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className={`block text-left font-semibold mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Query Title:</label>
            <input 
              type="text" 
              placeholder="Title" 
              className={`w-full p-2 rounded-lg border focus:outline-none transition-colors ${
                darkMode 
                  ? "bg-code-dark-light border-brand-purple/30 text-white focus:border-brand-cyan" 
                  : "bg-gray-50 border-gray-300 text-gray-800 focus:border-brand-blue"
              }`}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className={`block text-left font-semibold mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Query Description:</label>
            <Textarea 
              placeholder="Description" 
              className={`w-full p-2 rounded-lg border resize-y min-h-[100px] focus:outline-none transition-colors ${
                darkMode 
                  ? "bg-code-dark-light border-brand-purple/30 text-white focus:border-brand-cyan" 
                  : "bg-gray-50 border-gray-300 text-gray-800 focus:border-brand-blue"
              }`}
              required
            />
          </div>
          
          <button 
            type="submit"
            className={`font-medium py-3 px-8 rounded-lg w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
              darkMode 
                ? "bg-gradient-to-r from-brand-purple to-brand-cyan hover:opacity-90 text-white" 
                : "bg-brand-blue hover:bg-brand-blue-dark text-white"
            }`}
          >
            Submit Query
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;