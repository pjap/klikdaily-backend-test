console.log('Controllers Question\n')

const QuestionModel = require('../models/question')

class Question {
  constructor() {

  }

  static findAllQuestion(req, res) {
    QuestionModel.find({})
    .then(response => {
      res.send({
        Message : 'Data Berhasil Di Muat!',
        Data : response,
        Status : 200
      })
    })
    .catch(err => {
      res.send({
        Error : err,
        Status : 403
      })
    })
  }

  static createQuestion(req, res) {
    QuestionModel.create({
      namaQuestion : req.body.namaQuestion,
      nilaiQuestion : req.body.nilaiQuestion
    })
    .then(response => {
      res.send({
        Message : 'Data Anda Berhasil Di Simpan!',
        Data : response,
        Status : 200
      })
    })
    .catch(err => {
      res.send({
        Error : err,
        Status : 403
      })
    })
  }

  static deleteQuestion(req, res) {
    QuestionModel.findOneAndRemove({ _id : req.params.id })
    .then(response => {
      res.send({
        Message : 'Data Anda Berhasil Di Hapus!',
        Data : response,
        Status : 200
      })
    })
    .catch(err => {
      res.send({
        Error : err,
        Status : 403
      })
    })
  }
}

module.exports = Question;
