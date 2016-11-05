import express from 'express'
import leaderBoardModel from './leaderBoardModel'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(morgan("dev"))

app.set('port', (process.env.PORT || 3001))
// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.post('/leaderBoard', (req, res) => {
  leaderBoardModel(req.body.leaderBoard)
    .then(data => res.send(data.leaderBoard))
    .catch(err => console.log(err))
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
