
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface FAQItemProps {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  darkMode: boolean;
}

const FAQItem = ({ id, icon, title, subtitle, content, darkMode }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`flex items-center justify-between rounded-lg min-w-[300px] sm:min-w-[600px] max-w-3xl p-4 my-2 transition-all duration-300 ease-in-out ${
        isOpen 
          ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-white"
          : darkMode 
            ? "bg-gradient-to-br from-code-dark to-code-dark-light/80 border-brand-purple/20 border text-gray-200" 
            : "bg-white border-gray-200 border text-gray-700"
      }`}>
        <div className="flex items-center flex-grow">
          <img src={icon} alt={`${title} Icon`} className="w-10 h-10" />
          <div className="ml-5">
            <h1 className="text-xl font-semibold m-0">{title}</h1>
            <p className="text-base m-0">{subtitle}</p>
          </div>
        </div>
        <div className="cursor-pointer" onClick={toggleAnswer}>
          {isOpen ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
        </div>
      </div>
      <div 
        className={`min-w-[300px] sm:min-w-[550px] max-w-2xl mx-auto border rounded-lg p-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? "block max-h-[500px] opacity-100 my-4" 
            : "hidden max-h-0 opacity-0"
        } ${
          darkMode 
            ? "bg-gradient-to-br from-code-dark to-code-dark-light/90 border-brand-purple/30 text-gray-200" 
            : "bg-white border-gray-200 text-gray-700"
        }`}
      >
        {content}
      </div>
    </>
  );
};

const FAQ = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const faqItems = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/684/684831.png",
      title: "Course Structure",
      subtitle: "Levels, Hours of content, languages, etc.",
      content: (
        <div>
          <h3 className="font-bold text-lg mb-2 text-brand-cyan">What is the course structure?</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Our entire CP training is divided into 4 Levels (or courses).</li>
            <li>Each level includes video lessons, practice problems, and quizzes.</li>
            <li>Live classes are conducted weekly for discussions.</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      icon: "https://cdn-icons-png.flaticon.com/512/2089/2089784.png",
      title: "Classes",
      subtitle: "Timings, Recordings, Demo Classes, etc.",
      content: (
        <div>
          <h3 className="font-bold text-lg mb-2 text-brand-cyan">What are the timings of live lectures?</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Most of the classes are held on weekends in two slots: 2-4 pm or 6-8 pm IST.</li>
            <li>Some weekday classes occur at 8-10 pm IST.</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      icon: "https://cdn-icons-png.flaticon.com/512/1176/1176902.png",
      title: "Practice Problems",
      subtitle: "Total Problems, Source, Difficulty Range, etc.",
      content: (
        <div>
          <h3 className="font-bold text-lg mb-2 text-brand-cyan">What is the total number of problems in a course level?</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Each course level contains 100+ curated problems.</li>
            <li>Additional bonus problems are provided weekly.</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      icon: "https://cdn-icons-png.flaticon.com/512/1176/1176902.png",
      title: "What is CodeSphere?",
      subtitle: "Overview of our platform and offerings",
      content: (
        <div>
          <h3 className="font-bold text-lg mb-2 text-brand-cyan">What is CodeSphere?</h3>
          <p>CodeSphere is a comprehensive platform for developers that provides tools, resources, and a community to help you build better software. Our platform includes coding environments, collaboration tools, deployment options, and educational resources.</p>
        </div>
      )
    },
    {
      id: 5,
      icon: "https://cdn-icons-png.flaticon.com/512/2089/2089784.png",
      title: "Premium Benefits",
      subtitle: "What's included in the premium plan?",
      content: (
        <div>
          <h3 className="font-bold text-lg mb-2 text-brand-cyan">What are the benefits of the premium plan?</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Unlimited access to all course materials and resources</li>
            <li>Priority support from our team of experts</li>
            <li>One-on-one mentoring sessions with industry professionals</li>
            <li>Exclusive access to advanced workshops and webinars</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gradient-to-br from-code-dark to-code-dark-light" : "bg-gray-50"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="max-w-4xl mx-auto pt-28 pb-12 px-4"> {/* Added pt-28 to create space below navbar */}
        <h1 className={`text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12 ${
          darkMode 
            ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan" 
            : "text-gray-800"
        }`}>Frequently Asked Questions</h1>
        <div className="flex flex-col items-center justify-center mt-6">
          {faqItems.map((item) => (
            <FAQItem 
              key={item.id}
              id={item.id}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              content={item.content}
              darkMode={darkMode}
            />
          ))}
        </div>
        <div className="text-center mt-16">
          <h2 className={`text-2xl md:text-4xl font-bold mb-6 ${
            darkMode 
              ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-cyan" 
              : "text-gray-800"
          }`}>Still have questions?</h2>
          <Link to="/contactus">
            <button 
              className={`font-medium py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg ${
                darkMode 
                  ? "bg-gradient-to-r from-brand-purple to-brand-cyan hover:opacity-90 text-white" 
                  : "bg-brand-blue hover:bg-brand-blue-dark text-white"
              }`}
            >
              Contact us
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
