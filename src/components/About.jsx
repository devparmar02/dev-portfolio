import React, { useState, useEffect, useRef } from 'react';

const milestones = [
  { id:0, year:'2019', title:'Secondary School (10th)', sub:'State Board', desc:'Built strong foundations in Science and Mathematics.' },
  { id:1, year:'2021', title:'Higher Secondary (12th)', sub:'Science Stream', desc:'Specialized in Physics, Chemistry, and Mathematics.' },
  { id:2, year:'2027', title:'B.Tech Information Technology', sub:'ITM SLS Baroda University', desc:'Pursuing degree with focus on Full Stack Development and emerging technologies.' },
  { id:3, year:'Now', title:'Internship & Projects', sub:'Building production-grade apps', desc:'Developing real-world applications and expanding professional experience.' },
];

const useInView = (opts = {}) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const cls = opts.cls || 'visible';
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add(cls); obs.unobserve(el); } }, { threshold: opts.threshold || 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const About = () => {
  const [active, setActive] = useState(2);
  const h = useInView();
  const left = useInView({ cls:'visible' });
  const right = useInView({ cls:'visible' });

  return (
    <section id="about" style={{ background:'#0e1020', padding:'9rem 2.5rem', position:'relative', overflow:'hidden' }}>
      {/* Decorative elements */}
      <div style={{ position:'absolute', top:0, right:'15%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(124,92,255,0.08),transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'5%', left:'-5%', width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle,rgba(255,107,43,0.06),transparent 65%)', pointerEvents:'none' }} />

      {/* Giant chapter number */}
      <div style={{ position:'absolute', top:'3rem', right:'3rem', fontFamily:'Playfair Display, serif', fontWeight:900, fontSize:'clamp(6rem,14vw,16rem)', color:'rgba(30,34,64,0.6)', lineHeight:1, pointerEvents:'none', userSelect:'none' }}>01</div>

      <div style={{ maxWidth:1100, margin:'0 auto', position:'relative', zIndex:2 }}>
        <div ref={h} className="reveal" style={{ marginBottom:'5rem' }}>
          <div className="font-mono" style={{ fontSize:'0.65rem', color:'#ff6b2b', letterSpacing:'0.25em', textTransform:'uppercase', marginBottom:'1.25rem', display:'flex', alignItems:'center', gap:'0.75rem' }}>
            <span style={{ width:28, height:1, background:'#ff6b2b', display:'inline-block' }} />01 — About
          </div>
          <h2 style={{ fontFamily:'Playfair Display, serif', fontWeight:900, lineHeight:0.9, letterSpacing:'-0.02em', fontSize:'clamp(3rem,5.5vw,6rem)' }}>
            Who{' '}
            <span style={{ fontStyle:'italic', background:'linear-gradient(135deg,#ff6b2b,#f5c842)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>I am.</span>
          </h2>
        </div>

        {/* Scrollytelling layout */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'6rem', alignItems:'start' }}>
          {/* Bio - sticky */}
          <div ref={left} className="reveal-left" style={{ position:'sticky', top:'20vh' }}>
            <div style={{ padding:'2.5rem', background:'#12152a', border:'1px solid #1e2240', borderLeft:'3px solid #ff6b2b', marginBottom:'2rem' }}>
              <p style={{ fontFamily:'Playfair Display, serif', fontSize:'1.35rem', fontStyle:'italic', color:'#e8e4d8', lineHeight:1.5, marginBottom:'1rem' }}>
                "Code is a tool; solving the problem is the goal."
              </p>
              <div style={{ width:40, height:1, background:'#ff6b2b' }} />
            </div>
            {[
              <>I'm a <strong style={{color:'#e8e4d8'}}>full-stack developer</strong> driven by clean architecture and delightful UX. My journey spans MERN stack apps, AI-powered tools, mobile dev with Kotlin, and data engineering.</>,
              <>Currently finalizing my B.Tech in IT while shipping production-grade applications that turn complex ideas into working, polished products.</>,
              <>When not coding, I explore new tech, contribute to open source, and stay sharp on industry trends.</>,
            ].map((t,i) => (
              <p key={i} style={{ fontSize:'0.93rem', color:'#5c607a', lineHeight:1.85, marginBottom:'1rem' }}>{t}</p>
            ))}
          </div>

          {/* Timeline */}
          <div ref={right} className="reveal-right">
            <div style={{ position:'relative' }}>
              {/* Vertical line */}
              <div style={{ position:'absolute', left:20, top:0, bottom:0, width:1, background:'linear-gradient(to bottom, #ff6b2b, #7c5cff, transparent)' }} />

              {milestones.map((m,i) => (
                <div key={m.id} onClick={() => setActive(i)}
                  style={{
                    marginLeft:52, marginBottom: i < milestones.length-1 ? '2rem' : 0,
                    padding:'1.5rem 1.75rem',
                    background: active===i ? '#12152a' : 'transparent',
                    border: active===i ? '1px solid #1e2240' : '1px solid transparent',
                    borderLeft: active===i ? '2px solid #ff6b2b' : '2px solid transparent',
                    cursor:'none', transition:'all 0.35s',
                    position:'relative'
                  }}>
                  {/* Dot */}
                  <div style={{
                    position:'absolute', left:-44, top:'1.5rem',
                    width:16, height:16, borderRadius:'50%',
                    background: i<=active ? 'linear-gradient(135deg,#ff6b2b,#f5c842)' : '#12152a',
                    border:'2px solid', borderColor: i<=active ? '#ff6b2b' : '#1e2240',
                    transition:'all 0.35s',
                    boxShadow: i===active ? '0 0 12px rgba(255,107,43,0.5)' : 'none'
                  }} />

                  <div className="font-mono" style={{ fontSize:'0.62rem', color: active===i ? '#ff6b2b':'#5c607a', letterSpacing:'0.12em', marginBottom:'0.35rem' }}>{m.year}</div>
                  <div style={{ fontWeight:700, fontSize:'0.95rem', color:'#e8e4d8', marginBottom:'0.15rem' }}>{m.title}</div>
                  <div className="font-mono" style={{ fontSize:'0.62rem', color:'#5c607a' }}>{m.sub}</div>
                  {active===i && (
                    <p style={{ marginTop:'0.8rem', fontSize:'0.83rem', color:'#5c607a', lineHeight:1.65, borderTop:'1px solid #1e2240', paddingTop:'0.8rem' }}>{m.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){#about > div > div[style*="grid"]{grid-template-columns:1fr !important;gap:3rem !important}}`}</style>
    </section>
  );
};

export default About;
