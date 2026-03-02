import React, { useEffect, useRef } from 'react';

const CursorFollower=()=>{
  const dotRef=useRef(null);
  const ringRef=useRef(null);
  let rx=0,ry=0,mx=0,my=0;

  useEffect(()=>{
    const move=(e)=>{mx=e.clientX;my=e.clientY;};
    document.addEventListener('mousemove',move);
    let raf;
    const animate=()=>{
      rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;
      if(dotRef.current){dotRef.current.style.left=mx+'px';dotRef.current.style.top=my+'px';}
      if(ringRef.current){ringRef.current.style.left=rx+'px';ringRef.current.style.top=ry+'px';}
      raf=requestAnimationFrame(animate);
    };
    animate();
    const grow=()=>{if(dotRef.current){dotRef.current.style.width='20px';dotRef.current.style.height='20px';dotRef.current.style.background='#7c5cff';}};
    const shrink=()=>{if(dotRef.current){dotRef.current.style.width='10px';dotRef.current.style.height='10px';dotRef.current.style.background='#ff6b2b';}};
    document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',grow);el.addEventListener('mouseleave',shrink);});
    return()=>{document.removeEventListener('mousemove',move);cancelAnimationFrame(raf);};
  },[]);

  return(
    <>
      <div ref={dotRef} style={{position:'fixed',width:10,height:10,background:'#ff6b2b',borderRadius:'50%',pointerEvents:'none',zIndex:9999,transform:'translate(-50%,-50%)',mixBlendMode:'difference',transition:'width 0.2s,height 0.2s,background 0.2s'}}/>
      <div ref={ringRef} style={{position:'fixed',width:38,height:38,border:'1px solid rgba(255,107,43,0.35)',borderRadius:'50%',pointerEvents:'none',zIndex:9998,transform:'translate(-50%,-50%)',transition:'border-color 0.2s'}}/>
    </>
  );
};

export default CursorFollower;
