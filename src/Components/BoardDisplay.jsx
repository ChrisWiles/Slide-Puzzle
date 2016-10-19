import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

// This class handles the button that the app displays
class BoardDisplay extends Component {

  render() {
    // conversion of the 1-d array to 2-d
    let newBoard = []
    while (this.props.board.length) {
      newBoard.push(this.props.board.splice(0, this.props.N))
    }

    // generating the markup for the 2-d array
    let board = newBoard.map(function boardMarkup(row) {
      let rowMarkup = row.map(function(element) {
        return (
          <Paper zDepth={1} className='board-cell' key={element}>
            <p>{element}</p>
          </Paper>
        )
      })
      return (
        <row className='board-row' key={row}>{rowMarkup}</row>
      )
    })

    return (
      <div className='board'>{board}</div>
    )
  }
}

export default BoardDisplay
