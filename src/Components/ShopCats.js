import React from 'react'
import ShopNavbar from './ShopNavbar'
import "../Styles/ShopCats.css"

function ShopCats() {
  return (
    <div className='shopcats-page'>
        <ShopNavbar />
        <div className='cats-container'>SHOPCATS</div>
    </div>
  )
}

export default ShopCats