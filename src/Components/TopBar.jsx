import React, {Component, PropTypes} from 'react'

import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import StopWatch from '../helpers/StopWatch'

const boldFont = {fontWeight: 600}
const timer = new StopWatch()

class TopBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 2,
      time: ''
    }
  }

  componentDidMount() {
    timer.start()
    setInterval(this.tick, 49)
  }

  componentWillReceiveProps({isWin}) {
    if(isWin) {
      timer.stop()
      // winningTime(timer.time())
    }
  }


  tick = () => this.setState({time: timer.time()})



  handleReset = () => {
    timer.reset()
    timer.start()
    this.props.reset()
  }

  handleChange = (event, index, value) => this.setState({value})

  render() {
    const {count} = this.props
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange} style={boldFont} >
            <MenuItem value={1} primaryText="3-Puzzle" style={boldFont} />
            <MenuItem value={2} primaryText="8-Puzzle" style={boldFont} />
            <MenuItem value={3} primaryText="15-Puzzle" style={boldFont} />
            <MenuItem value={4} primaryText="24-Puzzle" style={boldFont} />
            <MenuItem value={5} primaryText="35-Puzzle" style={boldFont} />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarTitle text={`Time: ${this.state.time}`} style={{fontWeight: 600, color: 'none'}} />
        <ToolbarGroup>
          <ToolbarTitle text={`Moves: ${count}`} style={{fontWeight: 600, color: 'none'}} />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton label="New Game" secondary={true} onClick={this.handleReset}/>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Sign In" style={boldFont}/>
            <MenuItem primaryText="Top Scores" style={boldFont} />
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
