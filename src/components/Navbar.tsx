import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 relative z-50">
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-lb-gold/40 bg-lb-charcoal shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <img src="/logo.png" alt="LOGIC BREAK SOLUTION Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-lg hidden sm:block tracking-wide text-white">
            LOGIC BREAK <span className="text-lb-gold">SOLUTION</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-gray-300 hover:text-lb-gold transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="bg-lb-gold text-lb-black font-semibold px-6 py-2.5 rounded-full hover:bg-lb-gold-light transition-colors text-sm">
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden relative z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-lb-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center px-6"
            >
              <ul className="flex flex-col items-center gap-8 w-full max-w-sm">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full text-center">
                    <a 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-2xl font-medium text-white hover:text-lb-gold transition-colors py-2"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="w-full pt-4">
                  <a 
                    href="#contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center bg-lb-gold text-lb-black font-bold px-8 py-4 rounded-full text-lg hover:bg-lb-gold-light transition-colors"
                  >
                    Start a Project
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
