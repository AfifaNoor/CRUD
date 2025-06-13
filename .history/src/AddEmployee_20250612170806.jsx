import React from 'react'
import { useState } from 'react';

const AddEmployee = () => {
//     const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     position: '',
//     salary: '',
//     joiningDate: '',
//     gender: '',
//   });9
const [name,setName] =useState()
const[email,setEmail]= useState()



  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("submit", formData)

  }

 



  return (
    <div className='add-employee-page'>
      <h2>Add Employee</h2>
        <input type='text' name= "name" placeholder='Employee Name' value={name} className='form-input' onChange={(e)=> setName(e.target.value)} />
        {/* <div className='dropdown' >
          <select className='form-input' value={formData.gender}  onChange={handleChange} name='gender' required>
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
            <option value="prefer not to say">Prefer not to say</option>
          </select>   
        </div> */}
        <input type='email' placeholder='Employee Email'  name="email" value={email} className='form-input' onChange={handleChange}  required />
        {/* <input type='text' placeholder='Employee Position' value={formData.position} className='form-input' onChange={handleChange}  required />
        <input type='number' placeholder='Employee Salary'  value ={ formData.salary} className='form-input' onChange={handleChange}  required />
        <input type='date' placeholder='Date of Joining'  value={formData.joiningDate} className='form-input'  onChange={handleChange}required /> */}
        
        <div className="form-button">
          <button type="submit" >Add Employee</button>
        </div>
      
    </div>
  )
}

export default AddEmployee
