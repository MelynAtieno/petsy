import React from 'react'
import "../Styles/Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
        <nav className='home-nav'>
            <h1 className='petsy-nav'><b>PETSY</b></h1>
            
                <Link to='/home'className='nav-item'><b>HOME</b></Link>
                <Link to='/whyus?' className='nav-item'><b>WHY US?</b></Link>
                <Link to='/contact' className='nav-item'><b>CONTACT</b></Link>
          
        </nav>
    </div>
  )
}

export default Navbar