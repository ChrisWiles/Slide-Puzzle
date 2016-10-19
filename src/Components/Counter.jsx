import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

class Counter extends Component {

  render() {
    return (
      <div className='misc'>
        <Paper className='counter' zDepth={1}>
          <p>Moves: {this.props.count}</p>
        </Paper>
        <RaisedButton className='reset-button'
          onClick={this.props.reset} label='Reset' primary={true}/>
      </div>
    )
  }
}

export default Counter
