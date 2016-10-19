import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

// This class handles the button that the app displays
class BoardDisplay extends Component {

  mapBoard(board) {
    return board.map(row => {
       let rowMarkup = row.map(element => {
          if (element !== 0) {
             return (
                <Paper zDepth={1} className='board-cell' key={element}>
                   <p>{element}</p>
                </Paper>
             )
          } else {
             return <div className='board-cell' key={element}></div>
          }
       })
       return <row className='board-row' key={row}>{rowMarkup}</row>
    })
  }

   render() {
      const {N, board} = this.props

      // conversion of the 1-d array to 2-d
      let oldBoard = board.slice(0)
      const newBoard = []

      while (oldBoard.length) {
         newBoard.push(oldBoard.splice(0, N))
      }

      const mappedBoard = this.mapBoard(newBoard)
      // generating the markup for the 2-d array

      return <div className='board'>{mappedBoard}</div>
   }
}

export default BoardDisplay
