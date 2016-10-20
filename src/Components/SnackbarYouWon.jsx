import React, {Component, PropTypes} from 'react'
import Snackbar from 'material-ui/Snackbar'

class SnackbarYouWon extends Component {

  constructor(props) {
    super(props)
    this.state = {
      autoHideDuration: 60000,
      message: 'Congratulations You Won!',
      open: false,
    }
  }

  componentWillReceiveProps({isWin}) {
    if(isWin) {
      this.setState({open: true})
    }
  }

  handleRequestClose = () => this.setState({open: false})

  render() {
    const {open, message, autoHideDuration} = this.state
    return (
        <Snackbar
          contentStyle={{fontSize: "24px"}}
          open={open}
          message={message}
          autoHideDuration={autoHideDuration}
          onRequestClose={this.handleRequestClose}
        />
    )
  }
}

SnackbarYouWon.propTypes = {
  isWin: PropTypes.bool.isRequired
}

export default SnackbarYouWon
