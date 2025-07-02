// Importing necessary React features and hooks
import React, { useEffect, useState } from 'react';

const AddEmployee = () => {
  // useState hook to track the value of each input field individually
  const [name, setName] = useState('');             // For employee name
  const [email, setEmail] = useState('');           // For employee email
  const [gender, setGender] = useState('');         // For employee gender
  const [position, setPosition] = useState('');     // For employee position
  const [salary, setSalary] = useState('');         // For employee salary
  const [joiningDate, setJoiningDate] = useState(''); // For joining date
  const [employeeId, setemployeeId]=useState('');

  // State to store the complete list of employees
  const [employeeList, setEmployeeList] = useState([]);

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Get the employee list from localStorage if it exists, otherwise use empty array
    const storedData = JSON.parse(localStorage.getItem('employeeList')) || [];

    // Set that data in state so we can work with it
    setEmployeeList(storedData);
  }, []); // Empty dependency array means this runs only once on initial load

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submit behavior (page reload)

    // Create a new employee object from the form input values
    const newEmployee = {
      name: name.trim(),           // Trim removes extra whitespace
      email: email.trim(),
      gender,
      position,
      salary,
      joiningDate,
      employeeId

    };

    // Combine old employee list with new one
    const updatedList = [...employeeList, newEmployee];

    // Update state with the new employee list
    setEmployeeList(updatedList);

    // Save the updated list to localStorage so it persists across page refresh
    localStorage.setItem('employeeList', JSON.stringify(updatedList));

    // Console log to verify the added employee
    console.log('Employee Added:', newEmployee);

    // Optional: Clear all form fields after successful submission
    setName('');
    setEmail('');
    setGender('');
    setPosition('');
    setSalary('');
    setJoiningDate('');
    employeeId('');
  };

  // JSX: What this component renders to the browser
  return (
    <div className='add-employee-page'>
      <h2>Add Employee</h2>

      <input
        type='number'
        name="ID"
        placeholder='Employee ID'
        value={employeeId}
        className='form-input'
        onChange={(e) =>setemployeeId (e.target.value)} // Updates name id as user types
      />

      {/* Input for Name */}
      <input
        type='text'
        name="name"
        placeholder='Employee Name'
        value={name}
        className='form-input'
        onChange={(e) => setName(e.target.value)} // Updates name state as user types
      />

      {/* Dropdown for Gender */}
      <div className='dropdown'>
        <select
          className='form-input'
          value={gender}
          onChange={(e) => setGender(e.target.value)} // Updates gender state
          required
        >
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer not to say">Prefer not to say</option>
        </select>
      </div>

      {/* Input for Email */}
      <input
        type='email'
        name="email"
        placeholder='Employee Email'
        value={email}
        className='form-input'
        onChange={(e) => setEmail(e.target.value)} // Updates email state
        required
      />

      {/* Input for Position */}
      <input
        type='text'
        placeholder='Employee Position'
        value={position}
        className='form-input'
        onChange={(e) => setPosition(e.target.value)} // Updates position state
        required
      />

      {/* Input for Salary */}
      <input
        type='number'
        placeholder='Employee Salary'
        value={salary}
        className='form-input'
        onChange={(e) => setSalary(e.target.value)} // Updates salary state
        required
      />

      {/* Input for Date of Joining */}
      <input
        type='date'
        placeholder='Date of Joining'
        value={joiningDate}
        className='form-input'
        onChange={(e) => setJoiningDate(e.target.value)} // Updates joiningDate state
        required
      />

      {/* Submit Button */}
      <div className="form-button">
        <button type="submit" onClick={handleSubmit}>Add Employee</button>
      </div>
    </div>
  );
};

export default AddEmployee;
