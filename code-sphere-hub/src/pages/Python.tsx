
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CourseHeader from "../components/CourseHeader";
import CourseVideo from "../components/CourseVideo";
import CourseTopics from "../components/CourseTopics";
import CourseResources from "../components/CourseResources";
import CourseLessons from "../components/CourseLessons";

const Python = () => {
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

  const topics = [
    "Variables and Data Types",
    "String and Conditional Statements",
    "List and Tuple",
    "Dictionary and Set",
    "Loops",
    "Functions and Recursion",
    "File Input/Output",
    "OOP Basics - Part 1",
    "OOP Basics - Part 2"
  ];

  const subPages = [
    { title: "Variables and Data Types", path: "/python/variables-data-types" },
    { title: "Strings and Conditionals", path: "/python/strings-conditionals" },
    { title: "List and Tuple", path: "/python/list-tuple" },
    { title: "Dictionary and Set", path: "/python/dictionary-set" },
    { title: "Loops", path: "/python/loops" },
    { title: "Functions and Recursion", path: "/python/functions-recursion" },
    { title: "File Input/Output", path: "/python/file-io" },
    { title: "OOP Basics - Part 1", path: "/python/oop-basics-1" },
    { title: "OOP Basics - Part 2", path: "/python/oop-basics-2" }
  ];

  const resources = [
    { text: "Python Official Documentation", url: "https://docs.python.org/3/", icon: "📚" },
    { text: "Python Tutorials on W3Schools", url: "https://www.w3schools.com/python/", icon: "🔍" }
  ];

  return (
    <div className={`min-h-screen ${
      darkMode 
        ? 'bg-gradient-to-b from-code-dark to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800'
    } transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-28 pb-12 px-4 max-w-6xl mx-auto">
        <CourseHeader 
          title="Python Course Overview" 
          subtitle="Master Python programming from basics to advanced concepts" 
          darkMode={darkMode} 
        />

        <CourseVideo 
          videoId="ERCMXc8x7mc" 
          title="Python Tutorial for Beginners - Full Course" 
          darkMode={darkMode} 
        />

        <CourseTopics 
          topics={topics} 
          darkMode={darkMode} 
        />

        <CourseResources 
          resources={resources} 
          darkMode={darkMode} 
        />

        <CourseLessons 
          lessons={subPages} 
          darkMode={darkMode} 
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Python;
