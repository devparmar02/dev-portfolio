import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer=()=>(
  <footer style={{borderTop:'1px solid #1e2240',padding:'2rem 2.5rem',display:'flex',alignItems:'center',justifyContent:'space-between',background:'#07080f',flexWrap:'wrap',gap:'1rem',position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(255,107,43,0.03),transparent,rgba(124,92,255,0.03))',pointerEvents:'none'}}/>
    <div className="font-mono" style={{fontSize:'0.68rem',color:'#5c607a',position:'relative',zIndex:1}}>
      dev.parmar © 2026 — Built with React + Vite + Tailwind
    </div>
    <div style={{display:'flex',gap:'1.5rem',position:'relative',zIndex:1}}>
      {[{icon:<FaGithub/>,href:'https://github.com/devparmar02',label:'GitHub'},{icon:<FaLinkedin/>,href:'https://www.linkedin.com/in/dev-parmar/',label:'LinkedIn'},{icon:<FaEnvelope/>,href:'mailto:devparmar2207@gmail.com',label:'Email'}].map(s=>(
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
          style={{color:'#5c607a',fontSize:'1.05rem',textDecoration:'none',transition:'all 0.2s'}}
          onMouseEnter={e=>{e.currentTarget.style.color='#ff6b2b';e.currentTarget.style.transform='translateY(-3px)';}}
          onMouseLeave={e=>{e.currentTarget.style.color='#5c607a';e.currentTarget.style.transform='';}}
        >{s.icon}</a>
      ))}
    </div>
  </footer>
);

export default Footer;
