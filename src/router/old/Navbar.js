import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>

            <Link to="/">Home</Link>
                
            <Link to="/about">About</Link>
                
            <Link to="/contact">Conatct</Link>

            <Link to="/connect/add">Connect</Link>
            
            <Link to="/connect/edit">Connect</Link>

        </div>
    )
}

export default Navbar