import {Board} from './Board'

let BoardFactory = function() {}

BoardFactory.prototype.getBoard = function() {
  // Maximum number of moves is thus MAX_MOVES + MIN_MOVES
  let MAX_MOVES = 165
  let MIN_MOVES = 50

  // Start with a solved board
  let board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])
  // generate a random number this will be the number of moves that the
  // board will make
  const moves = Math.floor((Math.random() * MAX_MOVES) + MIN_MOVES)

  // randomly choose UP, DOWN, LEFT, RIGHT $(MOVES) number of times
  for (let i = 1; i < moves; i++) {
    const n = Math.floor((Math.random() * 4) + 1)
    if(n === 1) board.moveLeft()
    if(n === 2) board.moveRight()
    if(n === 3) board.moveUp()
    if(n === 4) board.moveDown()
  }

  return board
}

export default BoardFactory
