import {Schema, model} from 'mongoose'

// Create a Scores schema
const scoresSchema = new Schema({
  characters: Object
})

// Created a Mongoose schema which maps to a MongoDB collection and defines
// the shape of the documents within that collection.

export default model("Scores", scoresSchema)
