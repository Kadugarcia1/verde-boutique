import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { arrivalPortalState, portalScene, portalSmooth } from './arrival-portal.js';
import { loadPortalArtwork, paintPortalFrame } from './arrival-renderer.js';

export const arrivalViews = [portalScene.facade, portalScene.interior];

function StillArtwork({ artwork, view }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const canvas = ref.current;
    if (!canvas || !artwork) return;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(artwork, 0, 0, canvas.width, canvas.height);
  }, [artwork]);
  return <canvas ref={ref} width={view.width} height={view.height} role="img" aria-label={view.alt}>{view.alt}</canvas>;
}

export function ArrivalJourney({ linear, progress, sectionRef }) {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const [artwork, setArtwork] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [viewport, setViewport] = useState(() => ({ width: window.innerWidth, height: window.innerHeight }));
  useEffect(() => {
    let cancelled = false;
    loadPortalArtwork(arrivalViews).then(images => { if (!cancelled) setArtwork(images); }).catch(() => { if (!cancelled) setLoadError(true); });
    return () => { cancelled = true; };
  }, []);
  useLayoutEffect(() => {
    const element = stageRef.current;
    if (linear || !element) return;
    const update = () => {
      const { width, height } = element.getBoundingClientRect();
      setViewport(previous => previous.width === width && previous.height === height ? previous : { width, height });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [linear]);
  const camera = useMemo(() => arrivalPortalState(progress, viewport), [progress, viewport]);
  const copyOpacity = 1 - portalSmooth(.015, .075, progress);
  useLayoutEffect(() => {
    if (!linear && canvasRef.current) paintPortalFrame(canvasRef.current, camera, viewport, artwork);
  }, [linear, camera, viewport, artwork]);

  return <section className={`arrival arrival-portal ${linear ? 'arrival-static' : ''}`} id="casa" ref={sectionRef} aria-label="Entre na casa da Verde">
    {!linear ? <div className="arrival-stage" ref={stageRef} data-renderer="canvas-2d" data-artwork-ready={Boolean(artwork)} data-front-scale={camera.frontScale} data-back-scale={camera.rearScale} data-axis-x={camera.axis.x} data-axis-y={camera.axis.y}>
      <canvas key="paper-ink-software" ref={canvasRef} className="arrival-scene-canvas" role="img" aria-label="Aproximação ilustrada da casa inteira até o interior real da Verde, em verde sobre cru, sem pessoas ou animais" />
      {loadError && <p className="arrival-artwork-error" role="status">Não foi possível carregar as ilustrações. Atualize a página para tentar novamente.</p>}
      <div className="arrival-copy-veil" style={{ opacity: copyOpacity }} aria-hidden="true" />
      <div className="opening-copy" style={{ opacity: copyOpacity }}><h1>Uma loja.<br />Muitas Histórias</h1><p>Moda, cultura e encontros.<br />Desde 1973, acompanhando histórias.</p></div>
      <div className="arrival-dissolve" style={{ opacity: portalSmooth(.95, 1, progress) }} aria-hidden="true" />
    </div> : <div className="static-opening"><p className="eyebrow">Verde — Desde 1973</p><h1>Uma loja.<br />Muitas Histórias</h1><p>Moda, cultura e encontros.</p><div className="arrival-static-views">{arrivalViews.map((view, index) => <StillArtwork key={view.src} artwork={artwork?.[index]} view={view} />)}</div></div>}
  </section>;
}
