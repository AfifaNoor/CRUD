import React from 'react';
import './AdminPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit =((e)=>{
    e.preventDefault();

   const hardcodedUsername = "Admin";
   const hardcodedPassword = "1234567";

   if ( username=== hardcodedUsername && password === hardcodedPassword){
    alert("login successfull")
    navigate('/dashboard');
   }else{
    alert ("invalid credential")
   }
  })
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' className='form-input' value={username} onChange={(e)=> setUsername(e.target.value)} required/>
      <input type='password' placeholder='Password'  className='form-input'  value={password} onChange={(e)=> setPassword(e.target.value)}required/>
      <div className="form-button">
        <button type="submit" >Login</button>
      </div>
      </form>
      
    </div>
  );
};
export default AdminPage;