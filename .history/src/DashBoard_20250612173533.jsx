import React from 'react';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
  const navigate = useNavigate()
  const handleAddEmployee = () => {
    navigate('/add-employee');
    
  };
  const newArray = [
    { name: 'Afifa Noor', email: 'afifanoor1011@gmail.com' },
    { name: 'John Doe', email: 'johndoe@example.com' } 
  ];

  return (
    <div className="dashboard-page">
      <h2>Employee Management Software</h2>
      <div className='add-employee-btn'>
        <button className='add-employee' onClick={handleAddEmployee}>Add Employee</button>
      </div>
      <div className='employee-detail'>
       
        
      </div>
      
    </div>
  );
};

export default Dashboard;