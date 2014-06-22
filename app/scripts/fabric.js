"use strict";

var canvas = new fabric.Canvas('canvas');
fabric.Image.fromURL('http://1.bp.blogspot.com/-4cni1FuJmBw/UyB5gK6AwsI/AAAAAAAACKM/dOIeZK1UCy8/s1600/polaroid_frame_by_bstrgncragus-d316jel.png', function(img) {
    // var oImg = img.set({ left: 50, top: 50 }).scale(0.9);
    // canvas.add(oImg).renderAll();
    // canvas.setActiveObject(oImg);
    img.scale(.3),
    canvas.add(img);
    img.bringToFront();
  });

// var canvas = new fabric.Canvas('designer');
// var path = new fabric.Path('designer');
// canvas.add(path);
var h = 200;
var w = 200;
var body = new fabric.Rect({ 
  width: w, 
  height: h, 
  fill: 'rgba(249, 248, 246, 0.75)', 
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


 



