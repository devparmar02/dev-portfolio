import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar=()=>{
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const [active,setActive]=useState('home');
  const [progress,setProgress]=useState(0);

  useEffect(()=>{
    const onScroll=()=>{
      setScrolled(window.scrollY>60);
      const total=document.body.scrollHeight-window.innerHeight;
      setProgress(total>0?(window.scrollY/total)*100:0);
      const sections=['home','about','projects','skills','contact'];
      const pos=window.scrollY+120;
      for(let i=sections.length-1;i>=0;i--){
        const el=document.getElementById(sections[i]);
        if(el&&el.offsetTop<=pos){setActive(sections[i]);break;}
      }
    };
    window.addEventListener('scroll',onScroll);
    return()=>window.removeEventListener('scroll',onScroll);
  },[]);

  const links=[{label:'Home',id:'home'},{label:'About',id:'about'},{label:'Work',id:'projects'},{label:'Skills',id:'skills'},{label:'Contact',id:'contact'}];

  return(
    <>
      {/* Scroll progress bar */}
      <div style={{position:'fixed',top:0,left:0,height:2,zIndex:200,background:'linear-gradient(90deg,#ff6b2b,#7c5cff)',width:`${progress}%`,transition:'width 0.1s linear'}}/>

      <nav style={{
        position:'fixed',top:0,left:0,right:0,zIndex:100,
        padding:'1.1rem 2.5rem',
        display:'flex',alignItems:'center',justifyContent:'space-between',
        background:scrolled?'rgba(7,8,15,0.92)':'transparent',
        backdropFilter:scrolled?'blur(20px)':'none',
        borderBottom:scrolled?'1px solid #1e2240':'1px solid transparent',
        transition:'all 0.4s',
      }}>
        <a href="#home" className="font-mono" style={{fontSize:'0.78rem',color:'#ff6b2b',letterSpacing:'0.1em',textDecoration:'none',fontWeight:700}}>
          // dev.parmar
        </a>

        <div style={{display:'flex',gap:'2.5rem'}} className="hidden md:flex">
          {links.map(l=>(
            <a key={l.id} href={`#${l.id}`} className="hover-line"
              style={{fontFamily:'Space Grotesk, sans-serif',fontSize:'0.75rem',fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',textDecoration:'none',color:active===l.id?'#ff6b2b':'#5c607a',transition:'color 0.2s'}}>
              {l.label}
            </a>
          ))}
        </div>

        <button onClick={()=>setOpen(!open)} className="md:hidden" style={{background:'none',border:'none',color:'#e8e4d8'}}>
          {open?<X size={22}/>:<Menu size={22}/>}
        </button>

        {open&&(
          <div style={{position:'absolute',top:'100%',left:0,right:0,background:'rgba(7,8,15,0.98)',borderBottom:'1px solid #1e2240',padding:'1.5rem 2.5rem',display:'flex',flexDirection:'column',gap:'1.25rem'}}>
            {links.map(l=>(
              <a key={l.id} href={`#${l.id}`} onClick={()=>setOpen(false)}
                style={{fontFamily:'Space Grotesk, sans-serif',fontSize:'0.85rem',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',textDecoration:'none',color:active===l.id?'#ff6b2b':'#e8e4d8'}}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
