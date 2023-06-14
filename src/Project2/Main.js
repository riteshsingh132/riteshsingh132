import React from 'react'
import MuiNavBar from './components/MuiNavBar'
import MuiForm from './components/MuiForm'

import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/Router'


function Main() {
  return (
    <>  
      
        {/* <RouterProvider Router={Router}/> */}
        <RouterProvider router={Router}/>
       {/* <MuiForm/> */}
    </>
  )
}

export default Main