"use strict";

Parse.initialize("wbnxBmyVZJGalQ3RY1jZ9le08eo2rm3qze8Luyvv", "qICIy4EMU4sV6aiWQ1z559RrZNTmzfPbwNHp6QVB");


$('.uploadImage').click(function() {
	var imgVal = $('.URL-input').val();
	var captionVal = $('.caption-input').val();

	// myPost.set('objectURL', $('.URLinput').val());
	// myPost.set('Caption', $('.captioninput').val());

	var myPost = posts.add({objectURL: imgVal, Caption: captionVal});

	// myPost.save();

// 	myPost.save(null, {
//   		success: function(myPost) {
//     // Execute any logic that should take place after the object is saved.
//     	alert('Image Added');
//  	},
//   		error: function(myPost) {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and description.
//     	alert('Failed to add new image');
//   	}
// });

$('.uploadImage').click(function(){
 
	var fileUploadControl = $(".URL-input")[0];
	if (fileUploadControl.files.length > 0) {
	  var file = fileUploadControl.files[0];
	  var name = "photo.jpg";
	 
	  var parseFile = new Parse.File(name, file);
	}
 
	var uploadPromise = parseFile.save()
 
 
	uploadPromise.then(function() {
		console.log("success")
		}, function(error) {
			console.log("No")
	});
 
 
	uploadPromise.done(function(){
 
		var uploadPhoto = new Parse.Object("UploadPhoto");
		uploadPhoto.set("photo", parseFile.url() );
		uploadPhoto.set("caption", $('.caption').val() );
		uploadPhoto.set("photoRef", parseFile);
 
		app.collection.add(uploadPhoto)
 
		uploadPhoto.save()
 
	})
 
});

	$('.URL-input').val('');
	$('.caption-input').val('');

});

posts.on('add', function(model){
	new ImageView({model: model});
});

posts.fetch({add: true});




