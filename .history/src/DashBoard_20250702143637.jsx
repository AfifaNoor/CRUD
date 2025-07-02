  // Importing necessary hooks from React and React Router
  import { useNavigate } from 'react-router-dom';
  import { useState, useEffect } from 'react';
  import './DashBoard.css';
  import AddEmployee from './AddEmployee';


  const Dashboard = () => {
    const navigate = useNavigate();

    // useState to hold the list of employee objects (fetched from localStorage)
    const [employees, setEmployees] = useState([]);

    // useEffect will run once when the component is mounted
    useEffect(() => {
      // Get the employee data from localStorage
      const storedEmployees = JSON.parse(localStorage.getItem('employeeList')) || [];

      // Set the employee data to state (if available)
      setEmployees(storedEmployees);
    }, []); // Empty dependency array → ensures it runs only once when component loads

    // Function to handle clicking "Add Employee" button
    const handleAddEmployee = () => {
      // Navigate to the "Add Employee" page
      navigate('/add-employee');
    };

    const handleDeleteEmployee =(employeeId)=>{
      // console.log("delete", employeeId)
      

    }



    return (
      <div className="dashboard-page">
        <h2>Employee Management Software</h2>
        {/* Button to navigate to the Add Employee form */}
        <div className='add-employee-btn'>
          <button className='add-employee' onClick={handleAddEmployee}>Add Employee</button>
        </div>

        {/* If there are no employees, show a message */}
        {employees.length === 0 ? (
          <p>No employees found. Please add some.</p>
        ) : (
          <div className='employee-detail'>
            {/* Loop through the employee list and display each employee’s info */}
            {employees.map((value, index) => (
              <div key={index} className="employee-card">
                <p><strong>EmployeeId:</strong> {value.employeeId}</p>
                <p><strong>Name:</strong> {value.name}</p>
                <p><strong>Email:</strong> {value.email}</p>
                <p><strong>Gender:</strong> {value.gender}</p>
                <p><strong>Position:</strong> {value.position}</p>
                <p><strong>Salary:</strong> ₹{value.salary}</p>
                <p><strong>Joining Date:</strong> {value.joiningDate}</p>
                <div>
                <button > View</button>
                <button onClick={()=>handleDeleteEmployee(value.employeeId)}> Delete </button>
              
              </div>
              </div>
            ))}
          </div>
        )}

      </div>
    );
  };

  export default Dashboard;
