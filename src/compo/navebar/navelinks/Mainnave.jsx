import React from 'react'
import Contact from '../contact/Contact'
import About from '../About/About'
import Home from '../home/Home'
import Navelinks from './Navelinks'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './navelink.css'

const Mainnave = () => {
    const browser = createBrowserRouter([
        { 
         path:'/', 
         element:<><Navelinks/><Home/></>  ,
        },
        {
            path:'/contact',
            element:<><Navelinks/><Contact/></>  ,
        },
        {
            path:'/about',
            element:<><Navelinks/><About/></>  ,
        },

    ])
    return (
        <>
        <RouterProvider router={browser}/>
        </>
    )
}

export default Mainnave