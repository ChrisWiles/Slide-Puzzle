"use strict"

function Solver(board) {
    this.board = board
    this.solvable = false
    this.moves = 0
    this.stack = []

    let sn = new SearchNode(board)
    let snt = new SearchNode(board.twin())

    let pq = new PriorityQueue()
    let pqt = new PriorityQueue()

    this._aStar(sn, snt, pq, pqt)
}

Solver.prototype = {
    _aStar(sn, snt, pq, pqt) {
        pq.push(sn)
        pqt.push(snt)

        while (true) {
            sn = pq.pop()
            snt = pqt.pop()

            if (sn.board.isGoal()) {
                this.moves = sn.moves
                this.solvable = true
                break
            }

            if (snt.board.isGoal()) {
                break
            }

            this._addNeighbours(sn, pq)
            this._addNeighbours(snt, pqt)
        }

        if (this.solvable) {
            while (sn) {
                this.stack.push(sn.board)
                sn = sn.previous
            }
        }
    },

    _addNeighbours(sn, pq) {
        let neighbours = sn.board.neighbours()

        for (let i = 0; i < neighbours.length; i++) {
            let board = neighbours[i]
            let n = new SearchNode(board, sn)
            if (!(sn.prev && n.board.equals(sn.prev.board)))
                pq.push(n)
        }
    },

    solution() {
        this.stack.reverse()
        return this.stack
    }
}

function prnt() {
    let b = new Board([8, 1, 3, 4, 0, 2, 7, 6, 5])
    console.log(b.neighbours().toString())

    console.log(b)
    let s = new Solver(b)
    console.log(s.solvable)
}
