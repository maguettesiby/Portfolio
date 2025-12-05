import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const CV: React.FC = () => {
  return (
    <div id="printable-cv" className="bg-white w-[210mm] min-h-[297mm] mx-auto relative font-sans text-sm leading-normal shadow-none text-left">
      <div className="flex h-full min-h-[297mm]">
        
        {/* SIDEBAR (LEFT) - Dark Blue */}
        <div className="w-[35%] bg-slate-900 text-white p-8 flex flex-col gap-8 print:bg-slate-900 print:text-white">
          
          {/* Profile Photo Area */}
          <div className="w-40 h-40 mx-auto bg-slate-800 rounded-full overflow-hidden border-4 border-slate-700 shadow-lg mb-4">
             <img 
                src="https://s10.aconvert.com/convert/p3r68-cdx67/a6ldk-91102.svg" 
                alt="Maguette Siby" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://ui-avatars.com/api/?name=Maguette+Siby&background=0f172a&color=fff&size=512";
                }}
             />
          </div>

          {/* Contact */}
          <section>
            <h3 className="text-lg font-bold uppercase tracking-widest border-b border-slate-700 pb-2 mb-4 text-amber-500">
              Contact
            </h3>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Téléphone</p>
                  <p>+221 77 561 62 03</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="break-all">maguettesiby146@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Adresse</p>
                  <p>Malika, Keur Massar – Sénégal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Github size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">GitHub</p>
                  <p className="break-all">github.com/maguettesiby</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <p className="break-all">linkedin.com/in/maguette-siby-793ab51b4</p>
                </div>
              </div>
            </div>
          </section>

          {/* Competences */}
          <section>
            <h3 className="text-lg font-bold uppercase tracking-widest border-b border-slate-700 pb-2 mb-4 text-amber-500">
              Compétences
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-bold text-white mb-2">Développement Web</p>
                <div className="flex flex-wrap gap-2">
                  {['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'PHP', 'Laravel'].map(skill => (
                    <span key={skill} className="bg-slate-800 px-2 py-1 rounded text-xs border border-slate-700">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="font-bold text-white mb-2">Base de données</p>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'PostgreSQL'].map(skill => (
                    <span key={skill} className="bg-slate-800 px-2 py-1 rounded text-xs border border-slate-700">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-bold text-white mb-2">Design & Outils</p>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Figma / Photoshop</li>
                  <li>Git / GitHub</li>
                  <li>WordPress</li>
                  <li>Suite Office (Excel, Word)</li>
                </ul>
              </div>
            </div>
          </section>

           {/* Soft Skills */}
           <section>
            <h3 className="text-lg font-bold uppercase tracking-widest border-b border-slate-700 pb-2 mb-4 text-amber-500">
              Qualités
            </h3>
            <ul className="text-slate-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Rigueur & Autonomie
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Travail d'équipe
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Gestion de projet
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Capacité d'adaptation
              </li>
            </ul>
          </section>

          {/* Langues */}
          <section>
            <h3 className="text-lg font-bold uppercase tracking-widest border-b border-slate-700 pb-2 mb-4 text-amber-500">
              Langues
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-white mb-1">
                  <span>Français</span>
                  <span className="text-slate-400 text-xs">Avancé</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-white mb-1">
                  <span>Anglais</span>
                  <span className="text-slate-400 text-xs">Intermédiaire</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* MAIN CONTENT (RIGHT) - White */}
        <div className="w-[65%] bg-white p-10 flex flex-col gap-8 pt-12">
          
          {/* Header Info */}
          <div className="mb-4">
            <h1 className="text-5xl font-extrabold text-slate-900 uppercase tracking-tight leading-none mb-2">
              Maguette <span className="text-amber-600">Siby</span>
            </h1>
            <h2 className="text-xl font-medium text-slate-500 uppercase tracking-widest">
              Développeur Web & Webmaster
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed text-justify">
              Développeur passionné avec une expertise en développement web (Fullstack), gestion de projets digitaux et support informatique. 
              Doté d'une forte capacité d'adaptation et d'un esprit analytique, je transforme les besoins complexes en solutions techniques performantes.
            </p>
          </div>

          {/* Experience */}
          <section>
            <h3 className="text-xl font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-amber-600"></span> Expériences
            </h3>

            <div className="space-y-8">
              <div className="relative pl-4 border-l-2 border-slate-200">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-600 rounded-full border-4 border-white"></div>
                 <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-bold text-slate-800">Développeur Freelance</h4>
                    <span className="text-sm font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">2022 – Présent</span>
                 </div>
                 <p className="text-sm text-slate-500 italic mb-2">Indépendant</p>
                 <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm">
                    <li>
                      <strong>Application de gestion immobilière :</strong> Développement d'une plateforme avec recherche ciblée et contact WhatsApp. 
                      <span className="block text-xs text-slate-500 mt-0.5">Stack: React, Node.js, TailwindCSS, PostgreSQL</span>
                    </li>
                    <li>
                      <strong>Site E-commerce Agricole :</strong> Création d'une marketplace pour produits locaux avec géolocalisation.
                      <span className="block text-xs text-slate-500 mt-0.5">Stack: WordPress, WooCommerce</span>
                    </li>
                 </ul>
              </div>

              <div className="relative pl-4 border-l-2 border-slate-200">
                 <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-400 rounded-full border-4 border-white"></div>
                 <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-bold text-slate-800">Technicien Support</h4>
                    <span className="text-sm font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">2021 – 2023</span>
                 </div>
                 <p className="text-sm text-slate-500 italic mb-2">ENO de Pikine, Sénégal</p>
                 <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
                    <li>Installation et configuration de machines.</li>
                    <li>Maintenance du parc informatique et résolution d'incidents logiciels/matériels.</li>
                    <li>Support technique et formation des utilisateurs.</li>
                 </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xl font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-amber-600"></span> Formation
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-lg font-bold text-slate-800">Licence 3 Informatique</h4>
                  <span className="text-sm text-slate-600">2023 – 2024</span>
                </div>
                <p className="text-amber-600 font-medium text-sm">Développement d’applications web et mobiles</p>
                <p className="text-slate-500 text-sm">Université Numérique Cheikh Hamidou Kane</p>
                <p className="text-xs font-bold text-slate-900 mt-1">Mention Bien</p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-base font-bold text-slate-700">Licence 1 & 2 Informatique</h4>
                  <span className="text-sm text-slate-600">2021 – 2023</span>
                </div>
                <p className="text-slate-500 text-sm">Université Numérique Cheikh Hamidou Kane</p>
              </div>
            </div>
          </section>

          {/* Certifications & Interests */}
          <div className="grid grid-cols-2 gap-8 mt-auto">
             <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-3">
                  Certifications
                </h3>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-amber-600 rounded-full shrink-0"></div>
                    <span>Informatique et internet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-amber-600 rounded-full shrink-0"></div>
                    <span>Commerce Digital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-amber-600 rounded-full shrink-0"></div>
                    <span>Intelligence Artificielle pour tous</span>
                  </li>
                </ul>
             </section>

             <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-3">
                  Centres d'intérêt
                </h3>
                <div className="flex gap-3 text-slate-700 text-sm flex-wrap">
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Sport</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Technologie</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Design</span>
                  <span className="bg-slate-100 px-3 py-1 rounded-full">Lecture</span>
                </div>
             </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CV;