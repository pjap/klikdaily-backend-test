console.log('Models Question\n')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let QuestionSchema = new Schema({
  namaQuestion : { type: String, required: true },
  nilaiQuestion : { type: Number, required: true}
}, { timestamps: true })

let question = mongoose.model('question', QuestionSchema)

module.exports = question
