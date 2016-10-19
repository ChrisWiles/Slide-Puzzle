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
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  // componentWillReceiveProps({keydown}) {
  //   if ( keydown.event ) {
  //     // inspect the keydown event and decide what to do
  //     console.log( keydown.event.which );
  //   }
  // }

  componentDidMount() {
    this.defaultState()
    document.addEventListener("keydown", this.handleKeyDown)
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
    let {autosolve, board, count} = this.state
    if (autosolve) {
      return
    }
    const LEFT = 37,
      UP = 38,
      RIGHT = 39,
      DOWN = 40
      console.log(e.keyCode)

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

    this.setState({board, count})

    if (board.isGoal()) {
      this.setState({won: true})
    } else {
      this.setState({won: false})
    }
  }

  render() {
    const {count, board, won, autosolve} = this.state
    return (
      <MuiThemeProvider>
        <div>
          <TopBar/>
          <br/>
          <Counter reset={this.reset} count={count}/>
          {board.board ? <BoardDisplay N={4} board={board.board}/> : null}
          <BottomFrame won={won} activateAI={this.activateAutoSolve} autosolve={autosolve}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
