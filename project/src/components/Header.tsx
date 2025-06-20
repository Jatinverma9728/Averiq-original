import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll direction logic
      if (window.scrollY < 10) {
        setShowHeader(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        // Scrolling down
        setShowHeader(false);
      } else if (window.scrollY < lastScrollY.current) {
        // Scrolling up
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#portfolio', description: 'Selected Projects' },
    { label: 'Services', href: '#services', description: 'What We Do' },
    { label: 'Process', href: '#process', description: 'How We Work' },
    { label: 'About', href: '#about', description: 'Our Story' },
    { label: 'Contact', href: '#contact', description: 'Let\'s Talk' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ 
          y: showHeader ? 0 : -120 // Slide up when hidden, down when shown
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-2xl' // removed border-b border-white/[0.06]
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Sophisticated Logo */}
            <motion.div 
              className="flex items-center space-x-4 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-white to-white/80 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-black rounded-md transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                </div>
                <div className="absolute inset-0 w-10 h-10 bg-white/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-light text-white tracking-[0.02em] leading-none">Averiq</span>
                <span className="text-xs text-white/40 font-light tracking-widest uppercase">Software Agency</span>
              </div>
            </motion.div>

            {/* Desktop Navigation with Creative Hover */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-white/[0.03] backdrop-blur-sm rounded-full p-2 border border-white/[0.06]">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="relative"
                    onHoverStart={() => setHoveredItem(index)}
                    onHoverEnd={() => setHoveredItem(null)}
                  >
                    <motion.a
                      href={item.href}
                      className="relative px-6 py-3 text-white/70 hover:text-white transition-colors duration-300 font-light tracking-wide text-sm rounded-full block"
                      whileHover={{ y: -1 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.label}
                      
                      {/* Elegant hover background */}
                      {hoveredItem === index && (
                        <motion.div
                          layoutId="navHover"
                          className="absolute inset-0 bg-white/[0.08] rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.a>
                    
                    {/* Tooltip on hover */}
                    {hoveredItem === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-black/90 backdrop-blur-xl text-white/80 text-xs rounded-lg border border-white/[0.08] whitespace-nowrap"
                      >
                        {item.description}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-l border-t border-white/[0.08]"></div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Elegant CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
            <InteractiveHoverButton>Start Project</InteractiveHoverButton>

            </div>

            {/* Creative Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative">
                <motion.div
                  animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                  className="w-6 h-0.5 bg-white rounded-full"
                />
                <motion.div
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-white rounded-full mt-1"
                />
                <motion.div
                  animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                  className="w-6 h-0.5 bg-white rounded-full mt-1"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Elegant Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/[0.06] overflow-hidden"
        >
          <div className="px-6 py-8">
            <div className="space-y-1 mb-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between py-4 text-white/70 hover:text-white transition-colors border-b border-white/[0.05] last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div>
                    <div className="font-light text-lg">{item.label}</div>
                    <div className="text-white/40 text-sm font-light">{item.description}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/30" />
                </motion.a>
              ))}
            </div>
            
            <motion.button
              className="w-full px-8 py-4 bg-white text-black rounded-full font-medium text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      {/* Backdrop blur when mobile menu is open */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
        </motion.div>
      )}
    </>
  );
};

export default Header;