
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { RefreshCw, Play, FileText, BookmarkCheck, MessageSquare, ExternalLink } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

// Sample problems data
const problems = [
  { id: 1, name: "Erase First or Second Letter", category: "Strings", link: "/datastructures/problem/1" },
  { id: 2, name: "Binary Search Tree Implementation", category: "Data Structures", link: "/datastructures/problem/2" },
  { id: 3, name: "Merge Intervals", category: "Arrays", link: "/datastructures/problem/3" },
  { id: 4, name: "Longest Palindromic Substring", category: "Dynamic Programming", link: "/competitiveprogramming/problem/4" },
  { id: 5, name: "Valid Parentheses", category: "Stacks", link: "/datastructures/problem/5" },
  { id: 6, name: "Two Sum", category: "Arrays", link: "/datastructures/problem/6" },
  { id: 7, name: "Linked List Cycle", category: "Linked Lists", link: "/datastructures/problem/7" },
  { id: 8, name: "Maximum Subarray", category: "Dynamic Programming", link: "/competitiveprogramming/problem/8" },
  { id: 9, name: "Reverse Linked List", category: "Linked Lists", link: "/datastructures/problem/9" },
  { id: 10, name: "Binary Tree Level Order Traversal", category: "Trees", link: "/datastructures/problem/10" },
  { id: 11, name: "Course Schedule", category: "Graphs", link: "/competitiveprogramming/problem/11" },
  { id: 12, name: "Minimum Path Sum", category: "Dynamic Programming", link: "/competitiveprogramming/problem/12" },
];

// Rating ranges data
const ratingRanges = [
  [800, 900, 1000, 1100, 1200, 1300],
  [1400, 1500, 1600, 1700, 1800, 1900]
];

const Problems = () => {
  // Load dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "enabled";
  });

  const [statuses, setStatuses] = useState<{ [key: number]: boolean }>({});
  const [revisits, setRevisits] = useState<{ [key: number]: boolean }>({});
  
  const toggleStatus = (id: number) => {
    setStatuses(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  const toggleRevisit = (id: number) => {
    setRevisits(prev => ({ ...prev, [id]: !prev[id] }));
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
      
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
              Problem Library
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
              Practice and improve your coding skills with our collection of problems
            </p>
          </motion.div>
          
          <div className="flex gap-5 mb-8 justify-center">
            <Link to="/datastructures">
              <Button className="rounded-lg bg-gradient-to-r from-brand-purple to-brand-purple-light text-white hover:opacity-90">
                Data Structures Problems
              </Button>
            </Link>
            <Link to="/competitiveprogramming">
              <Button className="rounded-lg bg-gradient-to-r from-brand-cyan to-brand-purple-light text-white hover:opacity-90">
                Competitive Programming Problems
              </Button>
            </Link>
          </div>
          
          {/* Hero Banner Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`w-full h-80 mb-8 rounded-xl overflow-hidden relative ${
              darkMode 
                ? 'bg-code-dark border border-brand-purple/20' 
                : 'bg-blue-100 border border-blue-200'
            }`}
          >
            {/* Add banner content here if needed */}
          </motion.div>

          {/* Rating Ranges Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {/* Rating Card */}
            <Card className={`w-full lg:w-[45%] p-6 rounded-lg ${
              darkMode 
                ? 'bg-code-dark-light/50 border border-brand-purple/30' 
                : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Rating Ranges</h3>
              
              {ratingRanges.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-between mb-4">
                  {row.map((rating, index) => (
                    <div 
                      key={index}
                      className={`flex items-center justify-center w-16 h-10 rounded-lg ${
                        darkMode 
                          ? 'bg-brand-purple/20 border border-brand-purple/40' 
                          : 'bg-cyan-100 border border-cyan-300'
                      }`}
                    >
                      <span className={darkMode ? 'text-white' : 'text-black'}>{rating}</span>
                    </div>
                  ))}
                </div>
              ))}
            </Card>

            {/* Stats Cards */}
            <div className="flex flex-col w-full lg:w-[52%] gap-4">
              <div className="grid grid-cols-3 gap-4">
                <Card className={`p-4 rounded-lg ${
                  darkMode 
                    ? 'bg-code-dark-light/50 border border-brand-purple/30' 
                    : 'bg-white border border-gray-200'
                }`}>
                  <div className="text-center">
                    <h3 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Solved</h3>
                    <p className="text-2xl font-bold text-brand-cyan">42</p>
                  </div>
                </Card>
                <Card className={`p-4 rounded-lg ${
                  darkMode 
                    ? 'bg-code-dark-light/50 border border-brand-purple/30' 
                    : 'bg-white border border-gray-200'
                }`}>
                  <div className="text-center">
                    <h3 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Attempts</h3>
                    <p className="text-2xl font-bold text-brand-purple">128</p>
                  </div>
                </Card>
                <Card className={`p-4 rounded-lg ${
                  darkMode 
                    ? 'bg-code-dark-light/50 border border-brand-purple/30' 
                    : 'bg-white border border-gray-200'
                }`}>
                  <div className="text-center">
                    <h3 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Rank</h3>
                    <p className="text-2xl font-bold text-brand-purple-light">#214</p>
                  </div>
                </Card>
              </div>
              <Card className={`flex-1 p-4 rounded-lg ${
                darkMode 
                  ? 'bg-code-dark-light/50 border border-brand-purple/30' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>User</h3>
                    <p className="text-xl font-bold text-brand-cyan">Krishna0803</p>
                  </div>
                  <Button className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90 rounded-lg">
                    <RefreshCw size={18} className="mr-2" /> Refresh
                  </Button>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Problems Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Problem</TableHead>
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Category</TableHead>
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Solution</TableHead>
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Notes</TableHead>
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Status</TableHead>
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Revisit</TableHead>
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Discuss</TableHead>
                    <TableHead className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Link</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {problems.map((problem) => (
                    <TableRow 
                      key={problem.id}
                      className={`${
                        darkMode 
                          ? 'hover:bg-code-dark-light/50' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <TableCell className={darkMode ? 'text-gray-200' : 'text-gray-800'}>{problem.name}</TableCell>
                      <TableCell className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{problem.category}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="rounded-lg text-brand-cyan">
                          <Play size={18} />
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="rounded-lg text-brand-purple">
                          <FileText size={18} />
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost"
                          size="icon" 
                          className={`rounded-lg ${statuses[problem.id] ? 'text-green-500' : 'text-amber-500'}`}
                          onClick={() => toggleStatus(problem.id)}
                        >
                          {statuses[problem.id] ? '✅' : '🔄'}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className={`rounded-lg ${revisits[problem.id] ? 'text-green-500' : 'text-amber-500'}`}
                          onClick={() => toggleRevisit(problem.id)}
                        >
                          {revisits[problem.id] ? '✔️' : <BookmarkCheck size={18} />}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="rounded-lg text-brand-purple-light">
                          <MessageSquare size={18} />
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Link to={problem.link}>
                          <Button variant="ghost" size="icon" className="rounded-lg text-brand-cyan">
                            <ExternalLink size={18} />
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="p-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Problems;
