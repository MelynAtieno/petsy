import React from 'react'
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <div>
        <nav>
            <h1><b>PETSY</b></h1>
            <ul>

                <li><a href='home'><b>HOME</b></a></li>
                <li><a href='whyus'><b>WHY US?</b></a></li>
                <li><a href='contact'><b>CONTACT</b></a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar