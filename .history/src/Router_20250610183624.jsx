import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route  } from 'react-router-dom'
import Dashboard from './DashBoard'
import AdminPage from './AdminPage'
// import { RouterProvider } from 'react-router-dom';
// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const Router = createBrowserRouter ( 
    createRoutesFromElements(
        <>
        <Route>
            <Route path="/dashboard" element= {<Dashboard/>}/>
            <Route path="/adminpage" element={<AdminPage/>} />
        </Route>
            
        </>

));
 


export default Router

