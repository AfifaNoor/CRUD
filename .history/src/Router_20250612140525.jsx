import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Dashboard from './DashBoard'
import AdminPage from './AdminPage'


const Router =createBrowserRouter ( 
    createRoutesFromElements(
        <>
            <Route path="/dashboard" element= {<Dashboard/>}/>
            <Route path="/" element={<AdminPage/>} />
            <Route path='/add-employee' element={<Dashboard/>} />
            
        </>

));
 


export default Router;

