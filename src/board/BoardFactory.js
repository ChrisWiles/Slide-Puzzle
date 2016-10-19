import {Board} from './Board'

let BoardFactory = function() {}

BoardFactory.prototype.getBoard = function () {
  let b = new Board([14, 13, 5, 3, 0, 1, 8, 12, 6, 2, 4, 10, 11, 9, 15, 7])
  return b
}

export default BoardFactory
