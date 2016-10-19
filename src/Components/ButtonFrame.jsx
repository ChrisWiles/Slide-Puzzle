import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class ButtonFrame extends Component {

  render() {
    return (
      <div className='centered text-center'>
        <RaisedButton label='Solve' primary={true}/>
      </div>
    )
  }
}

export default ButtonFrame
