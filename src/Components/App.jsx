import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TopBar from './TopBar'
import BoardDisplay from './BoardDisplay'
import SnackbarYouWon from './SnackbarYouWon'

import BoardFactory from '../board/BoardFactory'

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
      board: new BoardFactory().getBoard(),
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
      <MuiThemeProvider>
        <div>
          <TopBar reset={this.reset} count={count}/>
          <br/>
          {board.board ? <BoardDisplay numRows={4} board={board.board}/> : null}
          <SnackbarYouWon isWin={isWin}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
