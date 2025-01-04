import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
} from './pages';

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/dashboard",
    element:<DashboardLayout/>
  },
  
])
function App() {
  return <RouterProvider router={router}/>
}

export default App