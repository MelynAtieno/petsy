import React from 'react'
import ShopNavbar from './ShopNavbar'
import "../Styles/ShopCats.css"

function ShopCats() {
  return (
    <div className='shopcats-page'>
        <ShopNavbar />
        <div className='cats-container'>
          <div className='cat-pet1'>
                <p>Ratings</p>
                <p>$50</p>
                <button>ADD TO CART</button>
          </div>
        </div>
    </div>
  )
}

export default ShopCats