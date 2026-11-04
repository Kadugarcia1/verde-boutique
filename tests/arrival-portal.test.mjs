import assert from 'node:assert/strict';
import test from 'node:test';
import { access } from 'node:fs/promises';
import { arrivalPortalState, portalScene } from '../src/arrival-portal.js';
import { portalInkAlpha } from '../src/arrival-renderer.js';

test('both images scale around one screen point without changing the axis', () => {
  for (const [width, height] of [[1860, 842], [1280, 800], [390, 844]]) {
    for (let step = 0; step <= 100; step++) {
      const state = arrivalPortalState(step / 100, { width, height });
      const frontAnchor = { x: state.frontBounds.left + (state.frontBounds.right - state.frontBounds.left) * state.focus.x, y: state.frontBounds.top + (state.frontBounds.bottom - state.frontBounds.top) * state.focus.y };
      const backAnchor = { x: state.rearBounds.left + (state.rearBounds.right - state.rearBounds.left) * portalScene.interiorFocus.x, y: state.rearBounds.top + (state.rearBounds.bottom - state.rearBounds.top) * portalScene.interiorFocus.y };
      assert(Math.abs(frontAnchor.x - width * .5) < 1e-6);
      assert(Math.abs(frontAnchor.y - height * .66) < 1e-6);
      assert(Math.abs(frontAnchor.x - backAnchor.x) < 1e-6);
      assert(Math.abs(frontAnchor.y - backAnchor.y) < 1e-6);
      assert.match(state.foregroundStyle.transform, /^scale\([\d.e+-]+\)$/);
      assert.match(state.rearStyle.transform, /^scale\([\d.e+-]+\)$/);
    }
  }
});

test('the opening always reveals an image and clears the facade within four screen heights', () => {
  for (const [width, height] of [[1860, 842], [1280, 800], [390, 844]]) {
    let previousFront = 0;
    let previousBack = 0;
    for (let step = 0; step <= 100; step++) {
      const state = arrivalPortalState(step / 100, { width, height });
      assert(state.frontScale >= previousFront - 1e-6);
      assert(state.rearScale >= previousBack - 1e-6);
      assert(state.rearBounds.left <= state.visible.left + .01);
      assert(state.rearBounds.top <= state.visible.top + .01);
      assert(state.rearBounds.right >= state.visible.right - .01);
      assert(state.rearBounds.bottom >= state.visible.bottom - .01);
      previousFront = state.frontScale;
      previousBack = state.rearScale;
    }
    const arrival = arrivalPortalState(.86, { width, height });
    assert(arrival.clear);
    assert.equal(arrival.foregroundStyle.visibility, undefined);
  }
});

test('paper becomes transparent while green ink remains visible', () => {
  assert.equal(portalInkAlpha(226, 222, 197), 0);
  assert.equal(portalInkAlpha(236, 225, 193), 0);
  assert.equal(portalInkAlpha(3, 54, 37), 255);
  assert.equal(portalInkAlpha(3, 54, 37, 0), 0);
  const hatch = portalInkAlpha(90, 120, 90);
  assert(hatch > 0 && hatch < 255);
});

test('the two active images exist in the project', async () => {
  for (const view of [portalScene.facade, portalScene.interior]) {
    await access(new URL('../public/assets/' + view.src, import.meta.url));
  }
});
