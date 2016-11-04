import React, {Component, PropTypes} from 'react'

import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import {grey900} from 'material-ui/styles/colors'

import StopWatch from '../helpers/StopWatch'
import isHighScore from '../helpers/helpers'
import defaultLeaderBoard from '../board/defaultLeaderBoard'

const boldFont = {fontWeight: 600}
const styleTitle = { "fontFamily":"'Lato', sans-serif", fontWeight: 600}
const timer = new StopWatch()


class TopBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      K: 15,
      time: ''
      leaderBoard: defaultLeaderBoard
    }
  }

  componentDidMount() {
    timer.start()
    setInterval(this.tick, 49)
  }

  componentWillReceiveProps({isWin}) {
    if(isWin) {
      timer.stop()
      if(isHighScore(this.state.leaderBoard[`N${this.state.K}`])) {
        // push Name and Time into leaderBoard
        // merge into db
        // push to db
      }
    }
  }

  tick = () => this.setState({time: timer.time()})

  handleNewGame = (event, K) => {
    timer.reset()
    timer.start()
    this.props.changeGame(K || this.state.K)
  }

  handleChange = (event, index, K) => {
    this.setState({K})
    this.handleNewGame(null, K)
  }

  render() {
    const {count, toggleTheme} = this.props
    const {K, time} = this.state
    const values = [3, 8, 15, 24, 35, 48]
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu  value={K} onChange={this.handleChange} style={{...styleTitle, ...boldFont}} >
            {values.map(val => <MenuItem value={val} key={val} primaryText={`${val}-Puzzle`} style={{...styleTitle, ...boldFont}}/>)}
          </DropDownMenu>
        </ToolbarGroup>


        <ToolbarGroup>
          <ToolbarTitle text={`Time: ${time}`} style={styleTitle} />
          <ToolbarTitle text={`Moves: ${count}`} style={styleTitle} />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton style={{"fontFamily":"'Lato', sans-serif"}} labelStyle={{fontWeight: 500}} label="New Game" secondary={true} onClick={this.handleNewGame}/>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Sign In" style={boldFont}/>
            <MenuItem primaryText="Top Scores" style={boldFont} />
            <MenuItem primaryText="Toggle Theme" onTouchTap={toggleTheme} style={boldFont}/>
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

TopBar.propTypes = {
  count: PropTypes.number.isRequired,
  changeGame: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired
}

export default TopBar
