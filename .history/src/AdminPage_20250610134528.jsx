import React from 'react';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <input type='text' placeholder='Username' className='form-input' required/>
      <input type='password' placeholder='Password'  className='form-input' required/>
      {/* Add more admin functionalities here */}
    </div>
  );
};
export default AdminPage;