import React, {Component, PropTypes} from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

class HighScoreDialog extends Component {
  
  state = {
    value: ''
  }

  handleClose = () => this.props.handleClose()

  handleChange = (e) => this.setState({value: e.target.value})

  handleSubmit = () => {
    this.handleClose()
    this.props.getName(this.state.value)
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ]

    return (
      <div>
        <Dialog
          title="New High Score"
          actions={actions}
          modal={true}
          open={this.props.isOpen}
        >
        <TextField
          hintText="Enter Name"
          floatingLabelText="Enter Name"
          value={this.state.value}
          onChange={this.handleChange}
        />
        </Dialog>
      </div>
    )
  }
}

HighScoreDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  getName: PropTypes.func.isRequired
}

export default HighScoreDialog
