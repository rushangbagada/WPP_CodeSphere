
import React from "react";

interface CourseTopicsProps {
  topics: string[];
  darkMode: boolean;
}

const CourseTopics: React.FC<CourseTopicsProps> = ({ 
  topics, 
  darkMode 
}) => {
  return (
    <div 
      className={`mb-12 rounded-xl p-8 animate-fade-in ${
        darkMode 
          ? 'bg-gradient-to-br from-code-dark to-code-dark-light/90 border border-brand-purple/20' 
          : 'bg-white border border-gray-200'
      } shadow-lg`}
    >
      <h2 className={`text-2xl font-bold mb-6 ${
        darkMode 
          ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-cyan" 
          : "text-gray-800"
      }`}>Course Topics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg transition-all hover:scale-105 ${
              darkMode 
                ? 'bg-code-dark-light/50 hover:bg-brand-purple/20' 
                : 'bg-gray-100 hover:bg-gray-200'
            } cursor-pointer`}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTopics;
