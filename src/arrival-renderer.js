const artworkCache = new Map();
const INK = [3, 54, 37];
const PAPER = '#E2DEC5';
const clamp = value => Math.max(0, Math.min(1, value));
const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };

// Render the artwork as ink over the page, rather than as an opaque paper rectangle.
export function portalInkAlpha(red, green, blue, alpha = 255) {
  const luminance = (.2126 * red + .7152 * green + .0722 * blue) / 255;
  const coverage = clamp((.88 - luminance) / .68);
  return Math.round(alpha * coverage * smooth((coverage - .055) / .105));
}

async function prepareArtwork(view, index) {
  const image = new Image();
  image.decoding = 'async';
  image.fetchPriority = index === 0 ? 'high' : 'auto';
  image.src = '/assets/' + view.src;
  await image.decode();
  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  context.drawImage(image, 0, 0);
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = pixels.data;
  const feather = index === 0 ? .018 : .012;
  for (let y = 0; y < canvas.height; y++) {
    const vertical = smooth(Math.min(y + .5, canvas.height - y - .5) / (canvas.height * feather));
    for (let x = 0; x < canvas.width; x++) {
      const p = (y * canvas.width + x) * 4;
      const horizontal = smooth(Math.min(x + .5, canvas.width - x - .5) / (canvas.width * feather));
      data[p + 3] = Math.round(portalInkAlpha(data[p], data[p + 1], data[p + 2], data[p + 3]) * horizontal * vertical);
      data[p] = INK[0]; data[p + 1] = INK[1]; data[p + 2] = INK[2];
    }
  }
  context.putImageData(pixels, 0, 0);
  return canvas;
}

export function loadPortalArtwork(views) {
  return Promise.all(views.map((view, index) => {
    if (!artworkCache.has(view.src)) {
      const promise = prepareArtwork(view, index).catch(error => { artworkCache.delete(view.src); throw error; });
      artworkCache.set(view.src, promise);
    }
    return artworkCache.get(view.src);
  }));
}

function drawVisible(context, image, bounds, viewport) {
  const left = Math.max(0, bounds.left);
  const top = Math.max(0, bounds.top);
  const right = Math.min(viewport.width, bounds.right);
  const bottom = Math.min(viewport.height, bounds.bottom);
  if (right <= left || bottom <= top) return;
  const scaleX = image.width / (bounds.right - bounds.left);
  const scaleY = image.height / (bounds.bottom - bounds.top);
  context.drawImage(image,
    (left - bounds.left) * scaleX, (top - bounds.top) * scaleY,
    (right - left) * scaleX, (bottom - top) * scaleY,
    left, top, right - left, bottom - top);
}

export function paintPortalFrame(canvas, camera, viewport, artwork) {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.round(viewport.width * ratio));
  const height = Math.max(1, Math.round(viewport.height * ratio));
  if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
  const context = canvas.getContext('2d', { alpha: false, willReadFrequently: true });
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.globalAlpha = 1;
  context.globalCompositeOperation = 'source-over';
  context.clearRect(0, 0, viewport.width, viewport.height);
  context.fillStyle = PAPER;
  context.fillRect(0, 0, viewport.width, viewport.height);
  if (!artwork) return;
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = 'high';
  const a = camera.projectedAperture;

  context.save();
  context.beginPath();
  context.rect(a.left, a.top, a.right - a.left, a.bottom - a.top);
  context.clip();
  drawVisible(context, artwork[1], camera.rearBounds, viewport);
  context.restore();

  if (!camera.clear) {
    context.save();
    context.beginPath();
    context.rect(0, 0, viewport.width, viewport.height);
    context.rect(a.left, a.top, a.right - a.left, a.bottom - a.top);
    context.clip('evenodd');
    drawVisible(context, artwork[0], camera.frontBounds, viewport);
    context.restore();
  }
}
