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
    console.log("submit", formData)

  }

  const handleChange =(e) =>{
    // e.target.value(setFormData)
    console.log(e.target.name)
    const name = e.target.name
    const value = e.target.value
    const email= e.target.email
    const position=e.target.position
    setFormData({[name]:value});
    // console.log(name , value)


  }



  return (
    <div className='add-employee-page'>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Employee Name' value={formData.name} className='form-input' onChange={handleChange}  required />
        <div className='dropdown' >
          <select className='form-input' value={formData.gender}  onChange={handleChange} required>
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
            <option value="prefer not to say">Prefer not to say</option>
          </select>   
        </div>
        <input type='email' placeholder='Employee Email' value={formData.email} className='form-input' onChange={handleChange}  required />
        <input type='text' placeholder='Employee Position' value={formData.position} className='form-input' onChange={handleChange}  required />
        <input type='number' placeholder='Employee Salary'  value ={ formData.salary} className='form-input' onChange={handleChange}  required />
        <input type='date' placeholder='Date of Joining'  value={formData.joiningDate} className='form-input'  onChange={handleChange}required />
        
        <div className="form-button">
          <button type="submit" >Add Employee</button>
        </div>
      </form>
      
    </div>
  )
}

export default AddEmployee
