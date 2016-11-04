import React, {PropTypes} from 'react'
import Dialog from 'material-ui/Dialog'
import {List, ListItem} from 'material-ui/List'

const LeaderBoard = ({handleClose, isOpen, leaderBoard}) => (
  <Dialog
    title="Leader Board"
    onRequestClose={handleClose}
    open={isOpen}>
    <List>
      {
        leaderBoard.map((score, i) => {
          const {name, time} = score
          return <ListItem key={i} primaryText={`${name} ${time}`}/>
        })
      }
    </List>
  </Dialog>
)

LeaderBoard.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  leaderBoard: PropTypes.array.isRequired
}

export default LeaderBoard
