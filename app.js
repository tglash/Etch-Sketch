
$(document).ready(function(){
	$('.reset').click(function(){  											//Create a reset button
		$('.block').removeClass('color');									//Remove the color from blocks
		var squares = prompt('how many squares per side would you like?');	//Ask user how many squares they want		
		var squareWidth = (960/squares);										//Determine the width of each square based on user prompt
		
		for (var i = 0; i < 10 ; i++) {
			var $block = $("<div class='block'></div>");
			$($block).css('width' , 'squareWidth * squareWidth')
			$('.container').append($block);
		};
	});

	$('.block').hover(function(){
		$(this).addClass('color')
	});

});

