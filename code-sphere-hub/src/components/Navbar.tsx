import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Code, Moon, Sun, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check login status whenever component loads
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-black/80 backdrop-blur-md shadow-lg'
          : 'py-4 bg-black/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code className="h-8 w-8 text-brand-purple" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-cyan">
                CodeSphere<span className="text-brand-cyan">Hub</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800/50 transition-all"
              >
                Home
              </Link>
              <Link
                to="/ourteam"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800/50 transition-all"
              >
                Our Team
              </Link>
              <Link
                to="/courses"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800/50 transition-all"
              >
                Courses
              </Link>
              <Link
                to="/faq"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800/50 transition-all"
              >
                FAQ
              </Link>
              {!isLoggedIn && (
                <Button
                  size="sm"
                  className="ml-4 rounded-xl bg-gradient-to-r from-brand-purple/80 to-brand-cyan/80 text-white hover:from-brand-purple/90 hover:to-brand-cyan/90"
                  onClick={() => navigate('/login')}
                >
                  Get Started
                </Button>
              )}
              {isLoggedIn ? (
                <Button
                  size="sm"
                  variant="outline"
                  className="ml-4 rounded-xl border-gray-600 text-white hover:bg-gray-800/50"
                  onClick={handleLogout}
                >
                  <LogOut size={16} className="mr-2" /> Logout
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  className="ml-4 rounded-xl border-gray-600 text-white hover:bg-gray-800/50"
                  onClick={() => navigate('/login')}
                >
                  <LogIn size={16} className="mr-2" /> Login
                </Button>
              )}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-800/50 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full bg-gray-800/50 text-gray-300 hover:text-white focus:outline-none"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden bg-black/90 backdrop-blur-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/ourteam"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Our Team
          </Link>
          <Link
            to="/courses"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Courses
          </Link>
          <Link
            to="/faq"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            FAQ
          </Link>
          {isLoggedIn ? (
            <Button
              size="sm"
              variant="outline"
              className="mt-4 w-full border-gray-600 text-white hover:bg-gray-700"
              onClick={handleLogout}
            >
              <LogOut size={16} className="mr-2" /> Logout
            </Button>
          ) : (
            <>
              {!isLoggedIn && (
                <Button
                  size="sm"
                  className="mt-4 w-full rounded-xl bg-gradient-to-r from-brand-purple/80 to-brand-cyan/80 text-white hover:from-brand-purple/90 hover:to-brand-cyan/90"
                  onClick={() => navigate('/login')}
                >
                  Get Started
                </Button>
              )}
              <Button
                size="sm"
                variant="outline"
                className="mt-2 w-full border-gray-600 text-white hover:bg-gray-700"
                onClick={() => navigate('/login')}
              >
                <LogIn size={16} className="mr-2" /> Login
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;