"use strict";

Parse.initialize("wbnxBmyVZJGalQ3RY1jZ9le08eo2rm3qze8Luyvv", "qICIy4EMU4sV6aiWQ1z559RrZNTmzfPbwNHp6QVB");


$('.uploadPhoto').click(function() {
	var imgVal = $('.URLinput').val();
	var captionVal = $('.captioninput').val();

	// myPost.set('objectURL', $('.URLinput').val());
	// myPost.set('Caption', $('.captioninput').val());

	var myPost = posts.add({objectURL: imgVal, Caption: captionVal});

	// myPost.save();

	myPost.save(null, {
  		success: function(myPost) {
    // Execute any logic that should take place after the object is saved.
    	alert('Image Added');
 	},
  		error: function(myPost) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and description.
    	alert('Failed to add new image');
  	}
});

	$('.URLinput').val('');
	$('.captioninput').val('');

});

posts.on('add', function(model){
	new ImageView({model: model});
});

posts.fetch({add: true});




