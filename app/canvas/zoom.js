import { fabric } from 'fabric';

import $ from 'jquery';

import canvas from '.';

export default function zoom() {
  canvas.on('mouse:wheel', (opt) => {
    console.log('a');
    const { e } = opt;
    if (e.altKey) canvas.viewportTransform[4] += e.deltaY / 10;
    else if (e.ctrlKey) {
      const newZoom = canvas.getZoom() - e.deltaY / 2400;
      if (newZoom < 0.1) {
        e.preventDefault();
        canvas.requestRenderAll();
        return;
      }
      canvas.zoomToPoint({ x: e.offsetX, y: e.offsetY }, newZoom);
    } else if (!e.shiftKey) canvas.viewportTransform[5] -= e.deltaY / 10;
    e.preventDefault();
    canvas.requestRenderAll();
  });
}
