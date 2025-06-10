import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider } from 'react-router-dom'
import Dashboard from './DashBoard'
import AdminPage from './AdminPage'

const Router = createBrowserRouter ( 
    createRoutesFromElements(
        <>
            <Route path="/dashboard" element= {<Dashboard/>}/>
            <Route path="/adminpage" element={<AdminPage/>} />
        </>

));
 


export default Router

