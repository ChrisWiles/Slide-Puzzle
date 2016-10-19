import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

// This class handles the button that the app displays
class BoardDisplay extends Component {

  render() {

    // let makeMove = this.props.makeMove
    // conversion of the 1-d array to 2-d
    let oldBoard = this.props.board.slice(0)
    let newBoard = []
    while(oldBoard.length) {
      newBoard.push(oldBoard.splice(0, this.props.N))
    }

    // generating the markup for the 2-d array
    let board = newBoard.map(function boardMarkup(row) {
      let rowMarkup = row.map(function (element) {
        if (element !== 0) {
          return (
            <Paper zDepth={1} className='board-cell' key={element}>
              <p>{element}</p>
            </Paper>
          )
        }
        else {
          return (<div className='board-cell' key={element}></div>)
        }
      })
      return (<row className='board-row' key={row}>{rowMarkup}</row>)
    })

    // returning the markup
    return (
      <div className='board'>{board}</div>
    )
  }
}

export default BoardDisplay
