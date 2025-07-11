import React from 'react'
import { useState } from 'react';

const AddEmployee = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    salary: '',
    joiningDate: '',
    gender: '',
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("submit", handleSubmit)
  }




  return (
    <div className='add-employee-page'>
      <h2>Add Employee</h2>
      <form>
        <input type='text' placeholder='Employee Name'   value={formData.name}    className='form-input' required />
        <div className='dropdown' >
          <select className='form-input' value={formData.gender}required>
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
            <option value="prefer not to say">Prefer not to say</option>
          </select>   
        </div>
        <input type='email' placeholder='Employee Email' value={formData.email} className='form-input' required />
        <input type='text' placeholder='Employee Position' value={formData.position} className='form-input' required />
        <input type='number' placeholder='Employee Salary'  value ={ formData.salary}className='form-input' required />
        <input type='date' placeholder='Date of Joining'  value={formData.joiningDate}className='form-input' required />
        
        <div className="form-button">
          <button type="submit" onClick={handleSubmit}>Add Employee</button>
        </div>
      </form>
      
    </div>
  )
}

export default AddEmployee
