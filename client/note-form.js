var React = require('react')

function Form(props) {
// receives the new note, appends it to the existing array, then refreshes the array on the DOM

  const handleChange = function(event) {
    event.preventDefault()
    store.dispatch({ type: 'INPUT_CHANGED', text: event.target.value})
  }

  const handleSubmit = function(event) {
    event.preventDefault()
    const state = store.getState()
    store.dispatch({ type: 'NOTE_CREATED', text: state.newNote })
  }


  return (
    <div className='col-lg-6'>
        <form className='form-group' onSubmit={ handleSubmit }>
          <input
            onChange={ handleChange }
            type='text'
            className='form-control'
            placeholder='Add a note'></input>
          <span className='form-group-btn'>
            <button
              className='btn btn-default'
              type='submit'>Submit</button>
          </span>
        </form> 
    </div>
  )
}

module.exports = Form
