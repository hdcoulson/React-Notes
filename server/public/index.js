/* eslint-disable no-unused-vars */
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

const notes = [
  'First Entry - This is my first note.',
  'Second entry - This is my second note.',
  'Third entry - This is my third note.'
]

app.post('/notes', function(req, res, next) {
  var note = req.body.data
  notes.push(note)
  res.sendStatus(201)
})

app.get('/notes', function(req, res, next) {
  res.json(notes)
})


app.listen(3000)
