
import React from "react";
import { motion } from 'framer-motion';

interface ResourceLink {
  text: string;
  url: string;
  icon: string;
}

interface CourseResourcesProps {
  resources: ResourceLink[];
  darkMode: boolean;
}

const CourseResources: React.FC<CourseResourcesProps> = ({ 
  resources, 
  darkMode 
}) => {
  return (
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
        {resources.map((resource, index) => (
          <a 
            key={index}
            href={resource.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-4 rounded-lg transition-all flex items-center ${
              darkMode 
                ? 'bg-code-dark-light/50 hover:bg-brand-purple/20 text-brand-cyan' 
                : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
            }`}
          >
            <span className="text-xl mr-2">{resource.icon}</span> {resource.text}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default CourseResources;
