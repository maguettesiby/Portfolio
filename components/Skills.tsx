import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { 
    name: 'React', 
    category: 'Frontend', 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' 
  },
  { 
    name: 'WordPress', 
    category: 'CMS', 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' 
  },
  { 
    name: 'Hostinger Horizon', 
    category: 'Hosting', 
    image: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/580cbf960000ff0005966f44/0x0.png' 
  },
  { 
    name: 'HTML / CSS / JS', 
    category: 'Frontend', 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' 
  },
  { 
    name: 'Figma', 
    category: 'Design', 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' 
  },
  { 
    name: 'Canva', 
    category: 'Design', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcwtKecyjR-Wz57ArpQSVDU3vb6uOcLS5KQ&s' 
  },
  { 
    name: 'CapCut', 
    category: 'Vidéo', 
    image: 'https://play-lh.googleusercontent.com/MO4jVMbqskWrBD7BDUiKkymLPDMlSFjnEE-JTCigWv6UcoENgAkSKr8bs0IvPs8Twv8' 
  },
  { 
    name: 'Excel', 
    category: 'Bureautique', 
    image: 'https://imag.malavida.com/mvimgbig/download-fs/microsoft-excel-8541-0.jpg' 
  },
  { 
    name: 'Word', 
    category: 'Bureautique', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Microsoft_Word_2013-2019_logo.svg/1085px-Microsoft_Word_2013-2019_logo.svg.png' 
  },
  { 
    name: 'Google Sheet', 
    category: 'Bureautique', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg' 
  },
  { 
    name: 'Google Meet', 
    category: 'Outils', 
    image: 'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png' 
  },
  { 
    name: 'PHP', 
    category: 'Backend', 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' 
  },
  { 
    name: 'MySQL', 
    category: 'Base de données', 
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' 
  },
];

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Compétences Techniques</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600">Mes outils de prédilection pour créer et gérer.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white flex flex-col items-center justify-center text-center gap-4 border border-slate-100 hover:border-amber-200 group"
            >
              <div className="w-16 h-16 p-2 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-white transition-colors overflow-hidden">
                <img 
                  src={skill.image} 
                  alt={skill.name} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">{skill.name}</h3>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-medium bg-slate-100 px-2 py-1 rounded-md mt-2 inline-block">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;