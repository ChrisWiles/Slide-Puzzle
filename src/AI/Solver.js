import Board from '../board/Board'
import SearchNode from './SearchNode'
import PriorityQueue from '../helpers/PriorityQueue'

function Solver(board) {
  this.b = board
  this.solvable = false
  this.moves = 0
  this.stack = []

  let sn = new SearchNode(this.b, null)
  let snt = new SearchNode(this.b.twin(), null)

  let pq = new PriorityQueue()
  let pqt = new PriorityQueue()

  this._aStar(sn, snt, pq, pqt)
}

Solver.prototype = {
  _aStar(sn, snt, pq, pqt) {
    pq.push(sn, sn.priority)
    pqt.push(snt, snt.priority)

    while (true) {
      sn = pq.pop()
      snt = pqt.pop()

      if (sn.board.isGoal()) {
        this.moves = sn.moves
        this.solvable = true
        break
      }

      if (snt.board.isGoal())
        break

      this._addNeighbours(sn, pq)
      this._addNeighbours(snt, pqt)
    }

    if (this.solvable) {
      while (sn != null) {
        this.stack.push(sn.board)
        sn = sn.prev
      }
    }
  },

  _addNeighbours(sn, pq) {
    let neighbours = sn.board.neighbours()

    for (let i = 0; i < neighbours.length; i++) {
      let board = neighbours[i]
      let n = new SearchNode(board, sn)
      if (sn.prev == null || !n.board.equals(sn.prev.board))
        pq.push(n, n.priority)
    }
  },

  solution() {
    this.stack.reverse()
    return this.stack
  }
}

function SolverTest() {
    let board = new Board([14, 13, 5, 3, 0, 1, 8, 12, 6, 2, 4, 10, 11, 9, 15, 7])
    let solver = new Solver(board)

    console.log("The solution for the problem is in " + solver.solution().length)
    let solution = solver.solution()
    for (let i = 0; i < solution.length; i++)
        console.log(solution[i].toString())
}

export {Solver}
