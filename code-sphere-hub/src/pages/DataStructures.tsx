
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Book, TrendingUp, Code } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';

// Sample data structure problems
const dataStructureProblems = [
  { id: 1, name: "Erase First or Second Letter", difficulty: "Easy", category: "Strings" },
  { id: 2, name: "Binary Search Tree Implementation", difficulty: "Medium", category: "Trees" },
  { id: 3, name: "Merge Intervals", difficulty: "Medium", category: "Arrays"},
  { id: 5, name: "Valid Parentheses", difficulty: "Easy", category: "Stacks"},
  { id: 6, name: "Two Sum", difficulty: "Easy", category: "Arrays"},
  { id: 7, name: "Linked List Cycle", difficulty: "Medium", category: "Linked Lists" },
  { id: 9, name: "Reverse Linked List", difficulty: "Easy", category: "Linked Lists" },
  { id: 10, name: "Binary Tree Level Order Traversal", difficulty: "Medium", category: "Trees"}
];

// Categories for filtering
const categories = [
  "All", "Arrays", "Strings", "Linked Lists", "Trees", "Stacks", "Queues", "Graphs"
];

// Topics data (replacing ratings)
const topicStats = [
  { name: "Arrays", count: 42, icon: <Book className="text-brand-purple" size={24} /> },
  { name: "Trees", count: 35, icon: <Code className="text-brand-purple-light" size={24} /> },
  { name: "Strings", count: 28, icon: <Award className="text-brand-purple" size={24} /> },
  { name: "Linked Lists", count: 21, icon: <TrendingUp className="text-brand-cyan" size={24} /> }
];

const DataStructure = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "enabled";
  });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortField, setSortField] = useState<"name" | "difficulty">("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  
  // Create state for tracking done and revisit status by problem ID
  const [doneProblems, setDoneProblems] = useState<Record<number, boolean>>({});
  const [revisitProblems, setRevisitProblems] = useState<Record<number, boolean>>({});
  
  // Filter problems based on selected category
  const filteredProblems = selectedCategory === "All" 
    ? dataStructureProblems 
    : dataStructureProblems.filter(problem => problem.category === selectedCategory);

  // Sort problems based on selected field and direction
  const sortedProblems = [...filteredProblems].sort((a, b) => {
    if (sortField === "name") {
      return sortDirection === "asc" 
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      const difficultyOrder = { "Easy": 1, "Medium": 2, "Hard": 3 };
      const diffA = difficultyOrder[a.difficulty as keyof typeof difficultyOrder];
      const diffB = difficultyOrder[b.difficulty as keyof typeof difficultyOrder];
      return sortDirection === "asc" 
        ? diffA - diffB
        : diffB - diffA;
    } 
  });

  // Handle sort changes
  const handleSort = (field: "name" | "difficulty") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

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

  // Toggle function for dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Toggle function for problem done status
  function toggleProblemDone(id: number) {
    setDoneProblems((prevDone) => ({
      ...prevDone,
      [id]: !prevDone[id]
    }));
  }

  // Toggle function for problem revisit status
  function toggleProblemRevisit(id: number) {
    setRevisitProblems((prevRevisit) => ({
      ...prevRevisit,
      [id]: !prevRevisit[id]
    }));
  }

  return (
    <div className={`min-h-screen  ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-gray-100 text-black'
    } transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="pt-8  pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div  
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-20 text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Data Structures Problems
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
              Master fundamental data structures with our curated collection of problems
            </p>
          </motion.div>
          
          {/* Topics Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {topicStats.map((topic, index) => (
              <Card key={index} className={`p-6 rounded-xl ${
                darkMode 
                  ? 'bg-gray-800/50 border border-blue-500/20' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                  }`}>
                    {topic.icon}
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {topic.name}
                    </p>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                      {topic.count} Problems
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
          
          {/* Categories Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? darkMode 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-600 text-white'
                    : darkMode 
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-blue-500/20' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          {/* Sort Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex flex-wrap gap-4"
          >
            <div>
              <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Sort by:
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleSort("name")}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center ${
                    sortField === "name"
                      ? darkMode 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-600 text-white'
                      : darkMode 
                        ? 'bg-gray-800/50 text-gray-300 hover:bg-blue-500/20' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Name
                  {sortField === "name" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => handleSort("difficulty")}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center ${
                    sortField === "difficulty"
                      ? darkMode 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-600 text-white'
                      : darkMode 
                        ? 'bg-gray-800/50 text-gray-300 hover:bg-blue-500/20' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Difficulty
                  {sortField === "difficulty" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mb-8"
          >
            <Card className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-gray-800/50 border border-blue-500/20' 
                : 'bg-white border border-gray-200'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Why Data Structures Matter
              </h2>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Data structures are essential building blocks in computer science that help organize and store data efficiently. 
                Mastering them is crucial for solving complex problems and building optimized applications. 
                Practice with our collection of problems to improve your understanding and implementation skills.
              </p>
            </Card>
          </motion.div>
          
          {/* Problems Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`rounded-xl overflow-hidden ${
              darkMode 
                ? 'bg-gray-800/50 border border-blue-500/20' 
                : 'bg-white border border-gray-200'
            }`}
          >
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className={darkMode ? 'bg-gray-800' : 'bg-blue-100'}>
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>ID</TableHead>
                    <TableHead 
                      className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} cursor-pointer`}
                      onClick={() => handleSort("name")}
                    >
                      Problem Name
                      {sortField === "name" && (
                        <span className="ml-1">
                          {sortDirection === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Category</TableHead>
                    <TableHead 
                      className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} cursor-pointer`}
                      onClick={() => handleSort("difficulty")}
                    >
                      Difficulty
                      {sortField === "difficulty" && (
                        <span className="ml-1">
                          {sortDirection === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Status</TableHead>
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedProblems.map((problem) => (
                    <TableRow 
                      key={problem.id}
                      className={`${
                        darkMode 
                          ? 'hover:bg-gray-800/50' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <TableCell className={darkMode ? 'text-gray-200' : 'text-gray-800'}>{problem.id}</TableCell>
                      <TableCell className={darkMode ? 'text-gray-200' : 'text-gray-800'}>
                        <a href="https://leetcode.com/problems/two-sum/" className="text-blue-500 hover:underline">
                          {problem.name}
                        </a>
                      </TableCell>
                      <TableCell className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{problem.category}</TableCell>
                      <TableCell>
                        <span className={`px-3 py-1 rounded-full text-white text-xs ${
                          problem.difficulty === 'Easy' ? 'bg-green-500' :
                          problem.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}>
                          {problem.difficulty}
                        </span>
                      </TableCell>
                      <TableCell>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id={`done-${problem.id}`}
                                checked={doneProblems[problem.id] || false}
                                onCheckedChange={() => toggleProblemDone(problem.id)}
                                className={`
                                  ${darkMode 
                                    ? 'border-blue-400 data-[state=checked]:bg-blue-400' 
                                    : 'border-blue-600 data-[state=checked]:bg-blue-600'
                                  } 
                                  transition-colors duration-200
                                `}
                              />
                              <label
                                htmlFor={`done-${problem.id}`}
                                className={`text-sm ${
                                  darkMode 
                                    ? 'text-gray-200 hover:text-gray-100' 
                                    : 'text-gray-700 hover:text-gray-900'
                                } transition-colors duration-200`}
                              >
                                Done
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id={`revisit-${problem.id}`}
                                checked={revisitProblems[problem.id] || false}
                                onCheckedChange={() => toggleProblemRevisit(problem.id)}
                                className={`
                                  ${darkMode 
                                    ? 'border-cyan-400 data-[state=checked]:bg-cyan-400' 
                                    : 'border-cyan-600 data-[state=checked]:bg-cyan-600'
                                  } 
                                  transition-colors duration-200
                                `}
                              />
                              <label
                                htmlFor={`revisit-${problem.id}`}
                                className={`text-sm ${
                                  darkMode 
                                    ? 'text-gray-200 hover:text-gray-100' 
                                    : 'text-gray-700 hover:text-gray-900'
                                } transition-colors duration-200`}
                              >
                                Revisit
                              </label>
                            </div>
                          </div>
                        </TableCell>
                      <TableCell>
                        <a href="https://leetcode.com/problems/two-sum/">
                          <Button className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90">
                            Solve
                          </Button>
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
          
          {/* Learning Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Card className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-gray-800/50 border border-blue-500/20' 
                : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Learning Resources
              </h3>
              <ul className={`list-disc pl-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="mb-2">Interactive visualizations of data structures</li>
                <li className="mb-2">Video tutorials explaining key concepts</li>
                <li className="mb-2">Detailed articles on implementation techniques</li>
                <li className="mb-2">Time and space complexity analysis</li>
              </ul>
            </Card>
            
            <Card className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-gray-800/50 border border-blue-500/20' 
                : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                Study Path
              </h3>
              <ol className={`list-decimal pl-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="mb-2">Learn basic data structures (arrays, strings)</li>
                <li className="mb-2">Move to linear data structures (linked lists, stacks, queues)</li>
                <li className="mb-2">Explore tree-based structures (binary trees, BSTs)</li>
                <li className="mb-2">Master advanced structures (graphs, heaps, hash tables)</li>
              </ol>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataStructure;