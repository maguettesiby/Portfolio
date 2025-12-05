import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Video, Paintbrush, Monitor, CreditCard, ShieldCheck } from 'lucide-react';
import { Service } from '../types';

const servicesList: Service[] = [
  {
    id: 1,
    title: "Création de Site Web",
    description: "Conception de sites vitrines et professionnels modernes, responsives et optimisés.",
    icon: Layout
  },
  {
    id: 2,
    title: "Gestion WordPress",
    description: "Installation, configuration et maintenance de sites WordPress via Hostinger.",
    icon: ShieldCheck
  },
  {
    id: 3,
    title: "Design Canva & Affiches",
    description: "Création de visuels percutants pour réseaux sociaux, affiches publicitaires et flyers.",
    icon: Paintbrush
  },
  {
    id: 4,
    title: "Montage Vidéo",
    description: "Édition dynamique sur CapCut pour vos contenus promotionnels ou réseaux sociaux.",
    icon: Video
  },
  {
    id: 5,
    title: "Cartes de Visite",
    description: "Conception de cartes de visite professionnelles et uniques pour votre image de marque.",
    icon: CreditCard
  },
  {
    id: 6,
    title: "Maintenance Informatique",
    description: "Support technique, installation de machines et gestion de parc informatique.",
    icon: Monitor
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-blue-900 text-white relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-700 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-600 opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Services</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-800/40 backdrop-blur-sm border border-blue-700 p-8 rounded-2xl hover:bg-blue-800 transition-colors group"
            >
              <div className="w-14 h-14 bg-amber-500 rounded-lg flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-amber-600 transition-colors shadow-lg shadow-blue-900/50">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-blue-100 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;