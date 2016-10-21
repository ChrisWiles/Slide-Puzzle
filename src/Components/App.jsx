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
    this.defaultState()
    document.addEventListener("keydown", this.handleKeyDown)
  }

  defaultState() {
    this.setState({
      board: NewBoard(this.state.N),
      count: 0,
      isWin: false
    })
  }

  getN = (N) => this.setState({N})

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
    console.log(this.state.N)
    const {count, board, isWin} = this.state
    return (
      <div>
        <TopBar reset={this.reset} count={count} isWin={isWin} getN={this.getN}/>
        <br/>
        {board.board ? <BoardDisplay numRows={4} board={board.board}/> : null}
        <SnackBarMsg isWin={isWin}/>
      </div>
    )
  }
}

export default App
