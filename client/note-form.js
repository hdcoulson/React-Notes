var React = require('react')

function Form(props) {
// receives the new note, appends it to the existing array, then refreshes the array on the DOM
console.log(props)
console.log(props.newNote)

return (
  <div className='col-lg-6'>
    <div className='input-group'>
      <input
        type='text'
        className='form-control'
        placeholder='Add a note'></input>
      <span className='input-group-btn'>
        <button
          className='btn btn-default'
          type='button'>Submit</button>
      </span>
    </div>
  </div>
)

}

module.exports = Form
