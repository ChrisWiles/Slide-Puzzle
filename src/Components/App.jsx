import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TopBar from './TopBar'
import BoardDisplay from './BoardDisplay'
import BoardFactory from '../board/BoardFactory'
import Counter from './Counter'

import BottomFrame from './BottomFrame'
import Board from '../board/Board'
import Solver from '../AI/Solver'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: [],
      count: 0,
      won: false,
      autosolve: false,
      solution: null,
      solutionIndex: 1,
      processing: false
    }

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.reset = this.reset.bind(this)
    this.activateAutoSolve = this.activateAutoSolve.bind(this)
  }

  componentDidMount() {
    this.defaultState()
    document.addEventListener("keydown", this.handleKeyDown)
  }

  defaultState() {
    const bf = new BoardFactory()
    const board = bf.getBoard()
    this.setState({
      board,
      count: 0,
      won: false,
      autosolve: false,
      solution: null,
      solutionIndex: 1,
      processing: false
    })
  }

  reset() {
    this.replaceState(this.defaultState())
  }

  activateAutoSolve() {
    this.setState({autosolve: true, processing: true})
    this.forceUpdate()
    const solver = new Solver(this.state.board)

    this.setState({solution: solver.solution(), processing: false})
  }

  handleKeyDown(e) {
    let {
      autosolve,
      board,
      count,
      won,
      solution,
      solutionIndex
    } = this.state

    const LEFT = 37,
      UP = 38,
      RIGHT = 39,
      DOWN = 40,
      SPACE = 32

    if (autosolve) {
      if (e.keyCode === SPACE && !won) {
        this.setState({
          board: solution[solutionIndex],
          solutionIndex: solutionIndex + 1,
          count: count + 1
        })
      }
    } else {


      if (e.keyCode === LEFT) {
        board.moveRight()
        count += 1
      } else if (e.keyCode === UP) {
        board.moveDown()
        count += 1
      } else if (e.keyCode === RIGHT) {
        board.moveLeft()
        count += 1
      } else if (e.keyCode === DOWN) {
        board.moveUp()
        count += 1
      }

      this.setState({board: board, count: count})
    }

    if (board.isGoal()) {
      this.setState({won: true})
    } else {
      this.setState({won: false})
    }
  }

  render() {
    const {count, board, won, autosolve, processing} = this.state
    console.log(board)
    return (
      <MuiThemeProvider>
      <div>
          <TopBar />
          <br />
          <Counter reset={this.reset} count={count} />
          {board.board ? <BoardDisplay N={4} board={board.board} /> : null}
          <BottomFrame won={won}
              activateAI={this.activateAutoSolve}
              autosolve={autosolve}
              processing={processing} />
      </div>
      </MuiThemeProvider>
    )
  }
}

export default App
