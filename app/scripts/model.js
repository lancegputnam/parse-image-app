var Post = Parse.Object.extend({

	className: "Photogram",

	defaults: {
		imgURL : 'http://ahouseinthehills.com/wp-content/uploads/2012/01/a_house_in_the_hills_kinfolk_magazine_lou_mora_5.jpg',
		caption: 'no caption'
	}
});

// var Comment = Parse.Object.extend({
// 	className: "Photogram"
// });

// Create the post
// var myPost = new Post();


 
// Create the comment
// var myComment = new Comment();
// $('.uploadPhoto').click(function(){
// 	myComment.set('url', $('.inputCaption').val());
// 	myComment.set("parent", myPost);
// 	myComment.save();
// })