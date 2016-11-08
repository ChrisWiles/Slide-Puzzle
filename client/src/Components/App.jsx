import React, {Component, PropTypes} from 'react'

import TopBar from './TopBar'
import BoardDisplay from './BoardDisplay'
import SnackBarMsg from './SnackBarMsg'

import NewBoard from '../board/NewBoard'

class App extends Component {

  state = {
    board: [],
    count: 0,
    isWin: false,
    N: 15
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

  changeGame = (N) => this.defaultState(N)

  handleKeyDown = (e) => {
    const {board, count} = this.state

    const moved = board.moveOnDirection(e.keyCode - 37)

    this.setState({count: count + (moved ? 1 : 0)})
    // eslint-disable-next-line
    board.isGoal() && this.setState({isWin: true})
  }

  render() {
    const {toggleTheme} = this.props
    const {count, board, isWin, N} = this.state
    return (
      <div>
        <TopBar count={count} isWin={isWin} changeGame={this.changeGame} toggleTheme={toggleTheme}/>
        <br/>
        {board.board && <BoardDisplay numRows={Math.round(Math.sqrt(N))} board={board.board}/>}
        <SnackBarMsg isWin={isWin}/>
      </div>
    )
  }
}

App.propTypes = {
  toggleTheme: PropTypes.func.isRequired
}

export default App
