
$(document).ready(function(){
	$('.reset').click(function(){  											//Create a reset button
		$('.block').removeClass('color');									//Remove the color from blocks
		var squares = prompt('how many squares per side would you like?');	//Ask user how many squares they want		
		var squareWidth = (960/squares);									//Determine the width of each square based on user prompt
		var squareHeight = squareWidth;
		var squareNum = (960/squareWidth);


		for (var x = 0; x < squareNum; x++) {
			var $block = $("<div class='block'></div>");
			$($block).css({'width' : squareWidth , 'height' : squareHeight})
			$('.container').append($block);
			
			for (var i = 0; i < squareNum ; i++) {
				var $block = $("<div class='block'></div>");
				$($block).css({'width' : squareWidth , 'height' : squareHeight})
				$('.container').append($block);
				console.log("derp")
		};	
		};
	
		$('.block').hover(function(){
			$(this).addClass('color');
			console.log(squareNum);
		});

	});

});

