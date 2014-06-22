"use strict";

var canvas = new fabric.Canvas('canvas');
// var canvas = new fabric.Canvas('designer');
// var path = new fabric.Path('designer');
// canvas.add(path);
  var h = 200;
  var w = 200;
  var body = new fabric.Rect({ 
  width: w, 
  height: h, 
  fill: 'rgba(249, 248, 246, 0.60)', 
  top: 15, 
  left: 50,
  scale: .2
});
        
var component = new fabric.Group([body], {
    hasControls: false, 
    hasBorders: true 
});        
component.top = 50;
component.left = 50;      
canvas.add(component);

fabric.Image.fromURL('http://1.bp.blogspot.com/-4cni1FuJmBw/UyB5gK6AwsI/AAAAAAAACKM/dOIeZK1UCy8/s1600/polaroid_frame_by_bstrgncragus-d316jel.png', function(img) {
    // var oImg = img.set({ left: 50, top: 50 }).scale(0.9);
    // canvas.add(oImg).renderAll();
    // canvas.setActiveObject(oImg);
    img.scale(.3),
    img.top = 50,
    img.left = 25,
    canvas.add(img);
    img.bringToFront();
  });

fabric.Image.fromURL('http://farm9.staticflickr.com/8195/8099161389_a2b080160f_o.png', function(img) {
    // var oImg = img.set({ left: 50, top: 50 }).scale(0.9);
    // canvas.add(oImg).renderAll();
    // canvas.setActiveObject(oImg);
    img.scale(.23),
    img.top = 160,
    img.left = 100,
    canvas.add(img);
    img.bringToFront();
  });

// fabric.Image.fromURL('http://1.bp.blogspot.com/-4cni1FuJmBw/UyB5gK6AwsI/AAAAAAAACKM/dOIeZK1UCy8/s1600/polaroid_frame_by_bstrgncragus-d316jel.png', function(img) {
//       img.filters.push(new fabric.Image.filters.Sepia());
//       img.applyFilters(canvas.renderAll.bind(canvas));
//       // img.top = 400;
//       canvas.add(img);
// });
 



