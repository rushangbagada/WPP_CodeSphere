
import { motion } from 'framer-motion';

interface CourseFeatureProps {
  title: string;
  icon: string;
  iconAlt: string;
  darkMode: boolean;
}

const CourseFeature = ({ title, icon, iconAlt, darkMode }: CourseFeatureProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col items-center text-center p-6 rounded-xl ${
        darkMode 
          ? 'bg-code-dark-light/50 border border-brand-purple/20' 
          : 'bg-white/90 border border-gray-200'
      } hover:shadow-lg transition-all duration-300`}
    >
      <div className={`w-16 h-16 mb-4 rounded-full flex items-center justify-center ${
        darkMode ? 'bg-brand-purple/20' : 'bg-brand-purple/10'
      }`}>
        <img src={icon} alt={iconAlt} className="w-8 h-8" />
      </div>
      <h3 className={`text-lg font-semibold ${
        darkMode ? 'text-gray-200' : 'text-gray-800'
      }`}>
        {title}
      </h3>
    </motion.div>
  );
};

export default CourseFeature;
