import React, {Component, PropTypes} from 'react'

import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'


class TopBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 2,
    }
  }

  handleChange = (event, index, value) => this.setState({value})

  render() {
    const {reset, count} = this.props
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="3-Puzzle" />
            <MenuItem value={2} primaryText="8-Puzzle" />
            <MenuItem value={3} primaryText="15-Puzzle" />
            <MenuItem value={4} primaryText="24-Puzzle" />
            <MenuItem value={5} primaryText="35-Puzzle" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text={`Moves: ${count}`} />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton label="Reset Game" secondary={true} onClick={reset}/>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Sign In" />
            <MenuItem primaryText="Top Scores" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

TopBar.propTypes = {
  reset: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

export default TopBar
