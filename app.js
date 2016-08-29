$(document).ready(function(){
	var units = prompt("How many squares would you like? We can do between 1 and 200!");
	//The width of a single square will be the number of the size of the container divided by units


	if (units > 0 && units <= 200) {

		var side = $('.container').width()/units;


		//Create a loop to append blocks onto container
		for (var i = 0; i < units; i++) {
			for (var x = 0; x < units; x++) {
				$('.container').append("<div class='block'></div>");
			};
			$('.container').append("<div class='new-row'></div>");
		};
		

		$('.block').css({'width' : side , 'height' : side});

		$( ".block" ).mouseenter( function() {
			    $( this ).addClass( "color" );
			  }
			);
	} else( alert("nope"));
})