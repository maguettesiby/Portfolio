import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic pour détecter la section active
      const scrollPosition = window.scrollY + 100; // Offset pour déclencher un peu avant

      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          // Vérifie si la position actuelle est dans la section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Déclenchement initial
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Hauteur approximative de la navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2 text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-800 to-amber-500 gradient-text text-transparent"
        >
          <Code2 className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />
          <span>Portfolio.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-medium transition-all relative group ${
                  isActive ? 'text-blue-800 font-bold' : 'text-slate-600 hover:text-blue-800'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-slate-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                 const isActive = activeSection === link.href.substring(1);
                 return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-lg font-medium transition-all ${
                      isActive 
                      ? 'text-blue-800 pl-2 border-l-4 border-amber-500' 
                      : 'text-slate-700 hover:text-blue-800 hover:pl-2'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;