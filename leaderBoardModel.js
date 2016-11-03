import db from './db'
import mongoose from 'mongoose'
import LeaderBoardSchema from './leaderBoardSchema'

const leaderBoard = (leaderBoard) => {
  return LeaderBoardSchema.findOne({})
    .then(data => writeDB(data, leaderBoard))
    .catch(err => console.log(err))
}

function writeDB(data, leaderBoard) {
  if (data) {
    data.leaderBoard = merge(data.leaderBoard, leaderBoard)
  } else {
    // DB is empty, must have been reset on mLab
    data = new LeaderBoardSchema()
    data.leaderBoard = leaderBoard
  }

  data.save(function(err, fluffy) {
    if (err)
      return console.log(err)
  })

  return data
}

function merge() {

}
export default leaderBoard
