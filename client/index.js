const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const Notes = require('./notes')
const Form = require('./note-form')

const render = function render() {
  const state = store.getState()
  ReactDOM.render(React.createElement(Notes, state), document.querySelector('#app'))
  ReactDOM.render(React.createElement(Form, state), document.querySelector('#form'))
}

store.subscribe(render)
render()
window.store = store
