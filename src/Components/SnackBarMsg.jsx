import React, {Component, PropTypes} from 'react'
import Snackbar from 'material-ui/Snackbar'
import {pinkA200} from 'material-ui/styles/colors'

class SnackBarMsg extends Component {

  constructor(props) {
    super(props)
    this.state = {
      autoHideDuration: 60000,
      open: true,
      msg: 'Use arrow keys to move'
    }
  }

  componentWillReceiveProps({isWin}) {
    if(isWin) {
      this.setState({open: true, msg: 'Congratulations You Won!'})
    }
  }

  handleRequestClose = () => this.setState({open: false})

  render() {
    const {open, msg, autoHideDuration} = this.state
    return (
        <Snackbar
          contentStyle={{fontSize: "24px", color: pinkA200, fontWeight: 700}}
          open={open}
          message={msg}
          autoHideDuration={autoHideDuration}
          onRequestClose={this.handleRequestClose}
        />
    )
  }
}

SnackBarMsg.propTypes = {
  isWin: PropTypes.bool.isRequired
}

export default SnackBarMsg
