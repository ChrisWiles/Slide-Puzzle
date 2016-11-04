import React, {PropTypes} from 'react'
import Dialog from 'material-ui/Dialog'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

const customContentStyle = {
  width: 'auto',
  maxWidth: '300px',
}

const ListItems = ({leaderBoard}) => (
  <div>
    {
      leaderBoard.map((score, i) => {
        let {name, time} = score
        return (
          name && <div key={i}>
            <ListItem
              primaryText={name}
              secondaryText={time}
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
