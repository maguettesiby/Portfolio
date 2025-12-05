import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-slate-400 py-8 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        <p className="text-sm mt-2">MAGUETTE SIBY</p>
      </div>
    </footer>
  );
};

export default Footer;