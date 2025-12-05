import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contactez-moi</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600">Un projet ? Une question ? Discutons-en.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 space-y-8">
                <h3 className="text-2xl font-bold text-slate-800">Mes Coordonnées</h3>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 text-blue-800 rounded-lg shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-semibold">Email</p>
                            <a href="mailto:maguettesiby146@gmail.com" className="text-lg font-medium text-slate-900 hover:text-blue-800 break-all">maguettesiby146@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-amber-100 text-amber-600 rounded-lg shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-semibold">Téléphone</p>
                            <a href="tel:+221775616203" className="text-lg font-medium text-slate-900 hover:text-blue-800">+221 77 561 62 03</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 text-blue-800 rounded-lg shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-semibold">Localisation</p>
                            <p className="text-lg font-medium text-slate-900">Keur Massar, Dakar</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <a href="https://github.com/maguettesiby" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 text-slate-600 rounded-full hover:bg-blue-800 hover:text-white transition-all"><Github size={24} /></a>
                    <a href="https://www.linkedin.com/in/maguette-siby-793ab51b4" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 text-slate-600 rounded-full hover:bg-amber-600 hover:text-white transition-all"><Linkedin size={24} /></a>
                </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 flex flex-col justify-center items-center text-center border-l border-slate-100">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <WhatsAppIcon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Discussion Instantanée</h3>
                <p className="text-slate-600 mb-8">
                    Besoin d'une réponse rapide ? Contactez-moi directement sur WhatsApp pour discuter de votre projet.
                </p>
                <a 
                    href="https://wa.me/221775616203" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-green-500 text-white rounded-full font-bold text-base md:text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200 transform hover:-translate-y-1"
                >
                    <WhatsAppIcon className="w-6 h-6" />
                    Me contacter sur WhatsApp
                </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;