import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

class Counter extends Component {

   render() {
     const {reset, count} = this.props
      return (
         <div className='misc'>
            <RaisedButton className='counter-button' label={`Moves: ${count}`}/>
            <RaisedButton className='reset-button' onClick={reset} label='Reset' secondary={true}/>
         </div>
      )
   }
}

Counter.propTypes = {
  reset: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

export default Counter
