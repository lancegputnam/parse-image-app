var Post=Parse.Object.extend({className:"Photogram",defaults:{imgURL:"http://ahouseinthehills.com/wp-content/uploads/2012/01/a_house_in_the_hills_kinfolk_magazine_lou_mora_5.jpg",caption:"no caption"}}),ImageCollection=Parse.Collection.extend({model:Post}),posts=new ImageCollection,ImageView=Parse.View.extend({classname:"photoPost",imageTemplate:_.template($(".image-template").text()),events:{"click .uploadImage":"displayImage"},initialize:function(){$(".container").append(this.el),this.render()},render:function(){console.log("this.model",this.model);var a=this.imageTemplate(this.model.attributes);return this.$el.html(a),this},displayImage:function(){console.log(this.model),ImageCollection.add(this.model),$(".container").append(detail);var a=this.imageTemplate(this.model.attributes);this.$el.html(a)}}),canvas=new fabric.Canvas("canvas"),h=200,w=200,body=new fabric.Rect({width:w,height:h,fill:"rgba(249, 248, 246, 0.60)",top:15,left:50,scale:.2}),component=new fabric.Group([body],{hasControls:!1,hasBorders:!0});component.top=50,component.left=50,canvas.add(component),fabric.Image.fromURL("http://1.bp.blogspot.com/-4cni1FuJmBw/UyB5gK6AwsI/AAAAAAAACKM/dOIeZK1UCy8/s1600/polaroid_frame_by_bstrgncragus-d316jel.png",function(a){a.scale(.3),a.top=50,a.left=25,canvas.add(a),a.bringToFront()}),fabric.Image.fromURL("http://farm9.staticflickr.com/8195/8099161389_a2b080160f_o.png",function(a){a.scale(.23),a.top=160,a.left=100,canvas.add(a),a.bringToFront()}),Parse.initialize("wbnxBmyVZJGalQ3RY1jZ9le08eo2rm3qze8Luyvv","qICIy4EMU4sV6aiWQ1z559RrZNTmzfPbwNHp6QVB"),$(".uploadImage").click(function(){var a=$(".URL-input").val(),b=$(".caption-input").val(),c=posts.add({objectURL:a,Caption:b}).last();console.log("myPost should be ",c),console.log("the image URL should be: ",a),console.log("the caption should be: ",b),c.save(),$(".URL-input").val(""),$(".caption-input").val("")}),posts.on("add",function(a){new ImageView({model:a})}),posts.fetch({add:!0});