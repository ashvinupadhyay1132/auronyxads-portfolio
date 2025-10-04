import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Memoize static data to prevent recreation on every render
  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ], []);

  const sections = useMemo(() => 
    navItems.map(item => item.id), [navItems]
  );

  // Memoize scroll handler to prevent recreation
  // const scrollToSection = useCallback((sectionId) => {
  //   const target = document.getElementById(sectionId);
  //   if (target) {
  //     if (typeof window !== 'undefined' && window.lenis) {
  //       window.lenis.scrollTo(target, { offset: 0 });
  //     } else {
  //       target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     }
  //   }
  //   setIsMobileMenuOpen(false);
  // }, []);
const scrollToSection = useCallback((sectionId) => {
  const target = document.getElementById(sectionId);
  if (target) {
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.scrollTo(target, { offset: 0 });
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // 🔥 Update the URL hash without scrolling again
    history.replaceState(null, '', `${sectionId}`);
  }
  setIsMobileMenuOpen(false);
}, []);



  useEffect(() => {
    let ticking = false;
    let lastActiveSection = activeSection;

    const updateStateFromScroll = () => {
      const scY = window.scrollY;
      setIsScrolled(scY > 50);
      
      const scrollPosition = scY + 100;
      let foundSection = lastActiveSection;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            foundSection = section;
            break;
          }
        }
      }
      
      if (foundSection !== lastActiveSection) {
        setActiveSection(foundSection);
        lastActiveSection = foundSection;
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateStateFromScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateStateFromScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, activeSection]);

  // Close mobile menu when clicking outside
  const handleOverlayClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              aria-label="Go to home section"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Auronyxads
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? isScrolled ? 'text-indigo-600' : 'text-white'
                      : isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/80 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
                      layoutId="navbar-indicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:flex bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300"
                size="sm"
              >
                Get Started
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
              onClick={handleOverlayClick}
              aria-label="Close menu"
            />
            <motion.div
              className="fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-label="Mobile navigation menu"
            >
              <div className="p-6">
                <nav role="navigation">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium ${
                        activeSection === item.id ? 'bg-indigo-50 text-indigo-600' : ''
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
                
                <motion.div
                  className="mt-4 pt-4 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  >
                    Get Started
                  </Button>
                  
                  <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-500">
                    <a 
                      href="tel:+919284555378" 
                      className="flex items-center space-x-1 hover:text-indigo-600 transition-colors"
                      aria-label="Call us at +91 9284555378"
                    >
                      <Phone size={14} />
                      <span>Call</span>
                    </a>
                    <a 
                      href="mailto:auronyxads@gmail.com" 
                      className="flex items-center space-x-1 hover:text-indigo-600 transition-colors"
                      aria-label="Email us at auronyxads@gmail.com"
                    >
                      <Mail size={14} />
                      <span>Email</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
