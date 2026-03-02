import { useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Support both 'reveal' and new 'reveal-left'/'reveal-right'/'reveal-scale' classes
    if (!el.classList.contains('reveal-left') && !el.classList.contains('reveal-right') && !el.classList.contains('reveal-scale')) {
      el.classList.add('reveal');
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
    }, { threshold: options.threshold || 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};
