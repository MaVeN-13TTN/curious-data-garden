
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ui/theme-toggle';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = [
    { path: '/about', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/mlops', label: 'MLOps & Cloud' },
    { path: '/blog', label: 'Blog' },
    { path: '/talks', label: 'Talks' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/contact', label: 'Contact' },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.location.href = path;
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md dark:bg-gray-900/95' 
          : 'bg-white dark:bg-gray-900'
      }`}
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-xl font-semibold text-primary flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            <span>Curious Data Garden</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-gray-800/50'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                tabIndex={0}
                role="menuitem"
                onKeyDown={(e) => handleKeyDown(e, item.path)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="ml-4 flex items-center">
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:text-gray-300 dark:hover:bg-gray-800"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
        role="menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-primary bg-gray-100 dark:bg-gray-800'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              aria-current={location.pathname === item.path ? 'page' : undefined}
              role="menuitem"
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, item.path)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
