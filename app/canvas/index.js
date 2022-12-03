import { fabric } from 'fabric';
import $ from 'jquery';

const canvas = new fabric.Canvas('canvas');
canvas.set({ backgroundColor: '	khaki ' });
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
export default canvas;
