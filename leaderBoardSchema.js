import mongoose from 'mongoose'
const leaderBoardSchema = new mongoose.Schema({
  leaderBoard: Object
})

module.exports = mongoose.model("leaderBoard", leaderBoardSchema)
