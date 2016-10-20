import Board from './Board'
import {shuffle} from '../helpers/helpers'

const NewBoard = (N) => {
  const array = []
  for (let i = 0; i < N; i++) {
    array.push(i)
  }

  const randomBoard = () => new Board(shuffle(array))

  let board = randomBoard()

  while (!board.isSolvable()) {
    board = randomBoard()
  }
  return board
}

export default NewBoard
