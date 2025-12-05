import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, GraduationCap, Printer } from 'lucide-react';
import { Experience, Certificate, Education } from '../types';

const experiences: Experience[] = [
  {
    id: 1,
    role: "Développeur Web Freelance",
    company: "Indépendant",
    period: "2022 - Présent",
    description: "Développement d'applications web complètes et solutions e-commerce.",
    technologies: ["Application de gestion immobilière (React, Node.js)", "Plateforme E-commerce Agricole (WordPress)"]
  },
  {
    id: 2,
    role: "Technicien Support & Installation",
    company: "ENO de Pikine",
    period: "2021 - 2023",
    description: "Installation de machines, maintenance du parc informatique, et support technique aux utilisateurs."
  }
];

const education: Education[] = [
  {
    id: 1,
    degree: "Licence 3 : Informatique – Dév. Web & Mobile",
    school: "Université Numérique Cheikh Hamidou Kane",
    period: "2023 – 2024",
    description: "Mention Bien"
  },
  {
    id: 2,
    degree: "Licence 2 : Informatique",
    school: "Université Numérique Cheikh Hamidou Kane",
    period: "2022 – 2023"
  },
  {
    id: 3,
    degree: "Licence 1 : Informatique",
    school: "Université Numérique Cheikh Hamidou Kane",
    period: "2021 – 2022"
  }
];

const certificates: Certificate[] = [
  { id: 1, title: "Informatique & Internet", issuer: "Certification officielle", date: "2022" },
  { id: 2, title: "Commerce Digital", issuer: "Certification Pro", date: "2023" },
  { id: 3, title: "Intelligence Artificielle pour tous", issuer: "Formation IA", date: "2024" },
];

const About: React.FC = () => {
  const handleDownloadCV = () => {
    // Petit délai pour s'assurer que l'interface est stable avant de lancer l'impression
    setTimeout(() => {
        window.print();
    }, 100);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">À Propos & CV</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Polyvalent et passionné, je combine compétences techniques et créativité pour offrir des solutions complètes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Biography & Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="text-amber-500" /> Mon Profil
              </h3>
              <div className="text-slate-600 mb-6 leading-relaxed">
                  <p className="mb-4">
                    Je m'appelle <strong>Maguette Siby</strong>, résidant à Keur Massar. 
                    Titulaire d'une <strong>Licence en Informatique</strong> avec <strong>mention Bien</strong>, je suis un développeur passionné par le code et l'innovation digitale.
                  </p>
                  <p>
                    Je maîtrise le développement moderne (<strong>React, Node.js, PHP</strong>) ainsi que la gestion de projets web complexes (WordPress, E-commerce).
                  </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-amber-500" /> Formation
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="relative pl-6 border-l-2 border-slate-200">
                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-800"></span>
                    <h4 className="font-bold text-slate-800">{edu.degree}</h4>
                    <p className="text-slate-600 text-sm">{edu.school}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded">{edu.period}</span>
                      {edu.description && <span className="text-xs font-bold text-blue-800">{edu.description}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Experience & Certs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-amber-500" /> Expérience
              </h3>
              
              <div className="relative border-l-2 border-blue-100 ml-3 space-y-10">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative pl-8">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-100"></span>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                      <span className="text-sm text-blue-800 font-bold">{exp.period}</span>
                      <h4 className="text-xl font-bold text-slate-900 mt-1">{exp.role}</h4>
                      <p className="text-slate-700 font-medium mb-3">{exp.company}</p>
                      <p className="text-slate-600 text-sm mb-3">{exp.description}</p>
                      {exp.technologies && (
                        <div className="space-y-1">
                          {exp.technologies.map((tech, i) => (
                            <div key={i} className="text-xs bg-white border border-slate-200 p-2 rounded text-slate-600">
                              • {tech}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-amber-500" /> Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {certificates.map((cert) => (
                  <div key={cert.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all hover:border-amber-200">
                    <h4 className="font-bold text-slate-800 text-sm">{cert.title}</h4>
                    <p className="text-xs text-blue-800 font-medium mt-1">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CV Download CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900 to-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 opacity-10 rounded-full blur-3xl -ml-16 -mb-16"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Vous voulez en savoir plus ?</h3>
                  <p className="text-blue-200">Enregistrez mon CV au format PDF via l'option d'impression.</p>
                </div>
                <button 
                  type="button"
                  onClick={handleDownloadCV}
                  className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-amber-500/30 flex items-center gap-3 transform hover:-translate-y-1 whitespace-nowrap"
                >
                  <Printer size={24} />
                  Imprimer / Sauvegarder le CV
                </button>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;