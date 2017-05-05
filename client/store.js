var Redux = require('redux')

const initialNotes = [
  'First Entry - This is my first note.',
  'Second entry - This is my second note.',
  'Third entry - This is my third note.'
]

function notesList(oldState = initialNotes, action) {
  if (action.type === 'NOTE_CREATED') {
    return oldState.concat(action.text)
  }
  else {
    return oldState
  }
}

function newNote(oldState = 'placeholder', action) {
  if (action.type === 'INPUT_CHANGED') {
    return action.text
  }
  else {
    return oldState
  }
}

const reducer = Redux.combineReducers({ notesList, newNote })

const store = Redux.createStore(reducer)

module.exports = store
