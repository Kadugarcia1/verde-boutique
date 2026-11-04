// Two fixed images. Scroll changes only their scale around one fixed screen point.
export const portalScene = {
  facade: {
    src: 'arrival-portal-wide.webp', width: 1672, height: 941,
    alt: 'Casa inteira da Verde ilustrada em verde sobre cru, com portão e porta abertos, jardim, mosaico floral e letreiro Verde 1973',
  },
  interior: {
    src: 'arrival-portal-real-interior.webp', width: 1672, height: 941,
    alt: 'Interior ilustrado da Verde, com araras, móveis e plantas, sem pessoas ou animais',
  },
  aperture: { left: 779 / 1672, top: 544 / 941, right: 857 / 1672, bottom: 716 / 941 },
  axis: { x: .5, y: .66 },
  interiorFocus: { x: .5, y: .66 },
};

const clamp = value => Math.max(0, Math.min(1, value));
export const portalSmooth = (start, end, value) => {
  const t = clamp((value - start) / (end - start));
  return t * t * (3 - 2 * t);
};

export function arrivalPortalState(progress, viewport, scene = portalScene) {
  const width = Math.max(1, viewport.width);
  const height = Math.max(1, viewport.height);
  const a = scene.aperture;
  const focus = { x: (a.left + a.right) / 2, y: a.top + (a.bottom - a.top) * .35 };
  const axis = { x: scene.axis.x * width, y: scene.axis.y * height };
  const imageWidth = Math.min(width * (width <= 700 ? 1.04 : .86), height * scene.facade.width / scene.facade.height * 1.04);
  const imageHeight = imageWidth * scene.facade.height / scene.facade.width;
  const origin = { x: focus.x * imageWidth, y: focus.y * imageHeight };
  const base = { left: axis.x - origin.x, top: axis.y - origin.y, width: imageWidth, height: imageHeight };
  const distances = {
    left: (focus.x - a.left) * imageWidth,
    right: (a.right - focus.x) * imageWidth,
    top: (focus.y - a.top) * imageHeight,
    bottom: (a.bottom - focus.y) * imageHeight,
  };
  const zoomToClearDoor = Math.max(axis.x / distances.left, (width - axis.x) / distances.right, axis.y / distances.top, (height - axis.y) / distances.bottom) * 1.08;
  const amount = portalSmooth(.08, .86, progress);
  const frontScale = Math.exp(Math.log(zoomToClearDoor) * amount);
  const projectedAperture = {
    left: axis.x - distances.left * frontScale,
    top: axis.y - distances.top * frontScale,
    right: axis.x + distances.right * frontScale,
    bottom: axis.y + distances.bottom * frontScale,
  };
  const clear = projectedAperture.left <= 0 && projectedAperture.top <= 0 && projectedAperture.right >= width && projectedAperture.bottom >= height;
  const visible = {
    left: Math.max(0, projectedAperture.left), top: Math.max(0, projectedAperture.top),
    right: Math.min(width, projectedAperture.right), bottom: Math.min(height, projectedAperture.bottom),
  };
  const rearAspect = scene.interior.width / scene.interior.height;
  const rearFocus = scene.interiorFocus;
  // Fill only the visible opening, rather than starting with a giant room behind a tiny door.
  // Both source images retain one projection; no frames, rotations or moving focal points.
  const rearWidth = Math.max(
    (axis.x - visible.left) / rearFocus.x,
    (visible.right - axis.x) / (1 - rearFocus.x),
    (axis.y - visible.top) / rearFocus.y * rearAspect,
    (visible.bottom - axis.y) / (1 - rearFocus.y) * rearAspect,
  ) * 1.015;
  const rearHeight = rearWidth / rearAspect;
  const initialRearWidth = Math.max(
    distances.left / rearFocus.x, distances.right / (1 - rearFocus.x),
    distances.top / rearFocus.y * rearAspect, distances.bottom / (1 - rearFocus.y) * rearAspect,
  ) * 1.015;
  const rearScale = rearWidth / initialRearWidth;
  const initialRearHeight = initialRearWidth / rearAspect;
  return {
    axis, focus, base, frontScale, rearScale, projectedAperture, visible, clear,
    rearBounds: { left: axis.x - rearFocus.x * rearWidth, top: axis.y - rearFocus.y * rearHeight, right: axis.x + (1 - rearFocus.x) * rearWidth, bottom: axis.y + (1 - rearFocus.y) * rearHeight },
    frontBounds: {
      left: axis.x + (base.left - axis.x) * frontScale,
      top: axis.y + (base.top - axis.y) * frontScale,
      right: axis.x + (base.left + base.width - axis.x) * frontScale,
      bottom: axis.y + (base.top + base.height - axis.y) * frontScale,
    },
    foregroundStyle: {
      ...base, transformOrigin: `${focus.x * 100}% ${focus.y * 100}%`,
      transform: `scale(${frontScale})`,
    },
    rearStyle: {
      left: axis.x - rearFocus.x * initialRearWidth,
      top: axis.y - rearFocus.y * initialRearHeight,
      width: initialRearWidth, height: initialRearHeight,
      transformOrigin: `${rearFocus.x * 100}% ${rearFocus.y * 100}%`,
      transform: `scale(${rearScale})`,
    },
  };
}
