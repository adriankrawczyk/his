/* eslint-disable no-loop-func */
import { fabric } from 'fabric';
import $ from 'jquery';
import zoom from './zoom';

const canvas = new fabric.Canvas('canvas');
canvas.set({ backgroundColor: 'khaki' });
canvas.requestRenderAll();
const canvasContainer = document.getElementById('canvas-wrapper');
let prevHeight;
$(document).ready(() => {
  //Setting the size of canvas
  canvas.setHeight(canvasContainer.clientHeight);
  canvas.setWidth(canvasContainer.clientWidth);
  prevHeight = document.getElementById('top-panel').clientHeight;
});
$(window).resize(() => {
  canvas.setHeight(canvasContainer.clientHeight);
  canvas.setWidth(canvasContainer.clientWidth);
  prevHeight = document.getElementById('top-panel').clientHeight;
});
canvas.selection = false;
let photo1;
let photoIndex = 0;
fabric.Object.prototype.objectCaching = false;
canvas.setZoom(0.44);
let bool = true;
$(document).on('keydown', (e) => {
  if (e.keyCode === 122) {
    canvas.setHeight(window.innerHeight);
    canvas.setWidth(window.innerWidth);
    if (photo1) {
      photo1.scaleToHeight(canvasContainer.clientHeight);
      const centerCoords = centerCoord();
      photo1.set({ top: centerCoords.y, left: centerCoords.x });
    }
  }
  if (e.keyCode === 70) {
    if (document.getElementById('mid-panel').classList.contains('hidden')) {
      document.getElementById('mid-panel').classList.remove('hidden');
      document.getElementById('top-panel').classList.remove('hidden');
      canvas.setHeight(canvasContainer.clientHeight - prevHeight * 1.5);
    } else {
      document.getElementById('mid-panel').classList.add('hidden');
      document.getElementById('top-panel').classList.add('hidden');
      canvas.setHeight(canvasContainer.clientHeight);
    }

    canvas.setWidth(canvasContainer.clientWidth);
    if (photo1) {
      photo1.scaleToHeight(canvasContainer.clientHeight);
      const centerCoords = centerCoord();
      photo1.set({ top: centerCoords.y, left: centerCoords.x });
    }
  }
  if (e.keyCode === 37 || e.keyCode === 39) {
    if (!bool) return;
    bool = false;
    for (let i = 1; i <= 100; i++) {
      setTimeout(() => {
        photo1.set({ opacity: (100 - i) / 100 });
        canvas.requestRenderAll();
        if (i === 100) {
          photoIndex += e.keyCode === 37 ? -1 : 1;
          if (photoIndex > canvas.photos.length - 1 || photoIndex < 0) photoIndex = 0;
          addPhoto(canvas.photos[photoIndex]);
        }
      }, i * 5);
    }
  }
});
export function fade(obj) {
  if (photo1) {
    for (let i = 1; i <= 100; i++) {
      setTimeout(() => {
        photo1.set({ opacity: (100 - i) / 100 });
        canvas.requestRenderAll();
        if (i === 100) {
          addPhoto(obj);
        }
      }, i * 5);
    }
  } else addPhoto(obj);
}

export function addPhoto(obj) {
  const { url, width, offsetX, offsetY } = obj;

  fabric.Image.fromURL(url, (img) => {
    canvas.add(img);
    const centerCoords = centerCoord();
    img.set({ originX: 'center', originY: 'center', hasBorders: false, hasControls: false, top: centerCoords.y + offsetY, left: offsetX + centerCoords.x, opacity: 0 });

    img.scaleToHeight(canvasContainer.clientHeight);
    canvas.requestRenderAll();
    photo1 = img;
    for (let i = 1; i <= 100; i++) {
      setTimeout(() => {
        photo1.set({ opacity: i / 100 });
        canvas.requestRenderAll();
        if (i === 100) bool = true;
      }, i * 5);
    }
  });
}
export function centerCoord() {
  return {
    x: fabric.util.invertTransform(canvas.viewportTransform)[4] + canvas.width / canvas.getZoom() / 2,
    y: fabric.util.invertTransform(canvas.viewportTransform)[5] + canvas.height / canvas.getZoom() / 2,
  };
}
export default canvas;
