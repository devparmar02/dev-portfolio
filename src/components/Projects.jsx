import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaAndroid, FaHtml5, FaJs, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiKotlin, SiVite, SiTailwindcss, SiRazorpay, SiJsonwebtokens, SiNextdotjs } from 'react-icons/si';

const projects = [
  {
    id:1, num:'001', featured:true,
    title:'NIVAS – Society Management',
    category:'Full-Stack MERN App',
    description:'Comprehensive platform featuring secure RBAC and automated financial workflows. Monthly billing automation via Cron Jobs, Razorpay integration, instant PDF receipts, real-time visitor tracking and complaint management.',
    tech:[{icon:<FaReact/>,color:'#61dafb',label:'React'},{icon:<SiVite/>,color:'#a855f7',label:'Vite'},{icon:<FaNodeJs/>,color:'#68a063',label:'Node.js'},{icon:<SiMongodb/>,color:'#4db33d',label:'MongoDB'},{icon:<SiTailwindcss/>,color:'#38bdf8',label:'Tailwind'},{icon:<SiRazorpay/>,color:'#528ff5',label:'Razorpay'},{icon:<SiJsonwebtokens/>,color:'#e8e4d8',label:'JWT'}],
    github:'https://github.com/devparmar02/nivas-society-management',
    demo:'https://nivas-society-management.vercel.app/',
    accent:'#ff6b2b'
  },
  {
    id:2, num:'002',
    title:'UI Generator Agent',
    category:'AI-Powered Web App',
    description:'AI-integrated UI generator that turns natural language into renderable React code using Llama 3-70B and a multi-agent pipeline. Stable, hallucination-free execution through strict runtime guardrails.',
    tech:[{icon:<SiNextdotjs/>,color:'#e8e4d8',label:'Next.js'},{icon:<FaReact/>,color:'#61dafb',label:'React'},{icon:<SiTailwindcss/>,color:'#38bdf8',label:'Tailwind'}],
    github:'https://github.com/devparmar02/UI-Generator',
    demo:'https://ui-generator-gules.vercel.app/',
    accent:'#7c5cff'
  },
  {
    id:3, num:'003',
    title:'E-Commerce Dashboard',
    category:'Frontend Web App',
    description:'High-performance responsive e-commerce platform. Auth-based protected routes, real-time cart via Context API, infinite scrolling and dynamic search.',
    tech:[{icon:<FaReact/>,color:'#61dafb',label:'React'},{icon:<SiVite/>,color:'#a855f7',label:'Vite'},{icon:<SiTailwindcss/>,color:'#38bdf8',label:'Tailwind'}],
    github:'https://github.com/devparmar02/E-Commerce-Dashboard',
    demo:'https://e-commerce-dashboard-lovat-three.vercel.app/',
    accent:'#f5c842'
  },
  {
    id:4, num:'004',
    title:'Viseas Service Platform',
    category:'Full-Stack Web App',
    description:'Comprehensive travel marketplace with user authentication, real-time booking management, and optimized performance for mobile and desktop users.',
    tech:[{icon:<FaReact/>,color:'#61dafb',label:'React'},{icon:<FaNodeJs/>,color:'#68a063',label:'Node.js'},{icon:<SiMongodb/>,color:'#4db33d',label:'MongoDB'}],
    github:'https://github.com/devparmar02/service-booking-viseas',
    accent:'#ff6b2b'
  },
  {
    id:5, num:'005',
    title:'Parking Management System',
    category:'Mobile Application',
    description:'Android app automating parking slot allocation for admins and users. Real-time updates and efficient resource management with modern mobile dev practices.',
    tech:[{icon:<FaAndroid/>,color:'#3ddc84',label:'Android'},{icon:<SiKotlin/>,color:'#a855f7',label:'Kotlin'}],
    github:'https://github.com/devparmar02/parking-management-system',
    accent:'#7c5cff'
  },
  {
    id:6, num:'006',
    title:'Airline Booking Web App',
    category:'Web Application',
    description:'Intuitive flight search and booking system. Advanced filtering, real-time availability, and secure payment integration with clean, maintainable code.',
    tech:[{icon:<FaPhp/>,color:'#8892be',label:'PHP'},{icon:<FaJs/>,color:'#f7df1e',label:'JavaScript'},{icon:<FaHtml5/>,color:'#e34f26',label:'HTML5'}],
    github:'https://github.com/devparmar02/airline-booking',
    accent:'#f5c842'
  },
];

const useInView=(opts={})=>{
  const ref=useRef(null);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('visible');obs.unobserve(el);}},{threshold:opts.threshold||0.08});
    obs.observe(el);return()=>obs.disconnect();
  },[]);
  return ref;
};

const ProjectCard=({project,index})=>{
  const ref=useInView();
  return(
    <div ref={ref} className="reveal" style={{transitionDelay:`${index*0.1}s`,gridColumn:project.featured?'span 2':'span 1'}}>
      <div style={{
        height:'100%',
        background:'#12152a', border:'1px solid #1e2240',
        padding:project.featured?'3rem':'2.25rem',
        position:'relative', overflow:'hidden',
        transition:'all 0.35s',
      }}
      onMouseEnter={e=>{e.currentTarget.style.borderColor=project.accent+'66';e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow=`0 20px 60px ${project.accent}18`;}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor='#1e2240';e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='';}}>

        {/* Top gradient line */}
        <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${project.accent},${project.accent}44,transparent)`}} />
        {/* Bg glow */}
        <div style={{position:'absolute',top:0,right:0,width:'50%',height:'100%',background:`radial-gradient(ellipse at top right,${project.accent}08,transparent 65%)`,pointerEvents:'none'}} />

        <div style={{position:'relative',zIndex:1}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1.5rem'}}>
            <span className="font-mono" style={{fontSize:'0.58rem',color:project.accent,letterSpacing:'0.12em'}}>{project.num}{project.featured?' — FEATURED':''}</span>
            <span style={{fontFamily:'Space Mono, monospace',fontSize:'0.58rem',padding:'0.18rem 0.55rem',border:`1px solid ${project.accent}44`,color:project.accent,letterSpacing:'0.05em'}}>{project.category}</span>
          </div>

          <h3 style={{fontFamily:'Playfair Display, serif',fontWeight:700,fontSize:project.featured?'1.8rem':'1.2rem',lineHeight:1.15,letterSpacing:'-0.01em',marginBottom:'0.85rem',color:'#e8e4d8'}}>
            {project.title}
          </h3>
          <p style={{fontSize:'0.86rem',color:'#5c607a',lineHeight:1.75,marginBottom:'1.75rem',maxWidth:project.featured?640:'100%'}}>
            {project.description}
          </p>

          <div style={{display:'flex',alignItems:'center',gap:'1rem',flexWrap:'wrap',marginBottom:'2rem'}}>
            {project.tech.map(t=>(
              <span key={t.label} title={t.label} style={{fontSize:'1.25rem',color:t.color,transition:'transform 0.2s'}}
                onMouseEnter={e=>e.currentTarget.style.transform='scale(1.3) translateY(-3px)'}
                onMouseLeave={e=>e.currentTarget.style.transform=''}>{t.icon}</span>
            ))}
          </div>

          <div style={{display:'flex',gap:'1.25rem',flexWrap:'wrap'}}>
            {project.github&&(
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                style={{display:'inline-flex',alignItems:'center',gap:'0.45rem',fontFamily:'Space Mono, monospace',fontSize:'0.63rem',letterSpacing:'0.08em',textTransform:'uppercase',color:'#5c607a',textDecoration:'none',transition:'all 0.2s'}}
                onMouseEnter={e=>{e.currentTarget.style.color='#e8e4d8';e.currentTarget.style.gap='0.8rem';}}
                onMouseLeave={e=>{e.currentTarget.style.color='#5c607a';e.currentTarget.style.gap='0.45rem';}}
              ><FaGithub/>GitHub</a>
            )}
            {project.demo&&(
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                style={{display:'inline-flex',alignItems:'center',gap:'0.45rem',fontFamily:'Space Mono, monospace',fontSize:'0.63rem',letterSpacing:'0.08em',textTransform:'uppercase',color:project.accent,textDecoration:'none',transition:'gap 0.2s'}}
                onMouseEnter={e=>e.currentTarget.style.gap='0.8rem'}
                onMouseLeave={e=>e.currentTarget.style.gap='0.45rem'}
              ><FaExternalLinkAlt/>Live Demo</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects=()=>{
  const h=useInView();
  return(
    <section id="projects" style={{background:'#0e1020',padding:'9rem 2.5rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:'5%',left:'10%',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(124,92,255,0.06),transparent 65%)',pointerEvents:'none'}}/>

      {/* Giant number */}
      <div style={{position:'absolute',top:'3rem',right:'3rem',fontFamily:'Playfair Display, serif',fontWeight:900,fontSize:'clamp(6rem,14vw,16rem)',color:'rgba(20,24,50,0.7)',lineHeight:1,pointerEvents:'none',userSelect:'none'}}>03</div>

      <div style={{maxWidth:1100,margin:'0 auto',position:'relative',zIndex:2}}>
        <div ref={h} className="reveal" style={{marginBottom:'5rem'}}>
          <div className="font-mono" style={{fontSize:'0.65rem',color:'#ff6b2b',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'1.25rem',display:'flex',alignItems:'center',gap:'0.75rem'}}>
            <span style={{width:28,height:1,background:'#ff6b2b',display:'inline-block'}}/>03 — Projects
          </div>
          <h2 style={{fontFamily:'Playfair Display, serif',fontWeight:900,lineHeight:0.9,letterSpacing:'-0.02em',fontSize:'clamp(3rem,5.5vw,6rem)'}}>
            Selected{' '}
            <span style={{fontStyle:'italic',background:'linear-gradient(135deg,#ff6b2b,#f5c842)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>work.</span>
          </h2>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'1.5rem'}}>
          {projects.map((p,i)=><ProjectCard key={p.id} project={p} index={i}/>)}
        </div>

        <div style={{marginTop:'3.5rem',textAlign:'center'}}>
          <a href="https://github.com/devparmar02" target="_blank" rel="noopener noreferrer"
            style={{display:'inline-flex',alignItems:'center',gap:'0.7rem',fontWeight:700,fontSize:'0.78rem',letterSpacing:'0.08em',textTransform:'uppercase',color:'#5c607a',textDecoration:'none',border:'1px solid #1e2240',padding:'0.9rem 2.2rem',transition:'all 0.25s'}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(255,107,43,0.45)';e.currentTarget.style.color='#ff6b2b';e.currentTarget.style.transform='translateY(-2px)';}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='#1e2240';e.currentTarget.style.color='#5c607a';e.currentTarget.style.transform='';}}>
            <FaGithub/> Explore More on GitHub
          </a>
        </div>
      </div>

      <style>{`@media(max-width:768px){#projects div[style*="grid-template-columns"]{grid-template-columns:1fr !important}#projects div[style*="span 2"]{grid-column:span 1 !important}}`}</style>
    </section>
  );
};

export default Projects;
