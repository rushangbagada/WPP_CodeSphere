
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import TopicCard from '../components/TopicCard';
import FeatureCard from '../components/FeatureCard';
import { motion } from 'framer-motion';

// Sample topics data
const topics = [
  {
    title: "Data Structures",
    description: "Understanding the core concepts of data structures is essential for efficient problem-solving in programming. Dive into linked lists, stacks, queues, trees, and graphs with our structured learning approach.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    title: "Web Development",
    description: "Master the fundamentals of web development with HTML, CSS, and JavaScript. Learn responsive design, DOM manipulation, and modern frameworks to create interactive and dynamic web applications.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    title: "Competitive Programming",
    description: "Sharpen your coding skills by solving real-world problems in a competitive environment. Participate in contests, improve your speed, and tackle algorithmic challenges effectively.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    title: "Python",
    description: "Master Python programming from basics to advanced concepts. Learn variables, data types, loops, functions, object-oriented programming and build real-world applications.",
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
  }
];

// Sample features data
const features = [
  {
    icon: "🏆",
    title: "All-in-one coding resources platform",
    description: "CodeSphere is India's first all-in-one coding resources platform, offering structured learning in AI/ML, web development, data structures, and competitive programming. With curated content, interactive tracking, and expert guidance, CodeSphere empowers every coder.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    icon: "🚀",
    title: "Track & Compete with Leaderboards",
    description: "Stay motivated with real-time leaderboards that track your progress based on solved questions. Compete with peers, analyze your strengths, and push yourself to new coding heights!",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    icon: "🌟",
    title: "Premium Perks: Mentorship & More",
    description: "Get exclusive mentorship, priority doubt resolution, personalized roadmaps, and expert guidance. Elevate your learning with structured support from top programmers and industry professionals!",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    icon: "🔥",
    title: "Handpicked Questions, Zero Wasted Time",
    description: "Stop wasting hours searching! Get the most relevant, high-quality questions from platforms like LeetCode & CodeForces—perfectly categorized for structured learning and maximum efficiency.",
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    icon: "🎯",
    title: "Master ML & Web Dev Fast",
    description: "Cut through the clutter! Access the best resources, curated roadmaps, and expert-recommended guides—so you spend time learning, not endlessly searching for what to study next.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
  }
];

const Index = () => {
  // Load dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "enabled";
  });

  // Sync dark mode with document and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "disabled");
    }
  }, [darkMode]);

  // Toggle function
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`min-h-screen w-full ${
      darkMode 
        ? 'bg-gradient-to-b from-code-dark to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800'
    } transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <Slideshow />
      
      <section className="py-24 w-full">
        <div className="w-full mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
              Explore Our Topics
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-700'} max-w-3xl mx-auto`}>
              Dive into our comprehensive collection of coding topics designed to take your skills to the next level
            </p>
          </motion.div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {topics.map((topic, index) => (
              <TopicCard 
                key={index}
                title={topic.title}
                description={topic.description}
                image={topic.image}
                index={index}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className={`py-24 w-full ${
        darkMode 
          ? 'bg-gradient-to-b from-code-dark/50 to-code-dark' 
          : 'bg-gradient-to-b from-gray-100 to-gray-200'
      }`}>
        <div className="w-full mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
              CodeSphere: One Stop for Coders
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-700'} max-w-3xl mx-auto`}>
              Discover why thousands of programmers choose our platform for their coding journey
            </p>
          </motion.div>
          
          <div className="space-y-16 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                index={index}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-cyan/10 z-0"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center px-4 relative z-10"
        >
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
            Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-cyan">Coding Journey</span>?
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-700'} mb-10 max-w-3xl mx-auto`}>
            Join thousands of developers already using CodeSphere to build the next generation of software.
          </p>
          <Link 
            to="/login" 
            className="px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-medium rounded-lg hover:opacity-90 transition-all text-lg inline-block"
          >
            Get Started For Free
          </Link>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
