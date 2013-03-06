// Default variables
var DEFAULT_GAMEBOARD_WIDTH			= 10;
var DEFAULT_GAMEBOARD_HEIGHT		= 10;
var DEFAULT_GAMEBOARD_MINES			= 10;
var MIN_GAMEBOARD_WIDTH				= 3;
var MIN_GAMEBOARD_HEIGHT			= 3;
var MIN_GAMEBOARD_MINES				= 1;
var MAX_GAMEBOARD_WIDTH				= 100;
var MAX_GAMEBOARD_HEIGHT			= 100;

// ### GameBoard Object constructor ###
function GameBoard() {

	// Declare variables
	var boardHeight		= 0;
	var boardWidth		= 0;
	var boardMines		= 0;	
	
	// Sets the height of the game board in cells
	this.setHeight = function(height) {

		// Ensures that height is within the declared minimum and maximum, and is a valid type -- otherwise it is set to default values
		if(typeof height == "number")
			if(height < MIN_GAMEBOARD_HEIGHT)
				boardHeight = MIN_GAMEBOARD_HEIGHT;
			else if (height > MAX_GAMEBOARD_HEIGHT)
				boardHeight = MAX_GAMEBOARD_HEIGHT;
			else
				boardHeight = height;
		else
			boardHeight = DEFAULT_GAMEBOARD_HEIGHT;			
	};

	// Sets the width of the game board in cells
	this.setWidth = function(width) {
		// Ensures that width is within the declared minimum and maximum, and is a valid type -- otherwise it is set to default values
		if(typeof width == "number")
			if(width < MIN_GAMEBOARD_WIDTH)
				boardWidth = MIN_GAMEBOARD_WIDTH;
			else if (width > MAX_GAMEBOARD_WIDTH)
				boardWidth = MAX_GAMEBOARD_WIDTH;
			else 
				boardWidth = width;
		else
			boardWidth = DEFAULT_GAMEBOARD_WIDTH;
	};

	// Sets the number of mines within the game board
	this.setMines = function(mines) {
	
		// Calculate the maximum number of mines
		var maxMines = (boardHeight * boardWidth) - 1;
		
		// Ensures that the number of mines is within the declared minimum and maximum, and is a valid type -- otherwise it is set to default values
		if(typeof mines == "number")
			if(mines < MIN_GAMEBOARD_MINES)
				boardMines = MIN_GAMEBOARD_MINES;			
			else if (mines > maxMines)
				boardMines = maxMines;
			else
				boardMines = mines;
		else
			boardMines = DEFAULT_GAMEBOARD_MINES;
	};

	// Returns the height of the game board in cells
	this.getHeight = function() {
		return boardHeight;
	};
	
	// Returns the width of the game board in cells
	this.getWidth = function() {
		return boardWidth;
	};
	
	// Returns the number of mines on the game board
	this.getMines = function() {
		return boardMines;
	};
	
	// Draws the gameboard
	this.drawBoard = function() {
	}
}