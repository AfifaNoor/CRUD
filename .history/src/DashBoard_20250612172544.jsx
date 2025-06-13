import React from 'react';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
  const navigate = useNavigate()
  const handleAddEmployee = () => {
    navigate('/add-employee');
    
  };
  

  return (
    <div className="dashboard-page">
      <h2>Employee Management Software</h2>
      <div className='add-employee-btn'>
        <button className='add-employee' onClick={handleAddEmployee}>Add Employee</button>
      </div>
      
    </div>
  );
};

export default Dashboard;