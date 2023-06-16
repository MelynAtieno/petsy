import React from 'react'
import "../Styles/ShopNavbar.css"
import { SidebarData } from './SidebarData'

function ShopNavbar() {
  return (
    <div className='sidenav-container'>
        <div className='sidenav'>
          <ul className='sidenav-list'>
            {SidebarData.map((val,key)=>{
              return(
                <li key={key} className='sidenav-items' onClick={() => (window.location.pathname = val.link)}>
                   <div id='icon'>{val.icon}</div>
                   <div id='title'><b>{val.title}</b></div>
                    </li>
              )
            } )}   
            </ul> 
        </div>
    </div>
  )
}

export default ShopNavbar