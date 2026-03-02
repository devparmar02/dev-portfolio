import React, { useEffect, useRef } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaGitAlt, FaAndroid, FaFigma, FaPython, FaDatabase, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiKotlin, SiVite, SiMysql, SiDjango, SiFlask, SiNumpy, SiPandas } from 'react-icons/si';

const categories = [
  {
    name: 'Frontend', color:'#ff6b2b',
    skills:[
      {name:'React',icon:<FaReact />,color:'#61dafb'},
      {name:'JavaScript',icon:<FaJs />,color:'#f7df1e'},
      {name:'Tailwind',icon:<SiTailwindcss />,color:'#38bdf8'},
      {name:'HTML5',icon:<FaHtml5 />,color:'#e34f26'},
      {name:'CSS3',icon:<FaCss3Alt />,color:'#264de4'},
      {name:'Vite',icon:<SiVite />,color:'#a855f7'},
    ]
  },
  {
    name: 'Backend', color:'#7c5cff',
    skills:[
      {name:'Node.js',icon:<FaNodeJs />,color:'#68a063'},
      {name:'Express',icon:<SiExpress />,color:'#e8e4d8'},
      {name:'MongoDB',icon:<SiMongodb />,color:'#4db33d'},
      {name:'MySQL',icon:<SiMysql />,color:'#4479a1'},
      {name:'PostgreSQL',icon:<SiPostgresql />,color:'#336791'},
      {name:'PHP',icon:<FaPhp />,color:'#8892be'},
      {name:'Python',icon:<FaPython />,color:'#3b82f6'},
    ]
  },
  {
    name: 'Mobile', color:'#f5c842',
    skills:[
      {name:'Android',icon:<FaAndroid />,color:'#3ddc84'},
      {name:'Kotlin',icon:<SiKotlin />,color:'#a855f7'},
    ]
  },
  {
    name: 'Python Libs', color:'#ff6b2b',
    skills:[
      {name:'Django',icon:<SiDjango />,color:'#69ba9f'},
      {name:'Flask',icon:<SiFlask />,color:'#e8e4d8'},
      {name:'NumPy',icon:<SiNumpy />,color:'#4b8bbe'},
      {name:'Pandas',icon:<SiPandas />,color:'#e7008a'},
      {name:'FastAPI',icon:<FaPython />,color:'#059669'},
    ]
  },
  {
    name: 'Tools', color:'#7c5cff',
    skills:[
      {name:'Git',icon:<FaGitAlt />,color:'#f05032'},
      {name:'Figma',icon:<FaFigma />,color:'#a259ff'},
      {name:'Databases',icon:<FaDatabase />,color:'#f5c842'},
    ]
  }
];

const useInView = (opts={}) => {
  const ref = useRef(null);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('visible');obs.unobserve(el);}},{threshold:opts.threshold||0.1});
    obs.observe(el);return()=>obs.disconnect();
  },[]);
  return ref;
};

const SkillPill = ({skill}) => (
  <div style={{
    display:'flex',alignItems:'center',gap:'0.65rem',
    padding:'0.7rem 1.2rem',
    background:'#12152a', border:'1px solid #1e2240',
    transition:'all 0.25s', position:'relative', overflow:'hidden'
  }}
  onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(255,107,43,0.4)';e.currentTarget.style.background='#181c35';e.currentTarget.style.transform='translateY(-2px)';}}
  onMouseLeave={e=>{e.currentTarget.style.borderColor='#1e2240';e.currentTarget.style.background='#12152a';e.currentTarget.style.transform='';}}>
    <span style={{color:skill.color,fontSize:'1.15rem'}}>{skill.icon}</span>
    <span style={{fontWeight:600,fontSize:'0.82rem',color:'#e8e4d8'}}>{skill.name}</span>
  </div>
);

const Skills = () => {
  const h = useInView();

  return (
    <section id="skills" style={{background:'#07080f',padding:'9rem 2.5rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',bottom:'10%',right:'10%',width:450,height:450,borderRadius:'50%',background:'radial-gradient(circle,rgba(255,107,43,0.07),transparent 65%)',pointerEvents:'none'}} />

      {/* Giant chapter number */}
      <div style={{position:'absolute',top:'3rem',right:'3rem',fontFamily:'Playfair Display, serif',fontWeight:900,fontSize:'clamp(6rem,14vw,16rem)',color:'rgba(20,24,50,0.8)',lineHeight:1,pointerEvents:'none',userSelect:'none'}}>02</div>

      <div style={{maxWidth:1100,margin:'0 auto',position:'relative',zIndex:2}}>
        <div ref={h} className="reveal" style={{marginBottom:'5rem'}}>
          <div className="font-mono" style={{fontSize:'0.65rem',color:'#ff6b2b',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'1.25rem',display:'flex',alignItems:'center',gap:'0.75rem'}}>
            <span style={{width:28,height:1,background:'#ff6b2b',display:'inline-block'}}/>02 — Skills
          </div>
          <h2 style={{fontFamily:'Playfair Display, serif',fontWeight:900,lineHeight:0.9,letterSpacing:'-0.02em',fontSize:'clamp(3rem,5.5vw,6rem)'}}>
            What I{' '}
            <span style={{fontStyle:'italic',background:'linear-gradient(135deg,#7c5cff,#ff6b2b)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>work with.</span>
          </h2>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:'3.5rem'}}>
          {categories.map((cat,ci)=>{
            const ref=useInView({threshold:0.08});
            return (
              <div key={cat.name} ref={ref} className="reveal" style={{transitionDelay:`${ci*0.1}s`}}>
                <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1.25rem'}}>
                  <span style={{fontFamily:'Space Mono, monospace',fontSize:'0.62rem',color:cat.color,letterSpacing:'0.2em',textTransform:'uppercase'}}>{cat.name}</span>
                  <div style={{flex:1,height:1,background:`linear-gradient(90deg, ${cat.color}40, transparent)`}} />
                </div>
                <div style={{display:'flex',flexWrap:'wrap',gap:'0.65rem'}}>
                  {cat.skills.map(s=><SkillPill key={s.name} skill={s}/>)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div style={{marginTop:'5rem',padding:'2.5rem',background:'linear-gradient(135deg,#12152a,#0e1020)',border:'1px solid #1e2240',borderTop:'2px solid #ff6b2b',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:0,right:0,bottom:0,width:'30%',background:'radial-gradient(ellipse at right,rgba(124,92,255,0.08),transparent 70%)'}}/>
          <p style={{fontSize:'1rem',color:'#5c607a',lineHeight:1.8}}>
            Full-stack developer with expertise in <span style={{color:'#ff6b2b',fontWeight:600}}>web and mobile development</span>. Proficient in both frontend and backend, with hands-on experience building scalable applications using modern frameworks and databases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
