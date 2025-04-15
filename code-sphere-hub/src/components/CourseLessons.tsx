
import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

interface LessonLink {
  title: string;
  path: string;
}

interface CourseLessonsProps {
  lessons: LessonLink[];
  darkMode: boolean;
}

const CourseLessons: React.FC<CourseLessonsProps> = ({ 
  lessons, 
  darkMode 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={`rounded-xl p-8 ${
        darkMode 
          ? 'bg-gradient-to-br from-code-dark to-code-dark-light/90 border border-brand-purple/20' 
          : 'bg-white border border-gray-200'
      } shadow-lg`}
    >
      <h2 className={`text-2xl font-bold mb-6 ${
        darkMode 
          ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-cyan" 
          : "text-gray-800"
      }`}>Topic-Specific Lessons</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson, index) => (
          <Link 
            key={index}
            to={lesson.path}
            className={`p-4 rounded-lg transition-all hover:scale-105 ${
              darkMode 
                ? 'bg-code-dark-light/50 hover:bg-brand-purple/20 text-brand-cyan' 
                : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
            } flex justify-between items-center`}
          >
            <span>{lesson.title}</span>
            <span>→</span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default CourseLessons;
