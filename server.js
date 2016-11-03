import express from 'express'
import Model from './leaderBoardModel'
const app = express()

app.set('port', (process.env.PORT || 3001))
console.log(process.env.PORT)
// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})


app.post('/leaderBoard', (req, res) => {
  console.log(req.body.leaderBoard)
  // Model.leaderBoard(req.body.leaderBoard)
  //   .then(data => res.send(data.leaderBoard))
  //   .catch(err => console.log(err))
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
