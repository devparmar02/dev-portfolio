import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useScrollAnimation({ threshold: 0.3 });

  return (
    <footer ref={footerRef} className="bg-gradient-to-r from-slate-950 to-slate-900 border-t border-amber-700/20 py-12 px-6 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 opacity-50" style={{backgroundImage: 'radial-gradient(rgba(217,119,6,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
      
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-400 mb-2 animate-fadeInUp">
          © {currentYear} Dev Parmar. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Built with <span className="text-amber-500 font-semibold">React</span>, <span className="text-amber-500 font-semibold">Vite</span>, and <span className="text-amber-500 font-semibold">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

