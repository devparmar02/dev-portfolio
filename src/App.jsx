import React from 'react';
import CursorFollower from './components/CursorFollower';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Tech marquee
const items = ['React.js','Node.js','MongoDB','Tailwind CSS','TypeScript','Kotlin','Python','Next.js','Vite','PostgreSQL','Django','Android'];

const Marquee = () => (
  <div style={{ overflow:'hidden', borderTop:'1px solid #1e2240', borderBottom:'1px solid #1e2240', padding:'0.9rem 0', background:'#0e1020', position:'relative' }}>
    <div style={{ position:'absolute', left:0, top:0, bottom:0, width:80, background:'linear-gradient(90deg, #0e1020, transparent)', zIndex:2 }}/>
    <div style={{ position:'absolute', right:0, top:0, bottom:0, width:80, background:'linear-gradient(-90deg, #0e1020, transparent)', zIndex:2 }}/>
    <div className="marquee-move" style={{ display:'flex', gap:'3rem', width:'max-content' }}>
      {[...items,...items].map((t,i) => (
        <span key={i} className="font-mono" style={{ fontSize:'0.63rem', color:'#5c607a', letterSpacing:'0.22em', textTransform:'uppercase', whiteSpace:'nowrap', display:'flex', alignItems:'center', gap:'1.1rem' }}>
          <span style={{ color:'#ff6b2b', fontSize:'0.4rem' }}>◆</span>{t}
        </span>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <div style={{ background:'#07080f', minHeight:'100vh' }}>
      <CursorFollower />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
