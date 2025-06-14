import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';


const Dashboard = () => {
  const navigate = useNavigate()
  const handleAddEmployee = () => {
    navigate('/add-employee');
    
  };
  const [employees, setEmployees] = useState([]);
  // const newArray = [
  //   { name: 'Afifa Noor', email: 'afifanoor1011@gmail.com' },
  //   { name: 'John Doe', email: 'johndoe@example.com' } 
  // ];
  useEffect(() => {
    // Retrieve array from localStorage on component mount
    const storedEmployees = JSON.parse(localStorage.getItem('employeeList')) || [];
    setEmployees(storedEmployees);
  }, []);
  
  return (
    <div className="dashboard-page">
      <h2>Employee Management Software</h2>
       <div className='employee-detail'>
        {employees.map((value)=>{
          return (<>
            <p>{value.name}</p>
                  <p>{value.email}</p>
          </>
                  )
            
        })}
      </div>
      <div className='add-employee-btn'>
        <button className='add-employee' onClick={handleAddEmployee}>Add Employee</button>
      </div>
     
      
    </div>
  );
};

export default Dashboard;