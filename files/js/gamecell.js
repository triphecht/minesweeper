function GameCell() {
	var mined;
	var flagged;
	var hidden;
	var adjacentMines;

	this.isMined() = function() {
		return mined;
	}
	
	this.addMine() = function() {
		mined = true;
	}
	
	this.removeMine() = function() {
		mined = false;
	}
	
	this.isHidden() = function() {
		return hidden;
	}
	
	this.revealCell() = function() {
		hidden = false;
	}
	
	this.hideCell() = function() {
		hidden = true;
	}
}