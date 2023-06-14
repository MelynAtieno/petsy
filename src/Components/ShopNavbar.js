import React from 'react'
import "../Styles/ShopNavbar.css"
import { SidebarData } from './SidebarData'

function ShopNavbar() {
  return (
    <div className='sidenav-container'>
        <div className='sidenav'>
          <ul>
            {SidebarData.map((val,key)=>{
              return(
                <li onClick={() => (window.location.pathname = val.link)}>
                   {" "}
                   <div>{val.icon}</div>{" "}
                   <div>{val.title}</div>
                    </li>
              )
            } )}   
            </ul> 
        </div>
    </div>
  )
}

export default ShopNavbar