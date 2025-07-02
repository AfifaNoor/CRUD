// Importing necessary hooks from React and React Router
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './DashBoard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employeeList')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleAddEmployee = () => {
    navigate('/add-employee');
  };

  // View employee details
  const handleViewEmployee = (index) => {
    const employee = employees[index];
    alert(`
      Name: ${employee.name}
      Email: ${employee.email}
      Gender: ${employee.gender}
      Position: ${employee.position}
      Salary: ₹${employee.salary}
      Joining Date: ${employee.joiningDate}
    `);
  };

  // Delete employee
  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
    localStorage.setItem('employeeList', JSON.stringify(updatedEmployees));
  };

  return (
    <div className="dashboard-page">
      <h2>Employee Management Software</h2>

      <div className="add-employee-btn">
        <button className="add-employee" onClick={handleAddEmployee}>Add Employee</button>
      </div>

      {employees.length === 0 ? (
        <p>No employees found. Please add some.</p>
      ) : (
        <div className="employee-detail">
          {employees.map((value, index) => (
            <div key={index} className="employee-card">
              <p><strong>Name:</strong> {value.name}</p>
              <p><strong>Email:</strong> {value.email}</p>
              <p><strong>Gender:</strong> {value.gender}</p>
              <p><strong>Position:</strong> {value.position}</p>
              <p><strong>Salary:</strong> ₹{value.salary}</p>
              <p><strong>Joining Date:</strong> {value.joiningDate}</p>

              <div className="employee-actions">
                <button onClick={() => handleViewEmployee(index)}>View</button>
                <button onClick={() => handleDeleteEmployee(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
