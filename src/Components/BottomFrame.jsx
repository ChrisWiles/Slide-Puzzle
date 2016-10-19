import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class BottomFrame extends Component {

  render() {
    let disabled = false
    if (this.props.autosolve) {
      disabled = true
    }

    if (!this.props.won) {
      return (
        <div className='centered text-center'>
          <RaisedButton label='Solve' primary={true} disabled={disabled}
            onClick={this.props.activateAI.bind(null, true)}/>
        </div>
      )
    } else {
      return (
        <h1 className='centered text-center'>YOU WON!!</h1>
      )
    }
  }
}

export default BottomFrame
