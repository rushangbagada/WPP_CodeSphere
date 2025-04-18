
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  index: number;
  darkMode: boolean;
}

const FeatureCard = ({ icon, title, description, image, index, darkMode }: FeatureCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex ${
        isEven 
          ? 'flex-col md:flex-row' 
          : 'flex-col md:flex-row-reverse'
      } items-center ${
        darkMode 
          ? 'bg-gradient-to-br from-code-dark to-code-dark-light/90 border-brand-purple/20' 
          : 'bg-white/90 border-gray-200'
      } rounded-xl p-6 shadow-lg border
        hover:shadow-brand-cyan/20 transition-all duration-500 max-w-4xl ${isEven ? 'md:ml-0' : 'md:mr-0 md:ml-auto'}`}
    >
      <div className={`md:w-3/5 p-4 ${isEven ? 'md:pr-6' : 'md:pl-6'}`}>
        <h3 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4 flex items-center`}>
          <span className="mr-2 text-3xl">{icon}</span>
          <span className="bg-clip-text  text-transparent bg-gradient-to-r from-brand-purple-light to-brand-cyan">
            {title}
          </span>
        </h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
          {description}
        </p>
        
      </div>
      <div className="md:w-2/5 mt-6 md:mt-0 overflow-hidden rounded-lg">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity z-10"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto rounded-lg transition-transform duration-700 group-hover:scale-110"
            style={{ boxShadow: 'none' }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
