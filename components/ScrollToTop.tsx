import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Affiche le bouton si on a scrollé de plus de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 p-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg hover:shadow-amber-500/40 transition-all z-40 print:hidden border-2 border-white/20"
          aria-label="Retour en haut"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;