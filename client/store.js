var Redux = require('redux')

const initialNotes = [
  'First Entry - This is my first note.',
  'Second entry - This is my second note.',
  'Third entry - This is my third note.'
]

function reducer(oldState = initialNotes, action) {
  if (action.type === 'NOTE_CREATED') {
    return oldState.concat(action.text)
  }
  else if (action.type === 'INPUT_CHANGED') {
    return [
        ...oldState.slice(0, action.position),
        action.text,
        ...oldState.slice(action.position + 1)
    ]
  }
  else {
    console.log(oldState)
    return oldState
  }
}

const store = Redux.createStore(reducer, initialNotes)

module.exports = store
