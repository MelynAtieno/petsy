import React from 'react'
import "../Styles/Whyus.css"

function Whyus() {
  return (
    <div>
      <div className='mission'>
      <h3>We Want You To Be Happy</h3>
        <p classname="why"><b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, debitis nobis. <br/>
    Non vero nulla, modi mollitia eius aut odio ex, 
    sequi nemo sed quasi inventore corrupti doloribus, rem voluptates! Beatae?
        </b></p>
        </div>

        <div className='serve'>
        <h3>OUR SERVICES</h3>
        <p classname="services"><b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Libero nobis iure cupiditate repellendus enim rem eligendi? <br/> Aliquam architecto ex nihil corporis possimus id esse, 
    eaque veritatis doloribus laborum quam repudiandae?</b></p>
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