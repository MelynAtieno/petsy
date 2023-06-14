import React from 'react'
import "../Styles/ShopNavbar.css"
import { SidebarData } from './SidebarData'

function ShopNavbar() {
  return (
    <div className='sidenav-container'>
        <div className='sidenav'>
            {SidebarData.map((val,key))}   
        </div>
    </div>
  )
}

export default ShopNavbar