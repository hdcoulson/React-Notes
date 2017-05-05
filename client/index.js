const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const Notes = require('./notes')

const render = function render() {
  const state = store.getState()
  ReactDOM.render(React.createElement(Notes, {notes: state.notes}), document.querySelector('#app'))
}

render()
