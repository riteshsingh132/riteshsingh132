import React from 'react'
import { Outlet } from 'react-router-dom'
import MuiNavBar from '../../components/MuiNavBar'
import {Router} from"../Router"

function RootLayoutes() {
  return (
    <>
       
        <MuiNavBar/>
        <Outlet/>
    </>
  )
}

export default RootLayoutes