
$(document).ready(function(){
	var $container = $("<div class='container'></div>")
	$container.appendTo('body');

	$('.container').ready(function(){
		var rows = prompt("how many rows do you want?");
		// var units = prompt("how many units do you want in each row?")
		for(var i = 0 ; i < rows ; i++){  //i needs to eventually equal the user's desired number of rows input.
		for (var x = 0; x < 4; x++) {  //x needs to eventually equal the user's desired number of colums/100% for width of each unit.
			var $newdiv = $("<div class='div'></div>")
			$newdiv.appendTo('.container');
			$('.div').css('width' , 'units/100%')
		};
	}
	console.log(rows);
	console.log(units)

	});
})


// $(document).ready(function() {
//     for(var x = 0; x < 16; x++) {
//         for(var y = 0; y < 16; y++) {
//             var unit = $("<div class='unit'></div>");
//             unit.appendTo('#container');
//         }
//     }
// });
