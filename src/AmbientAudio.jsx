import { useRef, useState } from 'react';
import { SpeakerHigh, SpeakerSlash } from '@phosphor-icons/react';

export function AmbientAudio() {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const toggle = async () => {
    const element = audio.current;
    if (!element.paused) { element.pause(); return; }
    element.volume = .28;
    setError(false);
    try { await element.play(); } catch { setError(true); }
  };
  const label = playing ? 'Pausar música' : 'Ativar música';
  return <>
    <audio ref={audio} src="/assets/verde-musica.m4a" loop preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setError(true)} />
    <button className="audio-toggle" onClick={toggle} aria-label={label} title={label} aria-pressed={playing}>{playing ? <SpeakerHigh size={21} /> : <SpeakerSlash size={21} />}</button>
    {error && <span className="sr-only" role="status">Não foi possível iniciar a música. Tente ativá-la novamente.</span>}
  </>;
}
