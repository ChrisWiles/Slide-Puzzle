import React, {Component, PropTypes} from 'react'
import Paper from 'material-ui/Paper'

class BoardDisplay extends Component {

  mapBoard(board) {
    // generating the markup for the 2-d array
    return board.map(row => {
       let rowMarkup = row.map((element, i) => {
          if (element !== 0) {
             return (
                <Paper zDepth={2} className='board-cell' key={i}>
                   <p>{element}</p>
                </Paper>
             )
          } else {
             return <div className='board-cell' key={i}></div>
          }
       })
       return <row className='board-row' key={row}>{rowMarkup}</row>
    })
  }

   render() {
      const {numRows, board} = this.props

      // conversion of the 1-d array to 2-d
      let oldBoard = board.slice(0)
      const newBoard = []

      while (oldBoard.length) {
         newBoard.push(oldBoard.splice(0, numRows))
      }

      const mappedBoard = this.mapBoard(newBoard)

      return <div className='board'>{mappedBoard}</div>
   }
}

BoardDisplay.propTypes = {
  numRows: PropTypes.number.isRequired,
  board: PropTypes.array.isRequired
}

export default BoardDisplay
