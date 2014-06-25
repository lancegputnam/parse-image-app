"use strict";

Parse.initialize("wbnxBmyVZJGalQ3RY1jZ9le08eo2rm3qze8Luyvv", "qICIy4EMU4sV6aiWQ1z559RrZNTmzfPbwNHp6QVB");


$('.uploadImage').click(function() {
	var imgVal = $('.URL-input').val();
	var captionVal = $('.caption-input').val();

	// myPost.set('objectURL', $('.URLinput').val());
	// myPost.set('Caption', $('.captioninput').val());

	// added last becauase myPost is calling the model, not the collection 
	var myPost = posts.add({objectURL: imgVal, Caption: captionVal}).last();

	console.log('myPost should be ', myPost);
	console.log('the image URL should be: ', imgVal);
	console.log('the caption should be: ', captionVal);

	myPost.save();

	// myPost.save(null, {
 //  		success: function(myPost) {
 //    // Execute any logic that should take place after the object is saved.
 //    	alert('Image Added');
 // 		},
 //  		error: function(myPost) {
 //    // Execute any logic that should take place if the save fails.
 //    // error is a Parse.Error with an error code and description.
 //    	alert('Failed to add new image');
 //  		}
	// });


	$('.URL-input').val('');
	$('.caption-input').val('');

});

posts.fetch({add: true});

posts.on('add', function(model){
	new ImageView({model: model});
});