import React, {Component} from 'react'

import TopBar from './TopBar'
import BoardDisplay from './BoardDisplay'
import SnackbarYouWon from './SnackbarYouWon'
import Snackbar from 'material-ui/Snackbar'

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
        <TopBar reset={this.reset} count={count}/>
        <br/>
        {board.board ? <BoardDisplay numRows={4} board={board.board}/> : null}
        <SnackbarYouWon isWin={isWin}/>
        <Snackbar
          contentStyle={{fontSize: "25px"}}
          open={true}
          message="Use arrow keys to move"
          autoHideDuration={10000}
        />
      </div>
    )
  }
}

export default App
