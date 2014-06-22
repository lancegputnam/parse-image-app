"use strict";

// var canvas = new fabric.Canvas('canvas');

//moustache
// fabric.Image.fromURL('http://www.fantasyfestival.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/moustache-m-10-brown-grey-9999904418.png', function(img) {
//   img.scale(.3),
//   img.left = 30,
//   canvas.add(img);
//   img.bringToFront();
// });


var canvas = new fabric.Canvas('designer');
// var path = new fabric.Path('designer');
// canvas.add(path);
var h = 200;
var w = 200;
var body = new fabric.Rect({ 
  width: w, 
  height: h, 
  fill: 'rgba(17, 117, 192, 0.75)', 
  top: 15, 
  left: 50,
  scale: .2
});
        
var component = new fabric.Group([body], {
    hasControls: false, 
    hasBorders: true 
});        
component.top = 100;
component.left = 250;      
canvas.add(component);

 fabric.Image.fromURL('http://1.bp.blogspot.com/-4cni1FuJmBw/UyB5gK6AwsI/AAAAAAAACKM/dOIeZK1UCy8/s1600/polaroid_frame_by_bstrgncragus-d316jel.png', function(img) {
    var oImg = img.set({ left: 50, top: 100, angle: -15 }).scale(0.9);
    canvas.add(oImg).renderAll();
    canvas.setActiveObject(oImg);
  });



