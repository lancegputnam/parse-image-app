"use strict";

var canvas = new fabric.Canvas('canvas');



var filter = new fabric.Image.filters.Grayscale();
object.filters.push(filter);
object.applyFilters(canvas.renderAll.bind(canvas));