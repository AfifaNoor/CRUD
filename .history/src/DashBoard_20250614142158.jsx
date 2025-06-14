import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';


const Dashboard = () => {
  const navigate = useNavigate()
  const handleAddEmployee = () => {

  // Function to navigate to the Add Employee page when button is clicked
  const handleAddEmployee = () => {
    navigate('/add-employee'); // Redirects to /add-employee
  };

  // useState to hold the list of employees (initially empty)
  const [employees, setEmployees] = useState([]);

  // useEffect runs once when the component is mounted
  useEffect(() => {
    // Get the stored employee data from localStorage (as a JSON string), then parse it to JS array
    const storedEmployees = JSON.parse(localStorage.getItem('employeeList')) || [];

    // Update the employees state with the data from localStorage
    setEmployees(storedEmployees);
  }, []); // Empty dependency array → runs only once when the component loads

  return (
    <div className="dashboard-page">
      <h2>Employee Management Software</h2>

      {/* Display the list of employees from localStorage */}
      <div className='employee-detail'>
        {employees.map((value, index) => {
          return (
            // Return employee details. Key is added for performance and avoiding React warnings.
            <div key={index} className="employee-card">
              <p><strong>Name:</strong> {value.name}</p>
              <p><strong>Email:</strong> {value.email}</p>
              <p><strong>Gender:</strong> {value.gender}</p>
              <p><strong>Position:</strong> {value.position}</p>
              <p><strong>Salary:</strong> ₹{value.salary}</p>
              <p><strong>Joining Date:</strong> {value.joiningDate}</p>
            </div>
          );
        })}
      </div>

      {/* Button to go to Add Employee page */}
      <div className='add-employee-btn'>
        <button className='add-employee' onClick={handleAddEmployee}>Add Employee</button>
      </div>
    </div>
  );
};

export default Dashboard;
