import React from 'react'
import "../Styles/Whyus.css"
import happypetowner from "../Images/happypetowner.jpg"

function Whyus() {
  return (
    <div>
      <div className='mission'>
        <div className='mission-text'>
      <h3>We Want You To Be Happy</h3>
        <p classname="why"><b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, debitis nobis. <br/>
    Non vero nulla, modi mollitia eius aut odio ex, 
    sequi nemo sed quasi <br/>inventore corrupti doloribus, rem voluptates! Beatae?
        </b></p>
        </div>
        <div className='img-mission'>
          <img className='pet-owner' src={happypetowner} alt='happypetowner'></img>
        </div>
        </div>

        <div className='our-history'>
        <h3>Our History</h3>
        <p classname="history"><b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Libero nobis iure cupiditate repellendus enim rem eligendi? <br/> Aliquam architecto ex nihil corporis possimus id esse, 
    eaque veritatis doloribus laborum quam repudiandae?</b></p>
    <div></div>
    </div>

    <div className='team'>
        <h3>Meet The Team</h3>
        
    </div>

    <div className='achievements'>
      <h3>Special Achievements</h3>
      <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magni voluptatem, beatae et magnam praesentium corporis in numquam eum voluptate blanditiis nemo, 
    aut obcaecati modi tempora labore nam. Voluptatibus, obcaecati modi!</b></p>

    </div>

    <div className='pets-sell'>
        <h3>PETS WE SELL</h3>
        <ul>
          <li><b>Cats</b></li>
          <li><b>Dogs</b></li>
          <li><b>Rabbits</b></li>
          <li><b>Parrots</b></li>
        </ul>
    </div>
    </div>
  )
}

export default Whyus