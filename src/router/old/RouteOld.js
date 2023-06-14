import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Add from './Add'
import Edit from './Edit'
import Connect from './Connect'
// import NavBar from '../../Project1/NavBar'

function RouteOld() {
  return (
    <>
        <Router>

                <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                {/* <Route path='/signin' element={<Signin/>}/> */}
                <Route path='/connect' element={<Connect/>}> 
                    <Route path='add' element={<Add/>}/>
                    <Route path='edit' element={<Edit/>}/>

                </Route>

            </Routes>

        </Router>
    </>
  )
}

export default RouteOld



//  