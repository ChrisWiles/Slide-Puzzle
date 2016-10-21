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
      value: 15,
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

  handleChange = (event, index, value) => {
    this.setState({value})
    this.props.getN(value)
  }

  render() {
    const {count} = this.props
    const {value, time} = this.state
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={value} onChange={this.handleChange} style={boldFont} >
            <MenuItem value={3} primaryText="3-Puzzle" style={boldFont} />
            <MenuItem value={8} primaryText="8-Puzzle" style={boldFont} />
            <MenuItem value={15} primaryText="15-Puzzle" style={boldFont} />
            <MenuItem value={24} primaryText="24-Puzzle" style={boldFont} />
            <MenuItem value={35} primaryText="35-Puzzle" style={boldFont} />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarTitle text={`Time: ${time}`} style={{fontWeight: 600, color: 'none'}} />
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
  count: PropTypes.number.isRequired,
  getN: PropTypes.func.isRequired
}

export default TopBar
