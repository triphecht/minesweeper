

// ### GameBoard Object constructor ###
function GameBoard() {

	// Declare variables
	var boardHeight		= 0;
	var boardWidth		= 0;
	var boardMines		= 0;
	var boardCell		= [];
	
	// Sets the height of the game board in cells
	this.setHeight = function(height) {

		// Ensures that height is within the declared minimum and maximum, and is a valid type -- otherwise it is set to default values
		if(isNaN(height) == false) {
			height = Math.max(height, MIN_GAMEBOARD_HEIGHT);
			height = Math.min(height, MAX_GAMEBOARD_HEIGHT);
			boardHeight = height;
		}
		else {
			boardHeight = DEFAULT_GAMEBOARD_HEIGHT;			
		}
	};

	// Sets the width of the game board in cells
	this.setWidth = function(width) {
		// Ensures that width is within the declared minimum and maximum, and is a valid type -- otherwise it is set to default values
		if(isNaN(width) == false) {
			width = Math.max(width, MIN_GAMEBOARD_WIDTH);
			width = Math.min(width, MAX_GAMEBOARD_WIDTH);
			boardWidth = width;
		}
		else {
			boardWidth = DEFAULT_GAMEBOARD_WIDTH;		
		}			
	};

	// Sets the number of mines within the game board
	this.setMines = function(mines) {
	
		// Calculate the maximum number of mines
		var maxMines = (boardHeight * boardWidth) - 1;
		
		// Ensures that the number of mines is within the declared minimum and maximum, and is a valid type -- otherwise it is set to default values
		if(isNaN(mines) == false) {
			mines = Math.max(mines, MIN_GAMEBOARD_MINES);
			mines = Math.min(mines, MAX_GAMEBOARD_MINES);
			boardMines = mines;
		}
		else {
			boardMines = DEFAULT_GAMEBOARD_MINES;
		}
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
	
	// Populates the game board with mines
	this.populate = function() {
		var mines = boardMines;
		
		for (var xIndex  = 0; xIndex < boardWidth; xIndex++) {
			for (var yIndex = 0; yIndex < boardHeight; yIndex++) {
			};
		};
	};
	
	// Draws the game board
	this.drawBoard = function(boardContainer) {
		for(var xIndex = 0; xIndex < boardWidth; xIndex++) {
			for(var yIndex = 0; yIndex < boardHeight; yIndex++) {
				$(boardContainer).append('<div class="gameTile" id="cell-' + xIndex + '-' + yIndex + '">');	//temporary
			};
		};
	};
}


























