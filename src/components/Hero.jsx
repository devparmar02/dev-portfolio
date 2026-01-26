import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-amber-700/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(217,119,6,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217,119,6,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
      
      <div className="max-w-4xl w-full z-10 text-center">
        
        {/* Floating accent box */}
        <div className="mb-12 animate-fadeInUp">
          <div className="inline-block px-6 py-2 rounded-full border border-amber-500/50 bg-amber-500/10 backdrop-blur-sm mb-8 scale-in">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Welcome to my portfolio</p>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mb-12 animate-fadeInUp delay-100 flex justify-center">
          <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full p-1 glow-pulse -z-10"></div>
            
            {/* Image container */}
            <img 
              src="/image.png" 
              alt="Dev Parmar" 
              className="w-full h-full rounded-full object-cover border-4 border-slate-950 shadow-2xl shadow-amber-500/50 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Main Heading with animations */}
        <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-6 animate-fadeInUp font-serif text-white tracking-tight delay-200">
          <span className="inline-block">Dev</span>
          <span className="inline-block ml-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent animate-pulse">Parmar</span>
        </h1>
        
        {/* Subtitle with animation */}
        <p className="text-2xl md:text-3xl text-amber-500 font-light mb-8 animate-fadeInUp delay-300 tracking-wide">
          Full Stack Developer & Creative Problem Solver
        </p>

        {/* Description with staggered animation */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fadeInUp delay-400 font-light">
          I build robust web applications and explore the intersection of design and technology. Passionate about clean code, user experience, and solving real-world problems.
        </p>

        {/* CTA Buttons with enhanced styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp delay-500">
          <a 
            href="#projects" 
            className="px-10 py-4 text-lg font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-300 font-semibold tracking-wide uppercase rounded-lg shadow-lg shadow-amber-500/50 hover:shadow-amber-400/70 hover:scale-105 transform"
          >
            View My Work
          </a>
          
          <a 
            href="/resume.pdf" 
            download="Dev_Parmar_Resume.pdf"
            className="px-10 py-4 text-lg font-semibold text-amber-400 border-2 border-amber-500 hover:bg-amber-500/10 hover:text-amber-300 transition-all duration-300 tracking-wide uppercase rounded-lg backdrop-blur-sm hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 transform"
          >
            Download CV
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <p className="text-gray-500 text-sm mb-3 tracking-widest uppercase">Scroll to explore</p>
          <div className="flex justify-center">
            <svg className="w-6 h-6 text-amber-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

