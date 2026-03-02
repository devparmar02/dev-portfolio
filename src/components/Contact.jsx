import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const useInView=(opts={})=>{
  const ref=useRef(null);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('visible');obs.unobserve(el);}},{threshold:opts.threshold||0.1});
    obs.observe(el);return()=>obs.disconnect();
  },[]);
  return ref;
};

const inputStyle = {
  width:'100%',padding:'0.9rem 1.2rem',
  background:'#12152a',border:'1px solid #1e2240',
  color:'#e8e4d8',fontFamily:'Space Grotesk, sans-serif',fontSize:'0.88rem',
  outline:'none',transition:'border-color 0.2s, background 0.2s',
};

const Contact=()=>{
  const form=useRef();
  const [sending,setSending]=useState(false);
  const [msg,setMsg]=useState('');
  const h=useInView();
  const grid=useInView({threshold:0.08});

  const sendEmail=(e)=>{
    e.preventDefault();setSending(true);
    emailjs.sendForm('service_re5wcfr','template_8ufuebi',form.current,'XiJLYfRs533Mz_iqj')
      .then(()=>{setMsg('✓ Message sent!');setSending(false);e.target.reset();setTimeout(()=>setMsg(''),5000);})
      .catch(()=>{setMsg('✗ Failed. Try again.');setSending(false);});
  };

  const contacts=[
    {icon:<FaEnvelope/>,label:'Email',val:'devparmar2207@gmail.com',href:'mailto:devparmar2207@gmail.com',color:'#ff6b2b'},
    {icon:<FaLinkedin/>,label:'LinkedIn',val:'linkedin.com/in/dev-parmar',href:'https://www.linkedin.com/in/dev-parmar/',color:'#7c5cff'},
    {icon:<FaGithub/>,label:'GitHub',val:'github.com/devparmar02',href:'https://github.com/devparmar02',color:'#e8e4d8'},
    {icon:<FaMapMarkerAlt/>,label:'Location',val:'Vadodara, India',href:null,color:'#f5c842'},
  ];

  return(
    <section id="contact" style={{background:'#07080f',padding:'9rem 2.5rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',bottom:'5%',left:'20%',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(124,92,255,0.07),transparent 65%)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',top:'10%',right:'5%',width:350,height:350,borderRadius:'50%',background:'radial-gradient(circle,rgba(255,107,43,0.07),transparent 65%)',pointerEvents:'none'}}/>

      {/* Giant number */}
      <div style={{position:'absolute',top:'3rem',right:'3rem',fontFamily:'Playfair Display, serif',fontWeight:900,fontSize:'clamp(6rem,14vw,16rem)',color:'rgba(14,18,40,0.9)',lineHeight:1,pointerEvents:'none',userSelect:'none'}}>04</div>

      <div style={{maxWidth:1100,margin:'0 auto',position:'relative',zIndex:2}}>
        {/* Giant heading — scrollytelling focal point */}
        <div ref={h} className="reveal" style={{marginBottom:'6rem',textAlign:'center'}}>
          <div className="font-mono" style={{fontSize:'0.65rem',color:'#ff6b2b',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'1.5rem',display:'flex',alignItems:'center',justifyContent:'center',gap:'0.75rem'}}>
            <span style={{width:28,height:1,background:'#ff6b2b',display:'inline-block'}}/>04 — Contact<span style={{width:28,height:1,background:'#ff6b2b',display:'inline-block'}}/>
          </div>
          <h2 style={{fontFamily:'Playfair Display, serif',fontWeight:900,lineHeight:0.88,letterSpacing:'-0.03em',fontSize:'clamp(5rem,12vw,13rem)'}}>
            Let's<br/>
            <span style={{fontStyle:'italic',background:'linear-gradient(135deg,#ff6b2b,#f5c842,#7c5cff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>talk.</span>
          </h2>
          <p className="font-mono" style={{fontSize:'0.73rem',color:'#5c607a',letterSpacing:'0.12em',marginTop:'1.25rem'}}>Open to roles, freelance & collaborations</p>
        </div>

        <div ref={grid} className="reveal" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem'}}>
          {/* Left */}
          <div style={{background:'#12152a',border:'1px solid #1e2240',padding:'2.75rem',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(90deg,#ff6b2b,#7c5cff)'}}/>
            <p style={{fontSize:'0.95rem',color:'#5c607a',lineHeight:1.8,marginBottom:'2.75rem'}}>
              Always interested in new projects and opportunities. Feel free to reach out — I'd love to hear about what you're building.
            </p>
            <div style={{display:'flex',flexDirection:'column',gap:'1.75rem'}}>
              {contacts.map(ct=>(
                <div key={ct.label}>
                  {ct.href?(
                    <a href={ct.href} target={ct.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer"
                      style={{display:'flex',alignItems:'center',gap:'1.1rem',textDecoration:'none',transition:'all 0.25s',padding:'0.75rem',borderRadius:0,border:'1px solid transparent'}}
                      onMouseEnter={e=>{e.currentTarget.style.borderColor='#1e2240';e.currentTarget.style.background='#0e1020';}}
                      onMouseLeave={e=>{e.currentTarget.style.borderColor='transparent';e.currentTarget.style.background='transparent';}}>
                      <span style={{color:ct.color,fontSize:'1.1rem',flexShrink:0,width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center',background:'#0e1020',border:'1px solid #1e2240'}}>{ct.icon}</span>
                      <div>
                        <div style={{fontWeight:700,fontSize:'0.85rem',color:'#e8e4d8',marginBottom:'0.12rem'}}>{ct.label}</div>
                        <div className="font-mono" style={{fontSize:'0.68rem',color:'#5c607a'}}>{ct.val}</div>
                      </div>
                    </a>
                  ):(
                    <div style={{display:'flex',alignItems:'center',gap:'1.1rem',padding:'0.75rem'}}>
                      <span style={{color:ct.color,fontSize:'1.1rem',flexShrink:0,width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center',background:'#0e1020',border:'1px solid #1e2240'}}>{ct.icon}</span>
                      <div>
                        <div style={{fontWeight:700,fontSize:'0.85rem',color:'#e8e4d8',marginBottom:'0.12rem'}}>{ct.label}</div>
                        <div className="font-mono" style={{fontSize:'0.68rem',color:'#5c607a'}}>{ct.val}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{background:'#12152a',border:'1px solid #1e2240',padding:'2.75rem',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(90deg,#7c5cff,#ff6b2b)'}}/>
            <form ref={form} onSubmit={sendEmail} style={{display:'flex',flexDirection:'column',gap:'1.35rem'}}>
              {[{name:'user_name',label:'Name',type:'text',placeholder:'Your name'},{name:'user_email',label:'Email',type:'email',placeholder:'your@email.com'}].map(f=>(
                <div key={f.name}>
                  <label className="font-mono" style={{fontSize:'0.6rem',color:'#5c607a',letterSpacing:'0.18em',textTransform:'uppercase',display:'block',marginBottom:'0.55rem'}}>{f.label}</label>
                  <input type={f.type} name={f.name} placeholder={f.placeholder} required style={inputStyle}
                    onFocus={e=>{e.currentTarget.style.borderColor='rgba(255,107,43,0.5)';e.currentTarget.style.background='#0e1020';}}
                    onBlur={e=>{e.currentTarget.style.borderColor='#1e2240';e.currentTarget.style.background='#12152a';}}/>
                </div>
              ))}
              <div>
                <label className="font-mono" style={{fontSize:'0.6rem',color:'#5c607a',letterSpacing:'0.18em',textTransform:'uppercase',display:'block',marginBottom:'0.55rem'}}>Message</label>
                <textarea name="message" rows={5} placeholder="What's on your mind?" required style={{...inputStyle,resize:'none'}}
                  onFocus={e=>{e.currentTarget.style.borderColor='rgba(255,107,43,0.5)';e.currentTarget.style.background='#0e1020';}}
                  onBlur={e=>{e.currentTarget.style.borderColor='#1e2240';e.currentTarget.style.background='#12152a';}}/>
              </div>
              <button type="submit" disabled={sending}
                style={{padding:'0.95rem 2.2rem',background:sending?'#1e2240':'#ff6b2b',color:sending?'#5c607a':'#07080f',fontFamily:'Space Grotesk, sans-serif',fontWeight:700,fontSize:'0.78rem',letterSpacing:'0.08em',textTransform:'uppercase',border:'none',transition:'all 0.25s',cursor:'none'}}
                onMouseEnter={e=>{if(!sending){e.currentTarget.style.transform='translate(-3px,-3px)';e.currentTarget.style.boxShadow='6px 6px 0 #7c5cff';}}}
                onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='';}}
              >{sending?'Sending...':'Send Message →'}</button>
              {msg&&<p className="font-mono" style={{fontSize:'0.73rem',color:msg.includes('✓')?'#ff6b2b':'#f87171',textAlign:'center'}}>{msg}</p>}
            </form>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){#contact .reveal[style]{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
};

export default Contact;
