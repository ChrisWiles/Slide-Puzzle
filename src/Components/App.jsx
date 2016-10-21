import React, {Component} from 'react'

import TopBar from './TopBar'
import BoardDisplay from './BoardDisplay'
import SnackBarMsg from './SnackBarMsg'

import NewBoard from '../board/NewBoard'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: [],
      count: 0,
      isWin: false,
      N: 15
    }
  }

  componentDidMount() {
    this.defaultState(this.state.N)
    document.addEventListener("keydown", this.handleKeyDown)
  }

  defaultState(N) {
    this.setState({
      N,
      board: NewBoard(N),
      count: 0,
      isWin: false,
    })
  }


  changeGame = (N) => this.reset(N)

  reset = (N) => this.defaultState(N)

  handleKeyDown = (e) => {
    const {board, count} = this.state

    const moved = board.moveOnDirection(e.keyCode - 37)

    this.setState({count: count + (moved ? 1 : 0)})

    if (board.isGoal()) {
      this.setState({isWin: true})
    }
    this.setState({isWin: false})
  }

  render() {
    const {count, board, isWin, N} = this.state
    return (
      <div>
        <TopBar reset={this.reset} count={count} isWin={isWin} changeGame={this.changeGame}/>
        <br/>
        {board.board ? <BoardDisplay numRows={Math.round(Math.sqrt(N))} board={board.board}/> : null}
        <SnackBarMsg isWin={isWin}/>
      </div>
    )
  }
}

export default App
