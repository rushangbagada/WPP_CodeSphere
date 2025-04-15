
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CourseLevelProps {
  level: number;
  title: string;
  description: string;
  difficulty: string;
  price: number;
  originalPrice: number;
  skills: { name: string; highlight: boolean }[];
  topics: string[];
  saleEnds: string;
  darkMode: boolean;
}

const CourseLevel = ({ 
  level, 
  title, 
  description, 
  difficulty, 
  price, 
  originalPrice, 
  skills, 
  topics, 
  saleEnds,
  darkMode
}: CourseLevelProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row rounded-xl overflow-hidden ${
        darkMode 
          ? 'bg-code-dark-light/50 border border-brand-purple/20' 
          : 'bg-white/90 border border-gray-200'
      }`}
    >
      {/* Level Number Column */}
      <div className="w-full md:w-1/6 flex items-center justify-center p-6 text-center bg-gradient-to-b from-brand-purple to-brand-cyan">
        <div className="text-white">
          <div className="text-9xl font-bold">{level}</div>
        </div>
      </div>
      
      {/* Course Details Column */}
      <div className="w-full md:w-3/6 p-6">
        <h3 className="text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
            Level {level} {title}
          </span>
        </h3>
        
        <Badge 
          className={`mt-2 bg-brand-purple text-white`}
        >
          {difficulty}
        </Badge>
        
        <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                skill.highlight 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {skill.name}
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Topics:
          </h4>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <span 
                key={index} 
                className={`inline-block px-3 py-1 rounded-md text-sm ${
                  darkMode 
                    ? 'bg-code-dark border border-brand-purple/30 text-gray-300' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Price Column */}
      <div className="w-full md:w-2/6 p-6 flex flex-col justify-center items-center bg-gradient-to-br from-transparent to-code-dark/10">
        <div className="text-center">
          <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            ₹{price}
          </div>
          <div className={`text-lg line-through ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            ₹{originalPrice}
          </div>
          <div className="text-sm text-red-500 mt-1">
            Sale ends in {saleEnds}
          </div>
          
          <Button 
            className="mt-4 px-6 bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90"
          >
            Explore Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseLevel;
