const db = require("./db")
const ScoresSchema = require("./scoresSchema")
const mongoose = require('mongoose')

exports.Scores = (characters) => {
  return ScoresSchema.findOne({})
    .then(data => writeDB(data, characters))
    .catch(err => console.log(err))
}

function writeDB(data, characters) {
  if (data) {
    data.characters = merge(data.characters, characters)
  } else {
    // DB is empty, must have been reset on mLab
    data = new ScoresSchema()
    data.characters = characters
  }

  data.save(function(err, fluffy) {
    if (err)
      return console.log(err)
  })

  return data
}

function merge(a, b) {
  const merged = {}
  let keys = [
    ...Object.keys(a),
    ...Object.keys(b)
  ]

  keys.forEach(key => {
    if (a[key] && b[key]) {
      merged[key] = a[key] + b[key]
    } else if (a[key]) {
      merged[key] = a[key]
    } else if (b[key]) {
      merged[key] = b[key]
    }
  })
  return merged
}
