import React from 'react';
import './AdminPage.css';

const AdminPage = () => {

  const handleSubmit =((e)=>{
    e.preventDefault();

   const hardcodedUsername = "Admin";
   const hardcodedPassword = "1234567";

   if ( username==="Admin" && password ==="1234567"){
    alert("login successfull")
   }else{
    alert ("invalid credential")
   }
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