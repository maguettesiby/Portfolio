import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CV from './components/CV';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      {/* Conteneur principal du site (sera caché à l'impression via CSS id="site-content") */}
      <div id="site-content" className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
      
      {/* Composant CV hors du flux principal, géré par le CSS global de index.html */}
      <CV />
    </>
  );
}

export default App;