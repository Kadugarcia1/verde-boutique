import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowsOut, EnvelopeSimple, InstagramLogo, List, Phone, X } from '@phosphor-icons/react';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/600-italic.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import { brands, chapters, details, gallery, looks, memories } from './content.js';
import { MemoryJourney } from './MemoryJourney.jsx';
import { BrandFilms } from './BrandFilms.jsx';
import { ArrivalJourney } from './ArrivalJourney.jsx';
import { AmbientAudio } from './AmbientAudio.jsx';
import { IllustrationPalette } from './IllustrationPalette.jsx';

const clamp = n => Math.max(0, Math.min(1, n));
const Photo = ({ src, ...props }) => <img src={'/assets/' + src} decoding="async" {...props} />;

function Gallery({ index, setIndex, close }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    element.showModal();
    return () => { element.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  const move = n => setIndex((index + n + gallery.length) % gallery.length);
  return <dialog ref={dialog} className="gallery-dialog" aria-label="Fotografias da Verde Boutique"
    onCancel={e => { e.preventDefault(); close(); }} onKeyDown={e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); move(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); }
    }}>
    <button className="icon-button gallery-close" onClick={close} aria-label="Fechar fotografias" autoFocus><X size={26} /></button>
    <div className="gallery-image"><Photo src={gallery[index].src} alt={gallery[index].alt} /></div>
    <div className="gallery-caption">
      <div className="gallery-controls"><button className="icon-button" onClick={() => move(-1)} aria-label="Foto anterior"><ArrowLeft size={24} /></button><span aria-live="polite">{String(index + 1).padStart(2, '0')} / {gallery.length}</span><button className="icon-button" onClick={() => move(1)} aria-label="Próxima foto"><ArrowRight size={24} /></button></div>
    </div>
  </dialog>;
}

function PhotoGrid({ items, count, kind, onOpen }) {
  return <div className={`photo-grid grid-${count} grid-${kind}`} data-card-grid={kind}>
    {items.map(item => <figure className="photo-card" key={item.src}>
      <button className="card-picture" onClick={() => onOpen(gallery.findIndex(g => g.src === item.src))} aria-label={'Ampliar: ' + item.title}>
        <Photo src={item.src} alt={item.alt} loading="lazy" /><span className="enlarge"><ArrowsOut size={19} /><span>Ver fotografia</span></span>
      </button>
    </figure>)}
  </div>;
}

function TimelineScene({ src, alt }) {
  return <figure className="timeline-scene timeline-scene-current"><Photo src={src} alt={alt} loading="lazy" /></figure>;
}

export function Journal() {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [reading, setReading] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [surface, setSurface] = useState({ header: false, footer: false });
  const [arrival, setArrival] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(null);
  const arrivalRef = useRef(null);
  const linear = reduced || reading;
  const dark = surface.header;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const changed = () => setReduced(media.matches);
    media.addEventListener('change', changed);
    return () => media.removeEventListener('change', changed);
  }, []);
  useEffect(() => {
    let frame;
    const update = () => {
      const max = Math.max(1, arrivalRef.current.offsetHeight - window.innerHeight);
      setArrival(clamp(window.scrollY / max));
      let current = 0;
      chapters.forEach((c, i) => { if (document.getElementById(c.id).getBoundingClientRect().top <= window.innerHeight * 0.36) current = i; });
      setActive(current); frame = undefined;
      const bounds = document.getElementById('detalhes').getBoundingClientRect();
      const header = bounds.top <= 70 && bounds.bottom > 70;
      const footer = bounds.top <= window.innerHeight - 40 && bounds.bottom > window.innerHeight - 40;
      setSurface(previous => previous.header === header && previous.footer === footer ? previous : { header, footer });
    };
    const changed = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); window.addEventListener('scroll', changed, { passive: true }); window.addEventListener('resize', changed);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', changed); window.removeEventListener('resize', changed); };
  }, [linear]);
  useEffect(() => {
    const escape = e => { if (e.key === 'Escape' && menu) { setMenu(false); document.querySelector('.menu-toggle')?.focus(); } };
    window.addEventListener('keydown', escape); return () => window.removeEventListener('keydown', escape);
  }, [menu]);
  const go = i => { setMenu(false); if (i === 0) window.scrollTo({ top: 0, behavior: 'instant' }); else document.getElementById(chapters[i].id).scrollIntoView({ behavior: 'instant', block: 'start' }); };
  const toggleReading = () => { setReading(!reading); setMenu(false); window.scrollTo({ top: 0, behavior: 'instant' }); };
  const link = (c, i) => <a key={c.id} href={'#' + c.id} onClick={e => { e.preventDefault(); go(i); }}>{c.title}</a>;

  return <div className={`journal ${dark ? 'header-dark' : ''} ${surface.footer ? 'footer-dark' : ''} ${active > 0 ? 'in-content' : ''} ${linear ? 'reading-mode' : ''} ${active === 0 && arrival > .03 ? 'approaching' : ''}`}>
    <IllustrationPalette />
    <a className="skip-link" href="#memorias" onClick={e => { e.preventDefault(); setReading(true); }}>Ler sem movimento</a>
    <header className="site-header"><AmbientAudio /><nav className="header-nav header-left" aria-label="História da Verde">{chapters.slice(0, 2).map(link)}</nav><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="chapter-menu"><List size={22} /><span>Capítulos</span></button><a className="brand" href="#casa" onClick={e => { e.preventDefault(); go(0); }} aria-label="Verde, voltar ao início"><Photo src={dark ? 'logo-claro.png' : 'logo-verde.png'} alt="VERDE" /><span>Desde 1973</span></a><nav className="header-nav header-right" aria-label="Universo Verde">{chapters.slice(2).map((c, i) => link(c, i + 2))}</nav></header>
    {menu && <nav className="chapter-menu" id="chapter-menu" aria-label="Capítulos">{chapters.map((c, i) => <a key={c.id} href={'#' + c.id} onClick={e => { e.preventDefault(); go(i); }}><span>0{i + 1}</span>{c.title}<ArrowRight size={20} /></a>)}<button className="underlined" onClick={toggleReading}>{linear ? 'Voltar à imersão' : 'Ler sem movimento'}</button></nav>}

    <main>
      <ArrivalJourney linear={linear} progress={arrival} sectionRef={arrivalRef} />

      <div className="chapter-track memory-track" id="memorias">
      <section className="story-interlude" aria-label="Uma passagem pela memória"><p className="eyebrow">Uma história feita de encontros</p><h2>Os lugares guardam o tempo.<br /><em>As pessoas levam as histórias.</em></h2></section>
      <MemoryJourney linear={linear} />
      <section className="chapter chapter-memory">
        <header className="chapter-heading"><p className="eyebrow">Do acervo da Verde</p><h2>A memória ganha<br /><em>outros contornos.</em></h2><p>Os registros reais de lugares, pessoas e encontros que fazem parte da nossa história.</p></header>
        <PhotoGrid items={memories} count={4} kind="memories" onOpen={setGalleryIndex} />
        <button className="underlined chapter-link" onClick={() => setGalleryIndex(gallery.findIndex(item => item.src === 'img_2796.webp'))}>Mais histórias do acervo<ArrowRight size={18} /></button>
      </section>
      </div>

      <div className="chapter-track" id="moda">
      <TimelineScene src="06-interior-da-verde.webp" alt="Ilustração do interior atual da Verde com roupas, cadeiras, plantas e o emblema de 1973" />
      <section className="chapter chapter-fashion">
        <div className="time-turn"><span>1973</span><p>O tempo muda.<br /><em>O olhar se renova.</em></p><span>Hoje</span></div>
        <header className="chapter-heading"><p className="eyebrow">Hoje — O vestir</p><h2>Um jeito de vestir.<br /><em>Muitas formas de ser.</em></h2></header>
        <PhotoGrid items={looks} count={6} kind="looks" onOpen={setGalleryIndex} />
      </section>
      </div>

      <section className="chapter chapter-details" id="detalhes">
        <header className="chapter-heading"><p className="eyebrow">De perto — Detalhes</p><h2>A beleza está<br /><em>em cada detalhe.</em></h2></header>
        <PhotoGrid items={details} count={8} kind="details" onOpen={setGalleryIndex} />
      </section>

      <section className="chapter chapter-brands" id="curadoria">
        <BrandFilms linear={linear} />
        <header className="chapter-heading"><p className="eyebrow">Em movimento — Curadoria</p><h2>Diferentes olhares.<br /><em>Um universo Verde.</em></h2><p>Marcas que fazem parte do nosso repertório e encontram seu lugar na casa.</p></header>
        <div className="brand-grid" data-card-grid="brands">{brands.map(b => <figure className="brand-card" key={b.name}><div className="brand-art"><Photo src={b.src} alt={'Logotipo ' + b.name} className={b.className} loading="lazy" /></div></figure>)}</div>
        <div className="closing"><p className="eyebrow">Verde e suas tantas facetas.</p><h2>Há histórias que<br /><em>continuam com você.</em></h2>
          <nav className="contact-links" aria-label="Fale com a Verde">
            <a href="https://www.instagram.com/verdeboutique/" target="_blank" rel="noopener noreferrer"><InstagramLogo size={19} /><span>@verdeboutique</span></a>
            <a href="tel:+5519997001777"><Phone size={19} /><span>+55 19 99700-1777</span></a>
            <a href="mailto:verdeboutique1973@gmail.com"><EnvelopeSimple size={19} /><span>verdeboutique1973@gmail.com</span></a>
          </nav>
          <button className="underlined" onClick={() => go(0)}>Voltar ao início<ArrowLeft size={18} /></button></div>
      </section>
    </main>

    <footer className="story-footer"><button className="reading-toggle" onClick={toggleReading} disabled={reduced}>{reduced ? 'Movimento reduzido' : linear ? 'Voltar à imersão' : 'Ler sem movimento'}</button><nav className="chapter-progress" aria-label="Linha do tempo da Verde">{chapters.map((c, i) => <button key={c.id} onClick={() => go(i)} aria-label={`Capítulo ${i + 1}: ${c.title}`} aria-current={active === i ? 'step' : undefined}><span className={`progress-track ${active >= i ? 'visited' : ''}`} /><span className="chapter-label">{c.time} — {c.title}</span></button>)}</nav><span className="chapter-counter" aria-live="polite">0{active + 1} / 05</span></footer>
    {galleryIndex !== null && <Gallery index={galleryIndex} setIndex={setGalleryIndex} close={() => setGalleryIndex(null)} />}
  </div>;
}
