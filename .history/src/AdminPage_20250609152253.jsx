import React from 'react';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <input type='text' placeholder='Username' className='username'/>
      {/* Add more admin functionalities here */}
    </div>
  );
};
export default AdminPage;