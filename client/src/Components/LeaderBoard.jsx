import React, {PropTypes} from 'react'
import Dialog from 'material-ui/Dialog'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

const customContentStyle = {
  width: 'auto',
  maxWidth: '410px',
}

const timeHelp = (t, unit) => {
  if(t === '00' || t === '000') return ''
  if(t === '01' || t === '001') return `1 ${unit} `
  return `${+t} ${unit}s `
}

const timeConvert = (time) => {
  let [h, m, s, ms] = time.split(':')
  return timeHelp(h, 'Hour') + timeHelp(m, 'Minute') + timeHelp(s, 'Second') + timeHelp(ms, 'Millisecond')
}

const ListItems = ({leaderBoard}) => (
  <div>
    {
      leaderBoard.map((score, i) => {
        let {name, time} = score
        name = 'chris'
        return (
          name && <div key={i}>
            <ListItem
              primaryText={name}
              secondaryText={timeConvert(time)}
            />
            <Divider/>
          </div>
        )
      })
    }
  </div>
)

ListItems.propTypes = {
  leaderBoard: PropTypes.array.isRequired
}

const LeaderBoard = ({handleClose, isOpen, leaderBoard}) => (
  <Dialog
    contentStyle={customContentStyle}
    title="Leader Board"
    onRequestClose={handleClose}
    open={isOpen}>
    <List>
      <ListItems leaderBoard={leaderBoard}/>
    </List>
  </Dialog>
)

LeaderBoard.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  leaderBoard: PropTypes.array.isRequired
}

export default LeaderBoard
