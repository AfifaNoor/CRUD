import React, { useEffect } from 'react'
import { useState } from 'react';

const AddEmployee = () => {

const [name,setName] =useState()
const[email,setEmail]= useState()
const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    // Load existing data from localStorage (if any) when the component mounts
    const storedData = JSON.parse(localStorage.getItem('employeeList')) || [];
    setEmployeeList(storedData);
  }, []);


  const handleSubmit = (e) =>{
    e.preventDefault();
      const newEmployee = {
      name: name.trim(),
      email: email.trim()
    };

    const updatedList = [...employeeList, newEmployee];

    // Save updated list in state and localStorage
    setEmployeeList(updatedList);
    localStorage.setItem('employeeList', JSON.stringify(updatedList));

    console.log('Employee Added:', newEmployee);
    

  }

  return (
    <div className='add-employee-page'>
      <h2>Add Employee</h2>
        <input type='text' name= "name" placeholder='Employee Name' value={name} className='form-input' onChange={(e) => setName(e.target.value)} />
        {/* <div className='dropdown' >
          <select className='form-input' value={formData.gender}  onChange={handleChange} name='gender' required>
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
            <option value="prefer not to say">Prefer not to say</option>
          </select>   
        </div> */}
        <input type='email' placeholder='Employee Email'  name="email" value={email} className='form-input' onChange={(e) => setEmail(e.target.value)}  required />
        {/* <input type='text' placeholder='Employee Position' value={formData.position} className='form-input' onChange={handleChange}  required />
        <input type='number' placeholder='Employee Salary'  value ={ formData.salary} className='form-input' onChange={handleChange}  required />
        <input type='date' placeholder='Date of Joining'  value={formData.joiningDate} className='form-input'  onChange={handleChange}required />
          */}
        <div className="form-button">
          <button type="submit" onClick={handleSubmit}  >Add Employee</button>
        </div>
      
    </div>
  )
}

export default AddEmployee
