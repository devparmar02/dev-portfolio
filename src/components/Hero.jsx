import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const parallax = scrollY * 0.4;

  return (
    <section id="home" style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
    }}>
      {/* Animated bg orbs */}
      <div style={{ position:'absolute', inset:0, zIndex:0 }}>
        <div className="bg-dots" style={{ position:'absolute', inset:0, opacity:0.6 }} />
        <div style={{
          position:'absolute', top:'15%', right:'-5%',
          width:700, height:700, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(124,92,255,0.12) 0%, transparent 65%)',
          transform:`translateY(${-parallax * 0.5}px)`,
          transition:'transform 0.1s linear'
        }} />
        <div style={{
          position:'absolute', bottom:'-10%', left:'-8%',
          width:600, height:600, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(255,107,43,0.1) 0%, transparent 65%)',
          transform:`translateY(${parallax * 0.3}px)`,
        }} />
        <div style={{
          position:'absolute', top:'50%', left:'40%',
          width:300, height:300, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(245,200,66,0.06) 0%, transparent 65%)',
        }} />
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 2.5rem', paddingTop:'6rem', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center', width:'100%', position:'relative', zIndex:2 }}>
        {/* Left */}
        <div>
          <div className="hu1 font-mono" style={{ fontSize:'0.65rem', color:'#ff6b2b', letterSpacing:'0.25em', textTransform:'uppercase', marginBottom:'2rem', display:'flex', alignItems:'center', gap:'0.75rem' }}>
            <span style={{ width:32, height:1, background:'#ff6b2b', display:'inline-block' }} />
            Available · Full Stack Developer
          </div>

          <h1 className="hu2" style={{ fontFamily:'Playfair Display, serif', fontWeight:900, lineHeight:0.9, letterSpacing:'-0.02em', fontSize:'clamp(4rem,8.5vw,9rem)', marginBottom:'1.75rem' }}>
            Dev<br />
            <span style={{ fontStyle:'italic', background:'linear-gradient(135deg, #ff6b2b, #f5c842)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Parmar.
            </span>
          </h1>

          <p className="hu3" style={{ fontSize:'1rem', color:'#5c607a', lineHeight:1.8, maxWidth:440, marginBottom:'2.5rem' }}>
            I build <strong style={{ color:'#e8e4d8' }}>scalable, beautiful full-stack apps</strong> — from MERN platforms to AI-powered tools — with sharp attention to UX and code quality.
          </p>

          <div className="hu4" style={{ display:'flex', gap:'1rem', flexWrap:'wrap', marginBottom:'3.5rem' }}>
            <a href="#projects"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.6rem', padding:'0.9rem 2.2rem', background:'#ff6b2b', color:'#07080f', fontFamily:'Space Grotesk, sans-serif', fontWeight:700, fontSize:'0.78rem', letterSpacing:'0.08em', textTransform:'uppercase', textDecoration:'none', transition:'all 0.25s' }}
              className="glow-pulse"
              onMouseEnter={e => { e.currentTarget.style.transform='translate(-3px,-3px)'; e.currentTarget.style.boxShadow='6px 6px 0 #7c5cff'; }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}>
              View Work →
            </a>
            <a href="resume.pdf" download
              style={{ display:'inline-flex', alignItems:'center', gap:'0.6rem', padding:'0.9rem 2.2rem', background:'transparent', color:'#e8e4d8', fontFamily:'Space Grotesk, sans-serif', fontWeight:600, fontSize:'0.78rem', letterSpacing:'0.08em', textTransform:'uppercase', textDecoration:'none', border:'1px solid #1e2240', transition:'all 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,107,43,0.5)'; e.currentTarget.style.color='#ff6b2b'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='#1e2240'; e.currentTarget.style.color='#e8e4d8'; }}>
              Download CV
            </a>
          </div>

          <div className="hu5" style={{ display:'flex', gap:'2.5rem' }}>
            {[['MERN','Stack'],['6+','Projects'],['B.Tech','IT 2027']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily:'Playfair Display, serif', fontWeight:700, fontSize:'1.6rem', background:'linear-gradient(135deg,#ff6b2b,#f5c842)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', lineHeight:1 }}>{n}</div>
                <div className="font-mono" style={{ fontSize:'0.58rem', color:'#5c607a', letterSpacing:'0.18em', textTransform:'uppercase', marginTop:'0.3rem' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – visual card */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ position:'relative', width:340, height:420 }}>
            <div className="spin-slow" style={{
              position:'absolute', top:'-20%', left:'-20%', width:'140%', height:'140%',
              background:'conic-gradient(from 0deg, transparent 0%, rgba(255,107,43,0.08) 20%, transparent 40%, rgba(124,92,255,0.08) 60%, transparent 80%)',
              borderRadius:'50%'
            }} />
            {/* Card */}
            <div style={{
              position:'absolute', inset:0,
              background:'linear-gradient(145deg, #12152a, #0e1020)',
              border:'1px solid #1e2240',
              overflow:'hidden'
            }}>
              <div className="stripe-bg" style={{ position:'absolute', inset:0, opacity:0.6 }} />
              {/* Top accent bar */}
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,#ff6b2b,#7c5cff)' }} />
              {/* Profile */}
              <div style={{ position:'absolute', top:'1.75rem', left:'50%', transform:'translateX(-50%)', width:96, height:96, borderRadius:'50%', border:'2px solid #ff6b2b', overflow:'hidden', background:'#1e2240' }}>
                <img src="image.png" alt="Dev Parmar" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
              {/* Code */}
              <div style={{ position:'absolute', bottom:'1.5rem', left:'1.5rem', right:'1.5rem', fontFamily:'Space Mono, monospace', fontSize:'0.6rem', lineHeight:2, color:'#5c607a' }}>
                <div><span style={{color:'#7c5cff'}}>const</span> dev = {'{'}</div>
                <div>&nbsp; name: <span style={{color:'#ff6b2b'}}>"Dev Parmar"</span>,</div>
                <div>&nbsp; stack: <span style={{color:'#f5c842'}}>"MERN"</span>,</div>
                <div>&nbsp; open: <span style={{color:'#7c5cff'}}>true</span></div>
                <div>{'}'}</div>
              </div>
            </div>
            {/* Tags */}
            <div className="float1" style={{ position:'absolute', top:-16, right:20, background:'#ff6b2b', color:'#07080f', fontFamily:'Space Mono, monospace', fontSize:'0.6rem', padding:'0.3rem 0.75rem', letterSpacing:'0.06em', fontWeight:700 }}>Full Stack ⚡</div>
            <div className="float2" style={{ position:'absolute', left:-20, top:'38%', background:'#7c5cff', color:'#fff', fontFamily:'Space Mono, monospace', fontSize:'0.6rem', padding:'0.3rem 0.75rem', letterSpacing:'0.06em' }}>Open to Work</div>
            <div className="float3" style={{ position:'absolute', bottom:-16, left:30, background:'#12152a', color:'#5c607a', fontFamily:'Space Mono, monospace', fontSize:'0.6rem', padding:'0.3rem 0.75rem', letterSpacing:'0.06em', border:'1px solid #1e2240' }}>Vadodara, IN</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-bounce" style={{ position:'absolute', bottom:'2rem', left:'50%', display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem' }}>
        <div style={{ width:1, height:52, background:'linear-gradient(to bottom, transparent, #5c607a)' }} />
        <span className="font-mono" style={{ fontSize:'0.58rem', color:'#5c607a', letterSpacing:'0.18em', textTransform:'uppercase' }}>scroll</span>
      </div>

      <style>{`@media(max-width:900px){#home>div{grid-template-columns:1fr !important}#home>div>div:last-child{display:none !important}}`}</style>
    </section>
  );
};

export default Hero;
