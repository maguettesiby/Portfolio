import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Développeur Web", "Webmaster", "Web Designer", "Monteur Vidéo"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullTxt = roles[i];

      setText(isDeleting 
        ? fullTxt.substring(0, text.length - 1) 
        : fullTxt.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullTxt) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-50">
        <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-amber-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-60 h-60 md:w-80 md:h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm border border-blue-200">
            Disponible pour des projets
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Salut, je suis <br />
            <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-amber-500 gradient-text text-transparent">
              Maguette Siby
            </span>
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 flex items-center justify-center md:justify-start h-10">
            <span className="mr-2">Je suis</span>
            <span className="text-blue-800 font-bold">{text}</span>
            <span className="inline-block w-0.5 h-8 ml-1 bg-amber-500 animate-blink"></span>
          </div>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto md:mx-0 leading-relaxed pt-2">
            Passionné par la création digitale, je transforme vos idées en réalités visuelles et interactives. 
            Expert en solutions web modernes et design créatif.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center md:justify-start">
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-8 py-4 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-900 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transform hover:-translate-y-1 border border-blue-800"
            >
              Me Contacter <ArrowRight size={20} />
            </a>
            <a 
              href="#portfolio" 
              onClick={(e) => handleScrollTo(e, 'portfolio')}
              className="px-8 py-4 border border-slate-300 text-slate-700 rounded-full font-semibold hover:border-amber-500 hover:text-amber-600 transition-all flex items-center justify-center"
            >
              Voir mes travaux
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center mt-8 md:mt-0"
        >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-amber-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                    src="https://s10.aconvert.com/convert/p3r68-cdx67/a6ldk-91102.svg" 
                    alt="Maguette Siby" 
                    className="relative w-full h-full object-cover rounded-3xl shadow-2xl z-10 border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://ui-avatars.com/api/?name=Maguette+Siby&background=0D8ABC&color=fff&size=512";
                    }}
                />
                
                {/* Floating Badges */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl z-20 flex items-center gap-2 sm:gap-3 scale-90 sm:scale-100"
                >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm sm:text-base">2+</div>
                    <div>
                        <p className="text-[10px] sm:text-xs text-slate-500">Années</p>
                        <p className="font-bold text-slate-800 text-xs sm:text-sm">Expérience</p>
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                    className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl z-20 scale-90 sm:scale-100"
                >
                     <p className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full"></span> 
                        Certifié Webmaster
                     </p>
                </motion.div>
            </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a 
          href="#about" 
          onClick={(e) => handleScrollTo(e, 'about')}
          className="text-slate-400 hover:text-blue-800 transition-colors"
        >
            <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;