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
      isWin: false
    }
  }

  componentDidMount() {
    this.defaultState()
    document.addEventListener("keydown", this.handleKeyDown)
  }

  defaultState() {
    this.setState({
      board: NewBoard(15),
      count: 0,
      isWin: false
    })
  }

  reset = () => this.defaultState()

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
    const {count, board, isWin} = this.state
    return (
      <div>
        <TopBar reset={this.reset} count={count} isWin={isWin}/>
        <br/>
        {board.board ? <BoardDisplay numRows={4} board={board.board}/> : null}
        <SnackBarMsg isWin={isWin}/>
      </div>
    )
  }
}

export default App
