function GameCell() {

	var mined				= false;
	var flagged				= false;
	var hidden				= true;
	var adjacentMines		= 0;
	var cellID				= "none";
	
	// Returns whether or not the cell is mined
	this.isMined = function() {
		return mined;
	};
	
	// Adds a mine to the cell
	this.addMine = function() {
		mined = true;
	};
	
	// Removes a mine from the cell
	this.removeMine = function() {
		mined = false;
	};
	
	// Returns whether or not the cell is hidden
	this.isHidden = function() {
		return hidden;
	};
	
	// Reveals the cell
	this.revealCell = function() {
		hidden = false;
	};
	
	// Hides the cell
	this.hideCell = function() {
		hidden = true;
	};

	// Sets the cell ID
	this.setID = function(newID) {
		cellID = newID;
	};
	
	// Returns the cell ID
	this.getID = function() {
		return cellID;
	};
	
	// When the cell gets clicked...
	this.clicked = function() {
		
	}
}



























