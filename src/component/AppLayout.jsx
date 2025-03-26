import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "./Footer.jsx";
import Header from './Header';

const AppLayout = () => {
  return (
   <>
    <Header/>
    <Outlet />
    <Footer/>
   
   
   </>
  )
}

export default AppLayout
