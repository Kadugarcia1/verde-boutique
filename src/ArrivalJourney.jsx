export const arrivalViews = [
  { src: '13-hero-plano-amplo.webp', name: 'Plano amplo', alt: 'Plano amplo ilustrado da casa atual da Verde, vista da rua com o muro e o portão' },
  { src: '14-hero-dentro-portoes.webp', name: 'Dentro dos portões', alt: 'Segunda aproximação ilustrada, já dentro do portão, com o piso conduzindo à varanda' },
  { src: '15-hero-porta.webp', name: 'A porta', alt: 'Terceira aproximação ilustrada da porta verde, entre as duas colunas da varanda' },
  { src: '16-hero-interior.webp', name: 'Dentro da loja', alt: 'Quarta aproximação ilustrada, dentro da Verde, com araras, cadeiras, plantas e o balcão ao fundo' },
];

const smooth = (start, end, value) => { const t = Math.max(0, Math.min(1, (value - start) / (end - start))); return t * t * (3 - 2 * t); };
const stops = [0, .30, .56, .82];

export function ArrivalJourney({ linear, progress, sectionRef }) {
  const first = smooth(.13, .26, progress);
  const second = smooth(.38, .51, progress);
  const third = smooth(.63, .76, progress);
  const opacities = [1 - first, first * (1 - second), second * (1 - third), third];

  return <section className={`arrival arrival-four ${linear ? 'arrival-static' : ''}`} id="casa" ref={sectionRef} aria-label="Entre na casa da Verde">
    {!linear ? <div className="arrival-stage">
      {arrivalViews.map((view, i) => <figure key={view.src} className={`arrival-illustration arrival-plane-${i + 1}`} aria-hidden={opacities[i] < .01} style={{ opacity: opacities[i], transform: `scale(${1 + smooth(Math.max(0, stops[i] - .12), Math.min(1, stops[i] + .18), progress) * .055})` }}>
        <img src={'/assets/' + view.src} alt={view.alt} decoding="async" loading="eager" fetchPriority={i === 0 ? 'high' : 'auto'} />
      </figure>)}
      <div className="opening-copy" style={{ opacity: 1 - smooth(.01, .11, progress) }}><h1>Uma loja.<br />Muitas Histórias</h1><p>Moda, cultura e encontros.<br />Desde 1973, acompanhando histórias.</p></div>
      <div className="arrival-dissolve" style={{ opacity: smooth(.90, 1, progress) }} aria-hidden="true" />
    </div> : <div className="static-opening"><p className="eyebrow">Verde — Desde 1973</p><h1>Uma loja.<br />Muitas Histórias</h1><p>Moda, cultura e encontros.</p><div className="arrival-static-views">{arrivalViews.map(view => <img key={view.src} src={'/assets/' + view.src} alt={view.alt} loading="lazy" decoding="async" />)}</div></div>}
  </section>;
}
