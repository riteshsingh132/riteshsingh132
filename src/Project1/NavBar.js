import React from 'react'
import "./NavBar.css"
function NavBar() {
    return (
        <div className=''>

            <nav className="header">
                <div className='menu-div'>
                <ul>
                    <li><a href='.#'>Home</a></li>
                    <li><a href='.#'>About</a></li>
                    <li><a href='.#'>Product</a></li>
                </ul>

                </div>
                <div className='btn-div'>
                    <button className='log-btn'> Sign Up</button>
                    <button className='log-btn'> LogIn</button>

                </div>
            </nav>
        </div>
    )
}

export default NavBar