/* eslint-disable no-loop-func */
import { fabric } from 'fabric';
import $ from 'jquery';
import zoom from './zoom';

const canvas = new fabric.Canvas('canvas');
canvas.set({ backgroundColor: 'khaki' });
canvas.requestRenderAll();
const canvasContainer = document.getElementById('canvas-wrapper');
$(document).ready(() => {
  //Setting the size of canvas
  canvas.setHeight(canvasContainer.clientHeight);
  canvas.setWidth(canvasContainer.clientWidth);
});
$(window).resize(() => {
  canvas.setHeight(canvasContainer.clientHeight);
  canvas.setWidth(canvasContainer.clientWidth);
});
canvas.selection = false;
let photo1;
let photoIndex = 0;

canvas.setZoom(0.44);
$(document).on('keydown', (e) => {
  if (e.keyCode === 37 || e.keyCode === 39) {
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
    //
    img.scaleToHeight(canvasContainer.clientHeight);
    canvas.requestRenderAll();
    photo1 = img;
    for (let i = 1; i <= 100; i++) {
      setTimeout(() => {
        photo1.set({ opacity: i / 100 });
        canvas.requestRenderAll();
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
