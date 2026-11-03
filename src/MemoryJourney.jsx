import { useEffect, useRef, useState } from 'react';

const ease = value => { const t = Math.max(0, Math.min(1, value)); return t * t * (3 - 2 * t); };

export const memoryIllustrations = [
  { src: '09-memoria-fachada.webp', name: 'A fachada antiga', alt: 'Ilustração da antiga fachada da Verde, com janelas arredondadas, marquise e o automóvel do registro histórico', source: 'img_2773.webp' },
  { src: '10-memoria-desfile.webp', name: 'O desfile', alt: 'Ilustração do desfile do acervo, com três participantes no corredor e o público sentado ao redor', source: 'img_2771.webp' },
  { src: '11-memoria-interior.webp', name: 'O interior antigo', alt: 'Ilustração do antigo interior da Verde, com janela gradeada, mesa, cadeiras tubulares e araras', source: 'img_2784.webp' },
  { src: '12-memoria-outdoor.webp', name: 'A Verde pela cidade', alt: 'Ilustração do outdoor histórico da Verde, com a placa em perspectiva e sua estrutura de apoio', source: 'img_2805.webp' },
];

export function MemoryJourney({ linear }) {
  const section = useRef(null);
  const [ready, setReady] = useState(linear);
  const [motion, setMotion] = useState({ progress: 0, visibility: 0, width: window.innerWidth });

  useEffect(() => {
    if (linear) { setReady(true); return; }
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { setReady(true); observer.disconnect(); }
    }, { rootMargin: '150% 0px' });
    observer.observe(section.current);
    return () => observer.disconnect();
  }, [linear]);

  useEffect(() => {
    if (linear) return;
    let frame;
    const update = () => {
      const element = section.current;
      const range = Math.max(1, element.offsetHeight - window.innerHeight);
      const bounds = element.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -bounds.top / range));
      const visibility = ease((window.innerHeight * .75 - bounds.top) / (window.innerHeight * .75)) * ease(bounds.bottom / (window.innerHeight * .6));
      setMotion(previous => Math.abs(previous.progress - progress) < .0001 && Math.abs(previous.visibility - visibility) < .0001 && previous.width === window.innerWidth
        ? previous : { progress, visibility, width: window.innerWidth });
      frame = undefined;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, [linear]);


  return <section ref={section} className={`memory-journey ${linear ? 'memory-linear' : ''}`} aria-labelledby="memory-title">
    <div className="memory-stage" style={linear ? undefined : { opacity: motion.visibility }}>
      <header className="memory-heading"><h2 id="memory-title">O tempo passa.<br /><em>Os encontros ficam.</em></h2></header>
      <div className="memory-world">
        <div className="memory-ribbon" style={linear ? undefined : { transform: `translate3d(calc(${-motion.progress * 100}% + ${motion.progress * motion.width}px), 0, 0)` }}>
          {memoryIllustrations.map(image => <figure className="memory-vignette" key={image.src}>
            <img src={ready ? '/assets/' + image.src : undefined} alt={image.alt} loading="eager" decoding="async" />
          </figure>)}
        </div>
      </div>
    </div>
  </section>;
}
