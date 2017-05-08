var React = require('react')

function Notes(props) {
  const $notes = props.notesList.map(function (note, index) {
    const $note = React.createElement('li', {key: index}, note)
    return $note
  })
  const $renderedList = React.createElement('ul', null, $notes)
  return $renderedList
}

module.exports = Notes