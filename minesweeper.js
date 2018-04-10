document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: []
};

for(var i = 0; i < 6; i++){
  for(var j = 0; j < 6; j++){
    //console.log('{' + i + ', ' + j +'}');
    if (Math.floor(Math.random()*10) < 8){
      board.cells.push({
        row: i, 
        col: j,
        isMine: false,
        hidden: true,
        surroundingMines: 0
      });
    }
    else {
      board.cells.push({
        row: i, 
        col: j,
        isMine: true,
        hidden: true,
        surroundingMines: 0
      });
    }
    
    
  }
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard();
  for(var i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var surroundingMines = 0;
  for(var i = 0; i < surrounding.length; i++){
    if (surrounding[i].isMine){
      surroundingMines++;
    }
  }
  return surroundingMines;
}

