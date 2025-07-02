import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Dashboard from './DashBoard'
import AdminPage from './AdminPage'
import AddEmployee from './AddEmployee';
import EmployeeDetail from './EmployeeDetail';


const Router =createBrowserRouter ( 
    createRoutesFromElements(
        <>
            <Route path="/dashboard" element= {<Dashboard/>}/>
            <Route path="/" element={<AdminPage/>} />
            <Route path='/add-employee' element={<AddEmployee/>} />
             {/* ✅ Dynamic route for viewing employee detail by index */}
            <Route path='/employee-detail/:id' element={<EmployeeDetail/>}/>
            
        </>

));
 


export default Router;

