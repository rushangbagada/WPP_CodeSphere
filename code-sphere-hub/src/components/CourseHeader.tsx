
import React from "react";

interface CourseHeaderProps {
  title: string;
  subtitle: string;
  darkMode: boolean;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ 
  title, 
  subtitle, 
  darkMode 
}) => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
        darkMode 
          ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan" 
          : "text-gray-800"
      }`}>{title}</h1>
      <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default CourseHeader;
