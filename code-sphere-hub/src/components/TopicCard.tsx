
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface TopicCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  darkMode: boolean;
}

const TopicCard = ({ title, description, image, index, darkMode }: TopicCardProps) => {
  const isEven = index % 2 === 0;

  // Determine the link based on the title
  const getTopicLink = (title: string) => {
    switch (title) {
      case "Python":
        return "/python";
      case "Web Development":
        return "/webdev";
      case "Data Structures":
        return "/datastructures";
      case "Competitive Programming":
        return "/competitiveprogramming";
      case "Mobile App Development":
        return "/mobile-development";
      default:
        return "/";
    }
  };

  // Determine the button text based on the title
  const getButtonText = (title: string) => {
    switch (title) {
      case "Python":
      case "Web Development":
      case "Web Programming":
        return "Start Learning";
      case "Data Structures":
      case "Competitive Programming":
        return "Practice Problems";
      default:
        return "Explore";
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} ${
        darkMode 
          ? 'bg-gradient-to-br from-code-dark to-code-dark-light/80 border-brand-purple/20' 
          : 'bg-white/90 border-gray-200'
      } rounded-xl overflow-hidden shadow-xl hover:shadow-brand-cyan/20 transition-all duration-500 border`}
    >
      <div className={`md:w-3/5 p-8 ${isEven ? 'md:pr-4' : 'md:pl-4'}`}>
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-cyan mb-4">
          {title}
        </h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
          {description}
        </p>
        <Link to={getTopicLink(title)}>
          <Button className="mt-6 px-4 rounded-xl py-2 bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-medium hover:opacity-90 transition-opacity">
            {getButtonText(title)}
          </Button>
        </Link>
      </div>
      <div className="md:w-2/5 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ boxShadow: 'none' }}
        />
      </div>
    </motion.div>
  );
};

export default TopicCard;
