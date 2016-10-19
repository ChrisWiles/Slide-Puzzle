import React, {Component} from 'react'
import BoardDisplay from './BoardDisplay'

class TheBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
       board: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
    }
  }

  render() {
    return (
        <BoardDisplay N={4} board={this.state.board}/>
    )
  }
}

export default TheBoard
