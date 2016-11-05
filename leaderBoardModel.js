import db from './db'
import mongoose from 'mongoose'
import LeaderBoardSchema from './leaderBoardSchema'

const leaderBoardModel = (leaderBoard) => {
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

// returns new obj with leaderboards merged, sorted and top ten times for each N
const merge = (Mongo, Client) => {
  const cleanTime = (time) => time.time.split(':').join('')
  const leaderBoard = {}
  for (let key in Mongo) {
    let scores = leaderBoard[key] = []

    Client[key].forEach((score, i) => {
      scores.push(score)
      if(Mongo[key][i]) {
        if (!Client[key].find(score => score.time === Mongo[key][i].time)) {
          scores.push(Mongo[key][i])
        }
      }
    })
    scores.sort((a, b) => cleanTime(a) - cleanTime(b)).splice(10)
  }
  return leaderBoard
}

export default leaderBoardModel
