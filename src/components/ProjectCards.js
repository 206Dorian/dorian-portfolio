import React from 'react'
import bread from '../assets/icon.png'
import discoball from '../assets/discoball.jpg'
import muffin from '../assets/muffin.jpg'
import artcart from '../assets/shopping cart for art cart.png'

const ProjectCard = () => {
  return (
    <>

      <div id="artcart"> <img src={artcart} />
        Art (C)art </div>


      <div id="bread"> <img src={bread} />
        Git This Bread
      </div>


      <div id="weather"> <img src={discoball} />
        Weather Disco </div>


      <div id="muffins"> <img src={muffin} />
        Muffins Attack</div>


    </>
  )
}

export default ProjectCard