import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { X } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Site E-commerce Mode",
    category: "Web",
    // Image d'une boutique en ligne / mode
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Design et intégration WordPress pour une boutique.",
  },
  {
    id: 2,
    title: "Affiche Événementielle",
    category: "Design",
    // Image abstraite/graphique colorée rappelant une affiche de festival
    image: "https://i.ytimg.com/vi/oGh4FjTAPTo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC_--bb-u31EWzcciOlgfrhVXLRVg",
    description: "Création Canva pour un festival local.",
  },
  {
    id: 3,
    title: "Montage Promo Produit",
    category: "Vidéo",
    // Image d'interface de montage vidéo / timeline
    image: "https://thumbor.comeup.com/jWMlFKmnAzveW7wVww8okv6zGAc=/fit-in/760x427/filters:quality(90):no_upscale()/uploads/media/picture/2024-06-24/montage-video-comeup-66796554e8e30.jpg",
    description: "Montage dynamique CapCut pour un lancement.",
  },
  {
    id: 4,
    title: "Portfolio Minimaliste",
    category: "Web",
    // Image d'un ordinateur portable affichant un site web épuré
    image: "https://i.ytimg.com/vi/CCOiXsFtvd0/maxresdefault.jpg",
    description: "Développement React pour un photographe.",
  },
  {
    id: 5,
    title: "Identité Visuelle Startup",
    category: "Design",
    // Image de croquis de branding / design
    image: "https://amazili-communication.com/actifs/resources/images/glossaire/charte-graphique-startup-entreprise.jpg",
    description: "Logo et cartes de visite.",
  },
  {
    id: 6,
    title: "Vlog Voyage",
    category: "Vidéo",
    // Image évoquant le voyage
    image: "https://dpdcdknkb1fp1.cloudfront.net/wp-content/uploads/2019/08/Vlog-voyage-pour-la-premi%C3%A8re-fois-1024x682.jpg",
    description: "Montage rythmé avec effets de transition.",
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'Tous' | 'Web' | 'Design' | 'Vidéo'>('Tous');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Portfolio</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-8"></div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {['Tous', 'Web', 'Design', 'Vidéo'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat 
                    ? 'bg-blue-800 text-white shadow-lg shadow-blue-200' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                onClick={() => setSelectedImage(project.image)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white border border-slate-100 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="p-6">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">{project.category}</span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            >
              <button
                className="absolute top-4 right-4 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
                onClick={() => setSelectedImage(null)}
              >
                <X size={36} />
              </button>
              
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage}
                alt="Projet en détail"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Portfolio;