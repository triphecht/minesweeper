// ### Main Section ###
$(document).ready(function() {

	var game = new GameBoard();

	// Open Options menu
	var optionsHeight = $('.options').height();
	$('.options').hide().css('height', '0').show().fadeIn(500);
	$('.options').animate({'height': optionsHeight}, 500);

	// When user clicks OK button on the options menu
	$('#submitOptions').click(function() {

		// Close Options menu
		$('.options').animate({'height': '0'}, 500).fadeOut(500);

		// Initialize game using form options
		var width		= $('#optionsBoardWidth').val();
		var height		= $('#optionsBoardHeight').val();
		var mines		= $('#optionsBoardMines').val();
		
		game.setWidth(width);
		game.setHeight(height);
		game.setMines(mines);

	});
});

