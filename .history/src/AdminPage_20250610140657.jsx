import React from 'react';
import './AdminPage.css';

const AdminPage = () => {

  const handleSubmit =((e)=>{

   e.preventDefault();

   if ( username)

  })


  
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <input type='text' placeholder='Username' className='form-input' required/>
      <input type='password' placeholder='Password'  className='form-input' required/>
      <div className="form-button">
        <button type="submit" >Create My Account</button>
      </div>
    </div>
  );
};
export default AdminPage;