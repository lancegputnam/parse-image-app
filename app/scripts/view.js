var ImageView = Parse.View.extend({

  classname: 'photoPost',

  imageTemplate: _.template($('.image-template').text()),

  events: {

    // "click .uploadPhoto": "displayImage"
  },

  initialize: function(){
    //this.model.on('change');
    $('.container').append(this.el);
    this.render();
  }, 

  render: function(){
    console.log('this.model',this.model)
    var renderedTemplate = this.imageTemplate(this.model.attributes);
    this.$el.html(renderedTemplate);
    return this;

  },

  // displayImage: function(){
  //   console.log(this.model)
  //     ImageCollection.add(this.model)
  //     $('.container').append(detail);

  //     var renderTemp = this.imageTemplate(this.model.attributes)
  //     this.$el.html(renderTemp);
    
  //     // var post = new Parse.Object('Post');
  //     // var url = $('.uploadPhoto').val();
  //     // post.set('url', url);

  //     post.save().done(function(){
  //       var detail = new DetailView({model: this.model});
  //       // $('.container').append(detail);

  //     })
    
  // }
  //   var that = this;

  //   this.model.set({
  //     url:      this.$el.find('.inputURL').val(),
  //     caption:  this.$el.find('.inputCaption').val()
  //   });

  //   showPhotos.add(this.model)

  //   this.model.save().done(function(){
  //     that.$el.find('.status').html('Saved!');
  //   });
  // }

});

