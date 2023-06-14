import React from 'react'
import { Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h1>This is Contactus</h1>
        <Outlet/> 
       

    </div>
  )
}

export default Contact