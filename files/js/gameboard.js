

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
			mines = Math.min(mines, maxMines);
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
		
		for(var yIndex = 0; yIndex < boardHeight; yIndex++) {			
			for(var xIndex = 0; xIndex < boardWidth; xIndex++) {
				if(mines > 0) {
					mines--;
					boardCell[yIndex][xIndex].addMine();
				}
			};
		};
	};
	
	// Shuffles mines around the board
	this.shuffleMines = function(iterations) {
		var tempCell;
		var tempX;
		var tempY;
		
		for(var shuffles = 0; shuffles < iterations; shuffles++) {		
			for(var yIndex = 0; yIndex < boardHeight; yIndex++) {			
				for(var xIndex = 0; xIndex < boardWidth; xIndex++) {
					
					tempX	= Math.floor(Math.random() * boardWidth);
					tempY	= Math.floor(Math.random() * boardHeight);
					
					var random = boardCell[tempY][tempX];
					var current = boardCell[yIndex][xIndex];

					// Hold current's mine flag for later
					var tempMine = current.isMined();

					// Give current the value of random's mine flag
					random.isMined() ? current.addMine() : current.removeMine();

					// Give random the old value of current's mine flag
					tempMine ? random.addMine() : random.removeMine();
				};
			};
		};
	};
	
	// Initializes the board 
	this.initBoard = function(boardContainer) {
		for(var yIndex = 0; yIndex < boardHeight; yIndex++) {
			
			boardCell[yIndex] = [];
			for(var xIndex = 0; xIndex < boardWidth; xIndex++) {
			
				boardCell[yIndex][xIndex] = new GameCell();	
				boardCell[yIndex][xIndex].setID('cell-' + xIndex + '-' + yIndex);
				
				$(boardContainer).append('<div class="gameTile" id="' + boardCell[yIndex][xIndex].getID() + '">');
			};
		};
	};

	// Draws the game board
	this.drawBoard = function(boardContainer) {
		for(var yIndex = 0; yIndex < boardHeight; yIndex++) {
			
			for(var xIndex = 0; xIndex < boardWidth; xIndex++) {
			
				if(boardCell[yIndex][xIndex].isMined() == true) {
					$('#' + boardCell[yIndex][xIndex].getID()).css('background-image', 'url("files/images/tile-mine.png")');
				}
				else {
					$('#' + boardCell[yIndex][xIndex].getID()).css('background-image', 'url("files/images/tile-hidden.png")');
					$('#' + boardCell[yIndex][xIndex].getID()).css('background-color', '#0000FF');
				}
			};
		};
	};
	
	// Detect clicks on game board
	this.getInput = function() {
		var $elements = "";
	
		for(var yIndex = 0; yIndex < boardHeight; yIndex++) {
			for(var xIndex = 0; xIndex < boardWidth; xIndex++) {
				alert('#' + boardCell[yIndex][xIndex].getID());
				$('#' + boardCell[yIndex][xIndex].getID()).on('click', function() {
					boardCell[yIndex][xIndex].clicked();
				});
			};
		};		
	};
}


























