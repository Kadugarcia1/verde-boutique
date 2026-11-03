import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from '@phosphor-icons/react';

const desktopFilms = [
  { src: 'verde-filme-06.mp4', poster: 'verde-filme-06-poster.jpg', label: 'Filme 1 da Verde Boutique' },
  { src: 'verde-filme-07.mp4', poster: 'verde-filme-07-poster.jpg', label: 'Filme 2 da Verde Boutique' },
  { src: 'verde-filme-08.mp4', poster: 'verde-filme-08-poster.jpg', label: 'Filme 3 da Verde Boutique' },
];
const mobileFilms = [{ src: 'verde-giro-mobile-20s.mp4', poster: 'verde-giro-mobile-20s-poster.jpg', label: 'Um giro pela Verde Boutique' }];

export function BrandFilms({ linear }) {
  const section = useRef(null);
  const videos = useRef([]);
  const [mobile, setMobile] = useState(() => window.matchMedia('(max-width: 700px)').matches);
  const [inView, setInView] = useState(false);
  const [tabVisible, setTabVisible] = useState(() => !document.hidden);
  const [manualPlayback, setManualPlayback] = useState(null);
  const [playing, setPlaying] = useState(false);
  const sources = mobile ? mobileFilms : desktopFilms;
  const shouldPlay = inView && tabVisible && (manualPlayback ?? !linear);

  useEffect(() => { setManualPlayback(null); }, [linear]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 700px)');
    const resize = () => setMobile(media.matches);
    const visibility = () => setTabVisible(!document.hidden);
    const observer = new IntersectionObserver(entries => setInView(entries[0].isIntersecting), { threshold: .15 });
    observer.observe(section.current);
    media.addEventListener('change', resize);
    document.addEventListener('visibilitychange', visibility);
    return () => { observer.disconnect(); media.removeEventListener('change', resize); document.removeEventListener('visibilitychange', visibility); };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const elements = videos.current.filter(Boolean);
    if (shouldPlay) {
      Promise.allSettled(elements.map(video => { video.muted = true; return video.play(); }))
        .then(() => { if (!cancelled) setPlaying(elements.some(video => !video.paused)); });
    } else {
      elements.forEach(video => video.pause());
      setPlaying(false);
    }
    return () => { cancelled = true; elements.forEach(video => video.pause()); };
  }, [shouldPlay, mobile]);

  const toggle = () => setManualPlayback(!playing);
  const label = playing ? (mobile ? 'Pausar vídeo' : 'Pausar vídeos') : (mobile ? 'Reproduzir vídeo' : 'Reproduzir vídeos');

  return <section className="brand-films" ref={section} aria-label="A Verde em movimento">
    <div className="film-toolbar"><p className="eyebrow">A Verde em movimento</p><button className="film-playback" onClick={toggle}>{playing ? <Pause size={17} /> : <Play size={17} />}<span>{label}</span></button></div>
    <div className={`film-grid ${mobile ? 'film-grid-mobile' : ''}`}>
      {sources.map((film, i) => <figure className="film-frame" key={film.src}>
        <video ref={element => { videos.current[i] = element; }} src={'/assets/' + film.src} poster={'/assets/' + film.poster} aria-label={film.label} muted playsInline loop preload="metadata" />
      </figure>)}
    </div>
  </section>;
}
