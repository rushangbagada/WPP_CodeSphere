import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Award, Clock, TrendingUp, Code } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample competitive programming problems
const competitiveProblems = [
  { id: 4, name: "Longest Palindromic Substring", difficulty: "Medium", type: "Dynamic Programming" },
  { id: 8, name: "Maximum Subarray", difficulty: "Easy", type: "Algorithms" },
  { id: 11, name: "Course Schedule", difficulty: "Medium", type: "Graphs" },
  { id: 12, name: "Minimum Path Sum", difficulty: "Medium", type: "Dynamic Programming" },
  { id: 13, name: "Sliding Window Maximum", difficulty: "Hard", type: "Algorithms" },
  { id: 14, name: "Word Break", difficulty: "Medium", type: "Dynamic Programming" },
  { id: 15, name: "Regular Expression Matching", difficulty: "Hard", type: "Dynamic Programming" },
  { id: 16, name: "Trapping Rain Water", difficulty: "Hard", type: "Algorithms" }
];

// Contest data
const upcomingContests = [
  { id: 1, name: "Weekly Contest 342", date: "Apr 20, 2025", time: "10:30 AM", duration: "1.5 hours" },
  { id: 2, name: "Biweekly Contest 123", date: "Apr 27, 2025", time: "09:00 AM", duration: "2 hours" },
  { id: 3, name: "Monthly Challenge", date: "May 5, 2025", time: "11:00 AM", duration: "3 hours" }
];

interface ProblemStatus {
  isDone: boolean;
  toRevisit: boolean;
}

const CompetitiveProgramming = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "enabled";
  });
  
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [sortField, setSortField] = useState<"name" | "difficulty">("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  
  const [problemStatuses, setProblemStatuses] = useState<Record<number, ProblemStatus>>(() => {
    const saved = localStorage.getItem('problemStatuses');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('problemStatuses', JSON.stringify(problemStatuses));
  }, [problemStatuses]);

  const toggleProblemDone = (problemId: number) => {
    setProblemStatuses(prev => {
      const currentStatus = prev[problemId] || { isDone: false, toRevisit: false };
      const newStatus = {
        ...currentStatus,
        isDone: !currentStatus.isDone
      };
      
      return { ...prev, [problemId]: newStatus };
    });
  };

  const toggleProblemRevisit = (problemId: number) => {
    setProblemStatuses(prev => {
      const currentStatus = prev[problemId] || { isDone: false, toRevisit: false };
      const newStatus = {
        ...currentStatus,
        toRevisit: !currentStatus.toRevisit
      };
     
      return { ...prev, [problemId]: newStatus };
    });
  };

  const filteredProblems = competitiveProblems.filter(problem => {
    return (filterDifficulty === "All" || problem.difficulty === filterDifficulty) &&
           (filterType === "All" || problem.type === filterType);
  });

  const sortedProblems = [...filteredProblems].sort((a, b) => {
    if (sortField === "name") {
      return sortDirection === "asc" 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name);
    } else {
      const difficultyOrder = { "Easy": 1, "Medium": 2, "Hard": 3 };
      const diffA = difficultyOrder[a.difficulty as keyof typeof difficultyOrder];
      const diffB = difficultyOrder[b.difficulty as keyof typeof difficultyOrder];
      return sortDirection === "asc" ? diffA - diffB : diffB - diffA;
    }
  });

  const handleSort = (field: "name" | "difficulty") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const problemTypes = ["All", ...new Set(competitiveProblems.map(problem => problem.type))];
  
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "disabled");
    }
  }, [darkMode]);

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
      
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
              Competitive Programming
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
              Sharpen your skills with algorithmic challenges and compete with others
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <Card className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-code-dark-light/30 border border-brand-purple/20' 
                : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center">
                <div className={`p-3 rounded-lg mr-4 ${
                  darkMode ? 'bg-brand-purple/20' : 'bg-blue-100'
                }`}>
                  <Award className={darkMode ? 'text-brand-purple' : 'text-blue-600'} size={24} />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Global Rank</p>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>#1,245</h3>
                </div>
              </div>
            </Card>
            
            <Card className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-code-dark-light/30 border border-brand-purple/20' 
                : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center">
                <div className={`p-3 rounded-lg mr-4 ${
                  darkMode ? 'bg-brand-purple/20' : 'bg-blue-100'
                }`}>
                  <TrendingUp className={darkMode ? 'text-brand-cyan' : 'text-blue-600'} size={24} />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Rating</p>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>1,675</h3>
                </div>
              </div>
            </Card>
            
            <Card className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-code-dark-light/30 border border-brand-purple/20' 
                : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center">
                <div className={`p-3 rounded-lg mr-4 ${
                  darkMode ? 'bg-brand-purple/20' : 'bg-blue-100'
                }`}>
                  <Code className={darkMode ? 'text-brand-purple-light' : 'text-blue-600'} size={24} />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Problems Solved</p>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>87</h3>
                </div>
              </div>
            </Card>
            
            <Card className={`p-6 rounded-xl ${
              darkMode 
                ? 'bg-code-dark-light/30 border border-brand-purple/20' 
                : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center">
                <div className={`p-3 rounded-lg mr-4 ${
                  darkMode ? 'bg-brand-purple/20' : 'bg-blue-100'
                }`}>
                  <Clock className={darkMode ? 'text-brand-cyan' : 'text-blue-600'} size={24} />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Contests</p>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>12</h3>
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              darkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-cyan' 
                : 'text-gray-800'
            }`}>Upcoming Contests</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingContests.map((contest) => (
                <Card key={contest.id} className={`p-6 rounded-xl ${
                  darkMode 
                    ? 'bg-code-dark-light/30 border border-brand-purple/20' 
                    : 'bg-white border border-gray-200'
                }`}>
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-brand-cyan' : 'text-blue-600'}`}>
                    {contest.name}
                  </h3>
                  <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p><span className="font-semibold">Date:</span> {contest.date}</p>
                    <p><span className="font-semibold">Time:</span> {contest.time}</p>
                    <p><span className="font-semibold">Duration:</span> {contest.duration}</p>
                  </div>
                  <Button className="w-full rounded-lg bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90">
                    Register
                  </Button>
                </Card>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex flex-wrap gap-4"
          >
            <div>
              <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Filter by Difficulty:
              </label>
              <div className="flex flex-wrap gap-3">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setFilterDifficulty(difficulty)}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      filterDifficulty === difficulty
                        ? darkMode 
                          ? 'bg-brand-purple text-white' 
                          : 'bg-blue-600 text-white'
                        : darkMode 
                          ? 'bg-code-dark-light/50 text-gray-300 hover:bg-brand-purple/20' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Filter by Type:
              </label>
              <div className="flex flex-wrap gap-3">
                {problemTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      filterType === type
                        ? darkMode 
                          ? 'bg-brand-purple text-white' 
                          : 'bg-blue-600 text-white'
                        : darkMode 
                          ? 'bg-code-dark-light/50 text-gray-300 hover:bg-brand-purple/20' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
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
                        ? 'bg-brand-purple text-white' 
                        : 'bg-blue-600 text-white'
                      : darkMode 
                        ? 'bg-code-dark-light/50 text-gray-300 hover:bg-brand-purple/20' 
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
                        ? 'bg-brand-purple text-white' 
                        : 'bg-blue-600 text-white'
                      : darkMode 
                        ? 'bg-code-dark-light/50 text-gray-300 hover:bg-brand-purple/20' 
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className={`rounded-xl overflow-hidden ${
              darkMode 
                ? 'bg-code-dark-light/30 border border-brand-purple/20' 
                : 'bg-white border border-gray-200'
            }`}
          >
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className={darkMode ? 'bg-code-dark-light' : 'bg-blue-100'}>
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
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Type</TableHead>
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
                  {sortedProblems.map((problem) => {
                    const status = problemStatuses[problem.id] || { isDone: false, toRevisit: false };
                    return (
                      <TableRow 
                        key={problem.id}
                        className={`${
                          darkMode 
                            ? 'hover:bg-code-dark-light/50' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <TableCell className={darkMode ? 'text-gray-200' : 'text-gray-800'}>{problem.id}</TableCell>
                        <TableCell className={darkMode ? 'text-gray-200' : 'text-gray-800'}>
                          <a href="https://codeforces.com/contest/2096/problem/A" className="text-blue-500 hover:underline">
                            {problem.name}
                          </a>
                        </TableCell>
                        <TableCell className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{problem.type}</TableCell>
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
                                checked={status.isDone}
                                onCheckedChange={() => toggleProblemDone(problem.id)}
                                className={`
                                  ${darkMode 
                                    ? 'border-brand-purple-light data-[state=checked]:bg-brand-purple-light' 
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
                                checked={status.toRevisit}
                                onCheckedChange={() => toggleProblemRevisit(problem.id)}
                                className={`
                                  ${darkMode 
                                    ? 'border-brand-cyan data-[state=checked]:bg-brand-cyan' 
                                    : 'border-blue-600 data-[state=checked]:bg-blue-600'
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
                          <a href={`https://codeforces.com/contest/2096/problem/A`}>
                            <Button className="rounded-lg bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90">
                              Solve
                            </Button>
                          </a>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-12"
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              darkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-cyan' 
                : 'text-gray-800'
            }`}>Tips for Competitive Programming</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className={`p-6 rounded-xl ${
                darkMode 
                  ? 'bg-code-dark-light/30 border border-brand-purple/20' 
                  : 'bg-white border border-gray-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-brand-cyan' : 'text-blue-600'}`}>
                  Preparation Strategies
                </h3>
                <ul className={`list-disc pl-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="mb-2">Practice regularly with timed challenges</li>
                  <li className="mb-2">Master common algorithms and data structures</li>
                  <li className="mb-2">Learn to optimize your code for efficiency</li>
                  <li className="mb-2">Analyze and learn from your past solutions</li>
                </ul>
              </Card>
              
              <Card className={`p-6 rounded-xl ${
                darkMode 
                  ? 'bg-code-dark-light/30 border border-brand-purple/20' 
                  : 'bg-white border border-gray-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-brand-cyan' : 'text-blue-600'}`}>
                  During the Contest
                </h3>
                <ul className={`list-disc pl-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="mb-2">Read all problems before starting to solve</li>
                  <li className="mb-2">Start with the easiest problems first</li>
                  <li className="mb-2">Test your solutions with multiple cases</li>
                  <li className="mb-2">Don't get stuck on one problem too long</li>
                </ul>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CompetitiveProgramming;
