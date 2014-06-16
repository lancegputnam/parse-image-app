Parse.initialize("wbnxBmyVZJGalQ3RY1jZ9le08eo2rm3qze8Luyvv", "qICIy4EMU4sV6aiWQ1z559RrZNTmzfPbwNHp6QVB");
// we do a pretty normal model constructor 
var Animal = Parse.Object.extend ({
	className: "Animal"
});

//we make an instance here
var fido = new Animal; 

// fido.save({
// 	name: "Fido"
// }).done(function(){
// 	console.log('it worked');
// }).fail(function(){
// 	console.log('failed...')
// })

//Animal is our reference to the constructor 
animalQuery = new Parse.Query(Animal);

//it knows the constructor to use because with provided that 
animalQuery.get("Ub81QgBqtT", {
	success: function(animal) {
		console.log('animal is', animal)
    // The object was retrieved successfully.
  },
  	error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and description.
  }
})

// 	, {
// 	success: function(){
// 		console.log('it worked')
// 	}, 
// 	error: function() {
// 		console.log('Oops!')
// 	}
// })