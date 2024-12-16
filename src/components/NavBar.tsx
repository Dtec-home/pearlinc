import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of your navbar
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false); // Close mobile menu if open
    }
  };

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Pearl Consult
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.1 }}
                className={`transition-colors ${
                  activeSection === item.href
                    ? 'text-blue-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        className="md:hidden bg-gray-800"
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              whileTap={{ scale: 0.95 }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activeSection === item.href
                  ? 'text-blue-500 bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;