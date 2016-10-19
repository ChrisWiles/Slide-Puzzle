import React, {Component} from 'react'
import BoardDisplay from './BoardDisplay'
import BoardFactory from '../board/BoardFactory'

class TheBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
       board: null,
       count: 0
    }
  }

  componentDidMount() {
    const bf = new BoardFactory()
    const board = bf.getBoard()
    this.setState({board})
  }

  handleKeyDown(e) {
    let board = this.state.board
    let LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40
    let count  = 0
    if(e.keyCode === LEFT) {
      board.moveRight()
      count = this.state.count + 1
    }
    else if (e.keyCode === UP) {
      board.moveDown()
      count = this.state.count + 1
    }
    else if (e.keyCode === RIGHT) {
      board.moveLeft()
      count = this.state.count + 1
    }
    else if (e.keyCode === DOWN) {
      board.moveUp()
      count = this.state.count + 1
    }

    this.setState({board: board, count: count})
    console.log(this.state.count)
  }

  render() {
    return (
        <BoardDisplay N={4} board={this.state.board.board}/>
    )
  }
}

export default TheBoard
