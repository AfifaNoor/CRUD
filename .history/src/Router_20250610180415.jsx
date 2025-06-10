import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider } from 'react-router-dom'
import Dashboard from './DashBoard'

const Router = createBrowserRouter ( 
    createRoutesFromElements(
        <>
            <Route path="/dashboard" element= {<Dashboard/>}/>
        </>

)) 
  return (
    <div>
      
    </div>
  )


export default Router

