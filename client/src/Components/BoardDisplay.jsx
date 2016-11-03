import React, {Component, PropTypes} from 'react'
import Paper from 'material-ui/Paper'

class BoardDisplay extends Component {

  mapRow(row) {
    return row.map((element, i) => {
      if (element !== 0) {
        return (
          <Paper zDepth={2} className='board-cell' key={i}>
            <p>{element}</p>
          </Paper>
        )
      } else {
        return <div className='board-cell' key={i}/>
      }
    })
  }

  mapBoard(board) {
    // generating the markup for the 2-d array
    return board.map(row => {
      return (
        <row className='board-row' key={row}>
          {this.mapRow(row)}
        </row>
      )
    })
  }

  arrayTransform(numRows, board) {
    // 1-d array to 2-d

    let oldBoard = board.slice(0)
    const newBoard = []

    while (oldBoard.length) {
      newBoard.push(oldBoard.splice(0, numRows))
    }

    return newBoard
  }

  render() {
    const {numRows, board} = this.props

    const array2d = this.arrayTransform(numRows, board)
    const mappedBoard = this.mapBoard(array2d)

    return (
      <div className="row center-xs">
        <div className="col-xs-12">
          <div className="box">
            {mappedBoard}
          </div>
        </div>
      </div>
    )
  }
}

BoardDisplay.propTypes = {
  numRows: PropTypes.number.isRequired,
  board: PropTypes.array.isRequired
}

export default BoardDisplay
