"use strict";

var ImageView = Parse.View.extend({

  classname: 'photoPost',

  imageTemplate: _.template($('.image-template').text()),

  events: {

    "click .uploadImage": "displayImage"
  },

  initialize: function(){
    //this.model.on('change');
    $('.container').append(this.el);
    this.render();
  }, 

  render: function(){
    console.log('this.model',this.model);
    var renderedTemplate = this.imageTemplate(this.model.attributes);
    this.$el.html(renderedTemplate);
    return this;

  },

  displayImage: function(){
    console.log(this.model);
      ImageCollection.add(this.model);
      $('.container').append(detail);

      var renderTemp = this.imageTemplate(this.model.attributes);
      this.$el.html(renderTemp);

      // this.model.save().done(function(){
      // that.$el.find('.status').html('Saved!');
      // });
    }
});

$(window).resize(function(){
  if ($(window).width() <= 600){  
    $('.header img').hide()
  };
    if ($(window).width() >= 600){  
    $('.header img').show()
  } 
});
