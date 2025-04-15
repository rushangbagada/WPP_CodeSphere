
import { Link } from 'react-router-dom';
import { Code, Twitter, Facebook, Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-code-dark to-code-dark-light text-white pt-16 pb-8 border-t border-brand-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center">
              <Code className="h-8 w-8 text-brand-purple" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-cyan">
                CodeSphere<span className="text-brand-cyan">Hub</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              India's first all-in-one coding resources platform. Master data structures, algorithms, 
              web development, and more with our curated content and interactive learning tools.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-purple">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/topics" className="text-gray-400 hover:text-white transition-colors">Topics</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-cyan">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/documentation" className="text-gray-400 hover:text-white transition-colors">Documentation</Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-400 hover:text-white transition-colors">Tutorials</Link>
              </li>
              <li>
                <Link to="/roadmaps" className="text-gray-400 hover:text-white transition-colors">Learning Paths</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-purple">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 text-brand-cyan" />
                <a href="mailto:info@codesphere.com" className="text-gray-400 transition-colors">
                  info@codesphere.com
                </a>
              </li>
              <li className="text-gray-200">
                <a href="#" className="text-gray-400 transition-colors">
                  Support Center
                </a>
              </li>
              <li className="text-gray-200">
                <a href="#" className="text-gray-400 transition-colors">
                  Feedback
                </a>
              </li>
              <li className="text-gray-200">
                <a href="#" className="text-gray-400 transition-colors">
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CodeSphere Hub. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
