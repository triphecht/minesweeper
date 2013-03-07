var TILE_HEIGHT						= 20;
var TILE_WIDTH						= 20;
var DEFAULT_GAMEBOARD_WIDTH			= 10;
var DEFAULT_GAMEBOARD_HEIGHT		= 10;
var DEFAULT_GAMEBOARD_MINES			= 10;
var MIN_GAMEBOARD_WIDTH				= 3;
var MIN_GAMEBOARD_HEIGHT			= 3;
var MIN_GAMEBOARD_MINES				= 1;
var MAX_GAMEBOARD_WIDTH				= 50;
var MAX_GAMEBOARD_HEIGHT			= 30;

// ### Main Section ###
$(document).ready(function() {

	var game = new GameBoard();
	var gameTurns = 0;

	// Open Options menu
	var optionsHeight = $('.options').height();
	$('.options').hide().css('height', '0').show().fadeIn(500);
	$('.options').animate({'height': optionsHeight}, 500);

	// When user clicks OK button on the options menu
	$('#submitOptions').click(function() {

		// Close Options menu
		$('.options').animate({'height': '0'}, 500).fadeOut(100);

		// Initialize game using form options
		var width		= parseInt($('#optionsBoardWidth').val(), 10);
		var height		= parseInt($('#optionsBoardHeight').val(), 10);
		var mines		= parseInt($('#optionsBoardMines').val(), 10);
		
		game.setWidth(width);
		game.setHeight(height);
		game.setMines(mines);
		
		// Game status bar
		$('.gameStats').html('Width: ' + game.getWidth() + ', Height: ' + game.getHeight() + ', Mines: ' + game.getMines());
		
		// Open game board
		var boardContainerWidth		= game.getWidth() * TILE_WIDTH;
		var boardContainerHeight	= game.getHeight() * TILE_HEIGHT;

		setTimeout(function() {
			$('.boardContainer').show();
			$('.boardContainer').animate({'width': boardContainerWidth}, 500);
			setTimeout(function() {
				$('.boardContainer').animate({'height': boardContainerHeight}, 500);
			}, 500);
			setTimeout(function() {
				$('.gameStats').fadeIn('slow');
				$('.boardContainer').animate({
					borderTopColor:		'#000000',
					borderBottomColor:	'#000000'
				}, 500);
			}, 1000);
		}, 1000);
		
		// Draw the mines
		game.initBoard('.boardContainer');
		game.populate();
		game.shuffle(1);
		game.drawBoard('.boardContainer');

		
		//
	});
});

