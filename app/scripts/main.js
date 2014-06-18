"use strict";

Parse.initialize("wbnxBmyVZJGalQ3RY1jZ9le08eo2rm3qze8Luyvv", "qICIy4EMU4sV6aiWQ1z559RrZNTmzfPbwNHp6QVB");

var Post = Parse.Object.extend({
	className: "Photogram"
});

var Comment = Parse.Object.extend({
	className: "Photogram"
});

// Create the post
var myPost = new Post();
$('.uploadPhoto').click(function() {
	myPost.set('url', $('.inputURL').val());
	myPost.save();
})
 
// Create the comment
var myComment = new Comment();
$('.uploadPhoto').click(function(){
	myComment.set('url', $('.inputCaption').val());
	myComment.set("parent", myPost);
	myComment.save();
})













// we do a pretty normal model constructor 
// var Animal = Parse.Object.extend ({
// 	className: "Animal"
// });

// //we make an instance here
// var fido = new Animal; 

// // fido.save({
// // 	name: "Fido"
// // }).done(function(){
// // 	console.log('it worked');
// // }).fail(function(){
// // 	console.log('failed...')
// // })

// //Animal is our reference to the constructor 
// animalQuery = new Parse.Query(Animal);

// //it knows the constructor to use because with provided that 
// animalQuery.get("Ub81QgBqtT", {
// 	success: function(animal) {
// 		console.log('animal is', animal)
//     // The object was retrieved successfully.
//   },
//   	error: function(object, error) {
//     // The object was not retrieved successfully.
//     // error is a Parse.Error with an error code and description.
//   }
// })

// PFImageView *creature = [[PFImageView alloc] init];
// creature.image = [UIImage imageNamed:@"1.jpg"]; // placeholder image
// creature.file = (PFFile *)file;
// [creature loadInBackground];