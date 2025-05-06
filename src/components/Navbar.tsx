import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-secondary font-bold text-xl"
            >
              <span className="bg-primary text-white p-1 rounded">L</span>
              <span>Lindy</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <NavDropdown 
              title="Resources" 
              items={[
                { name: 'Blog', path: '/blog' },
                { name: 'Documentation', path: '/docs' },
                { name: 'Help Center', path: '/help' },
                { name: 'API', path: '/api' },
              ]} 
            />
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="btn btn-secondary">Sign in</button>
            <button className="btn btn-primary">Get started</button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500 px-3">Resources</p>
                <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Blog</Link>
                <Link to="/docs" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Documentation</Link>
                <Link to="/help" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Help Center</Link>
                <Link to="/api" className="block px-3 py-2 text-gray-600 hover:text-gray-900">API</Link>
              </div>
              <div className="space-y-2">
                <Link to="/pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Pricing</Link>
                <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
              </div>
              <div className="space-y-2 pt-4">
                <button className="w-full btn btn-secondary">Sign in</button>
                <button className="w-full btn btn-primary">Get started</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavDropdown = ({ title, items }: { title: string; items: { name: string; path: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className="flex items-center text-gray-600 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1">
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;