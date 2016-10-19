import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TopBar from './TopBar'
import BoardDisplay from './BoardDisplay'
import BoardFactory from '../board/BoardFactory'
import Counter from './Counter'
import BottomFrame from './BottomFrame'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [],
      count: 0,
      won: false,
      autosolve: false
    }
  }

  componentDidMount() {
    this.defaultState()
    // $(document.body).on('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    // $(document.body).off('keydown', this.handleKeyDown)
  }

  defaultState() {
    const bf = new BoardFactory()
    const board = bf.getBoard()
    console.log(board)
    this.setState({board, count: 0, won: false, autosolve: false})
  }

  reset() {
    this.replaceState(this.defaultState())
  }

  activateAutoSolve() {
    this.setState({autosolve: true})
  }

  handleKeyDown(e) {
    if (this.state.autosolve) {
      return
    }
    const LEFT = 37,
      UP = 38,
      RIGHT = 39,
      DOWN = 40

    if (e.keyCode === LEFT) {
      this.state.board.moveRight()
      this.state.count += 1
    } else if (e.keyCode === UP) {
      this.state.board.moveDown()
      this.state.count += 1
    } else if (e.keyCode === RIGHT) {
      this.state.board.moveLeft()
      this.state.count += 1
    } else if (e.keyCode === DOWN) {
      this.state.board.moveUp()
      this.state.count += 1
    }

    this.setState({board: this.state.board, count: this.state.count})

    if (this.state.board.isGoal()) {
      this.setState({won: true})
    } else {
      this.setState({won: false})
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TopBar/>
          <br/>
          <Counter reset={this.reset} count={this.state.count}/>
          <BoardDisplay N={4} board={this.state.board.board}/>
          <BottomFrame won={this.state.won} activateAI={this.activateAutoSolve} autosolve={this.state.autosolve}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
