import React, {Component, PropTypes} from 'react'

import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

import HighScoreDialog from './HighScoreDialog'

import StopWatch from '../helpers/StopWatch'
import {isHighScore} from '../helpers/helpers'
import defaultLeaderBoard from '../board/defaultLeaderBoard'

const boldFont = {fontWeight: 600}
const styleTitle = { "fontFamily":"'Lato', sans-serif", fontWeight: 600}
const timer = new StopWatch()


class TopBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      K: 15,
      time: '',
      leaderBoard: defaultLeaderBoard,
      isDialogOpen: false
    }
  }

  componentDidMount() {
    timer.start()
    setInterval(this.tick, 49)
  }

  componentWillReceiveProps({isWin}) {
    const {leaderBoard, K, time} = this.state
    if(isWin) {
      timer.stop()
      if(isHighScore(leaderBoard[`N${K}`], time)) {
        this.handleDialogOpen()
      }
    }
  }

  getName = name => {
    const {time, K, leaderBoard} = this.state
    const highScore = {name: name, time}
    // push Name and Time into leaderBoard
    console.log(highScore)
    leaderBoard[`N${K}`].push(highScore)
    // merge into db
    // push to db
  }

  handleDialogOpen = () => this.setState({isDialogOpen: true})
  handleDialogClose = () => this.setState({isDialogOpen: false})

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
    const {K, time, isDialogOpen} = this.state
    const values = [3, 8, 15, 24, 35, 48]
    return (
      <Toolbar>
        <HighScoreDialog isOpen={isDialogOpen} getName={this.getName} handleClose={this.handleDialogClose}/>
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
