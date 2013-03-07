describe("GameBoard", function() {
  var board;

  beforeEach(function() {
    board = new GameBoard();
  });

  describe("#setHeight", function() {
    it("should constrain height to max of 30", function() {
      board.setHeight(31);

      board.getHeight().should.be.equal(30);
    });

    it("should constrain height to min of 3", function() {
      board.setHeight(2);

      board.getHeight().should.be.equal(3);
    });

    it("should default height to 10 when not given a number", function() {
      board.setHeight('blah');

      board.getHeight().should.be.equal(10);
    });

    it("should set height when given value in acceptable range", function() {
      board.setHeight(15);

      board.getHeight().should.be.equal(15);
    });
  });

  describe("#setWidth", function() {
    it("should constrain width to max of 50", function() {
      board.setWidth(51);

      board.getWidth().should.be.equal(50);
    });

    it("should constrain width to min of 3", function() {
      board.setWidth(2);

      board.getWidth().should.be.equal(3);
    });

    it("should default width to 10 when not given a number", function() {
      board.setWidth('blah');

      board.getWidth().should.be.equal(10);
    });

    it("should set width when given value in acceptable range", function() {
      board.setWidth(15);

      board.getWidth().should.be.equal(15);
    });
  });

  describe("#setMines", function() {
    it("should constrain mines to max of 1 less than spaces on the board", function() {
      board.setWidth(4);
      board.setHeight(5);

      board.setMines(50); //max should be (4 * 5) - 1 => 19

      board.getMines().should.be.equal(19);
    });

    it("should constrain mines to min of 1", function() {
      board.setWidth(4);
      board.setHeight(5);

      board.setMines(0);

      board.getMines().should.be.equal(1);
    });

    it("should set mines when value is within acceptable range", function() {
      board.setWidth(4);
      board.setHeight(5);

      board.setMines(10);

      board.getMines().should.be.equal(10);
    });
  });
});