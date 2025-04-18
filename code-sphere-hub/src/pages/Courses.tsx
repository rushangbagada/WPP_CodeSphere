
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseLevel from '../components/CourseLevel';
import CourseFeature from '../components/CourseFeature';
import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';
import CourseVideo from '@/components/CourseVideo'; 
// Course levels data
const courseLevels = [
  {
    level: 1,
    title: "Self-Paced",
    description: "For complete beginners who are starting their coding journey.",
    difficulty: "Beginner",
    price: 999,
    originalPrice: 1299,
    skills: [
      { name: "50+ Problems", highlight: true },
      { name: "40+ Hrs of Content", highlight: false }
    ],
    topics: [
      "Arrays (Core for CP)",
      "Time & Space Complexity",
      "Searching & Sorting",
      "C++ STL & Strings",
      "Debugging"
    ],
    saleEnds: "April 2025"
  },
  {
    level: 2,
    title: "Self-Paced",
    description: "For coders who can solve 1 problem in most CodeForces Div 2 contests.",
    difficulty: "Pre-Intermediate",
    price: 1999,
    originalPrice: 2799,
    skills: [
      { name: "100+ Problems", highlight: true },
      { name: "80+ Hrs of Content", highlight: false }
    ],
    topics: [
      "Prefix Sums",
      "Bit Manipulation",
      "Ad-hoc",
      "Recursion",
      "Backtracking",
      "Number Theory",
      "Stacks & Queues",
      "Adv. Sorting"
    ],
    saleEnds: "April 2025"
  },
  {
    level: 3,
    title: "Self-Paced",
    description: "For coders who can solve 2 problems in most CodeForces Div 2 rounds.",
    difficulty: "Intermediate",
    price: 3399,
    originalPrice: 4299,
    skills: [
      { name: "150+ Problems", highlight: true },
      { name: "100+ Hrs of Content", highlight: false }
    ],
    topics: [
      "Adv. Binary Search",
      "Interactive Problems",
      "2-Pointers",
      "Adv. Number Theory",
      "Combinatorics",
      "Greedy",
      "Hashing",
      "Tries"
    ],
    saleEnds: "April 2025"
  },
  {
    level: 4,
    title: "Self-Paced",
    description: "For coders who can solve 3 problems in most CodeForces Div 2 rounds.",
    difficulty: "Advanced",
    price: 4399,
    originalPrice: 5299,
    skills: [
      { name: "200+ Problems", highlight: true },
      { name: "120+ Hrs of Content", highlight: false }
    ],
    topics: [
      "Dynamic Programming",
      "Segment Trees",
      "Graphs",
      "Disjoint Set Union",
      "Segment Trees",
      "Sparse Tables"
    ],
    saleEnds: "April 2025"
  }
];

// Course features data
const courseFeatures = [
  {
    title: "Progress Tracking & Leaderboard",
    icon: "/lovable-uploads/376a6674-7a50-44e9-847c-ea94a3fe9ec2.png",
    iconAlt: "Chart icon"
  },
  {
    title: "40+ Hrs of Lectures",
    icon: "/lovable-uploads/376a6674-7a50-44e9-847c-ea94a3fe9ec2.png",
    iconAlt: "Video lecture icon"
  },
  {
    title: "100+ Curated Practice Problems",
    icon: "/lovable-uploads/376a6674-7a50-44e9-847c-ea94a3fe9ec2.png",
    iconAlt: "Document icon"
  },
  {
    title: "Internal Coding Contests on Course Topics",
    icon: "/lovable-uploads/376a6674-7a50-44e9-847c-ea94a3fe9ec2.png",
    iconAlt: "Trophy icon"
  },
  {
    title: "Post Contest Discussions for CP contests",
    icon: "/lovable-uploads/376a6674-7a50-44e9-847c-ea94a3fe9ec2.png",
    iconAlt: "Discussion icon"
  },
  {
    title: "Hints & Video Solutions for Problems",
    icon: "/lovable-uploads/376a6674-7a50-44e9-847c-ea94a3fe9ec2.png",
    iconAlt: "Lightbulb icon"
  },
  {
    title: "Doubt Support by High Rated Coders",
    icon: "/lovable-uploads/376a6674-7a50-44e9-847c-ea94a3fe9ec2.png",
    iconAlt: "Question mark icon"
  },
  {
    title: "Guidance By CP Experts",
    icon: "/lovable-uploads/376a6674-7a50-44e9-847c-ea94a3fe9ec2.png",
    iconAlt: "Expert guidance icon"
  }
];

const Courses = () => {
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
    <div className={`min-h-screen ${
      darkMode 
        ? 'bg-gradient-to-b from-code-dark to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-gray-100 text-black'
    } transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
              Our Flagship Courses
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
              Our training is divided into 4 Levels. Depending on your experience level, you can choose to start your learning from any one of them.
            </p>
          </motion.div>

          {/* Course Levels */}
          <div className="space-y-8 mb-20">
            {courseLevels.map((course, index) => (
              <CourseLevel
                key={index}
                level={course.level}
                title={course.title}
                description={course.description}
                difficulty={course.difficulty}
                price={course.price}
                originalPrice={course.originalPrice}
                skills={course.skills}
                topics={course.topics}
                saleEnds={course.saleEnds}
                darkMode={darkMode}
              />
            ))}
          </div>

          {/* Course Features Section */}
          <div className="mb-20">
            <div className="text-center py-10 px-4 mb-10 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan">
              <h2 className="text-3xl font-bold text-white">Course Features</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {courseFeatures.map((feature, index) => (
                <CourseFeature
                  key={index}
                  title={feature.title}
                  icon={feature.icon}
                  iconAlt={feature.iconAlt}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
          
          {/* How to choose section */}
          <div className="mb-10">
            <div className={`rounded-xl p-8 ${
              darkMode 
                ? 'bg-code-dark-light/50 border border-brand-purple/20' 
                : 'bg-white/90 border border-gray-200'
            }`}>
              <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
                How to choose the right course level?
              </h2>
              
              <div className="relative aspect-video rounded-lg overflow-hidden">
                 <CourseVideo videoId="2kCTmlU0RPg" title="How to choose the right course level?" darkMode={darkMode} />
               
              </div>
            </div>
          </div>
          
          <div className="flex justify-center pb-10">
            <Button variant="outline" className="rounded-full">
              <ArrowDown className="mr-2" size={16} />
              Load more
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Courses;
