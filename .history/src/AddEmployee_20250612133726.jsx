import React from 'react'

const AddEmployee = () => {
  return (
    <div className='add-employee-page'>
      <h2>Add Employee</h2>
      <form>
        <input type='text' placeholder='Employee Name' className='form-input' required />
        <input type='email' placeholder='Employee Email' className='form-input' required />
        <input type='text' placeholder='Employee Position' className='form-input' required />
        <input type='number' placeholder='Employee Salary' className='form-input' required />
        <div>
            <select
        </div>
        <div className="form-button">
          <button type="submit">Add Employee</button>
        </div>
      </form>
      
    </div>
  )
}

export default AddEmployee
