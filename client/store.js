var Redux = require('redux')

const initialNotes = [
  {
    text: 'First Entry - This is my first note.'
  },
  {
    text: 'Second entry - This is my second note.'
  },
  {
    text: 'Third entry - This is my third note.'
  }
]

function reducer(oldState = initialNotes, action) {
  if (action.type === 'NEW_NOTE') {
    return oldState.concat(action.text)
  }
  else if (action.type === 'DELETE_NOTE') {
    return [
        ...oldState.slice(0, action.position),
        ...oldState.slice(action.position + 1)
    ]
  }
  else {
    return oldState
  }
}

const store = Redux.createStore(reducer, initialNotes)

module.exports = store
