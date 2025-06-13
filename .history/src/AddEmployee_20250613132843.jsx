import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [joiningDate, setJoiningDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name,
      email,
      gender,
      position,
      salary,
      joiningDate,
    };

    // Get existing employees from localStorage
    const existing = JSON.parse(localStorage.getItem("employees")) || [];

    // Add new employee
    const updatedEmployees = [...existing, newEmployee];

    // Save back to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // Navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className='add-employee-page'>
      <h2>Add Employee</h2>
      <input type='text' placeholder='Employee Name' value={name} className='form-input' onChange={(e) => setName(e.target.value)} required />
      
      <div className='dropdown'>
        <select className='form-input' value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer not to say">Prefer not to say</option>
        </select>
      </div>
      
      <input type='email' placeholder='Employee Email' value={email} className='form-input' onChange={(e) => setEmail(e.target.value)} required />
      <input type='text' placeholder='Employee Position' value={position} className='form-input' onChange={(e) => setPosition(e.target.value)} required />
      <input type='number' placeholder='Employee Salary' value={salary} className='form-input' onChange={(e) => setSalary(e.target.value)} required />
      <input type='date' placeholder='Date of Joining' value={joiningDate} className='form-input' onChange={(e) => setJoiningDate(e.target.value)} required />
      
      <div className="form-button">
        <button type="submit" onClick={handleSubmit}>Add Employee</button>
      </div>
    </div>
  );
};

export default AddEmployee;
