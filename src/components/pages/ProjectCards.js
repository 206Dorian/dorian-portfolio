import React from 'react'
import bread from '../../assets/icon.png'
import discoball from '../../assets/discoball.jpg'
import muffin from '../../assets/muffin.jpg'
import artcart from '../../assets/shopping cart for art cart.png'
import questionmark from '../../assets/questionmark.jpg'

import robot from '../../assets/robot.jpg'

const ProjectCards = () => {
  return (
    <container className = "ProjectCards">

      <div id="artcart"><a href="https://art-cart-gui-guys-production.herokuapp.com/login"> <img src={artcart} />
      Art (C)art
      <br></br>
      Connecting Art Lovers
       </a></div>

<br></br>

      <div id="bread"> <a href="https://ruxinqu.github.io/wei-full/"><img src={bread} />
         Git This Bread
         <br></br>
         Restaurant & Recipe Finder
         </a>
      </div>

      <br></br>

      <div id="weather"> <a href="https://206dorian.github.io/weather-disco/"> <img src={discoball} />
        Weather Disco
        <br></br>
        Any city 5 day forcast</a></div>

        <br></br>

      <div id="robot"> <a href="https://206dorian.github.io/robot-scheduler/"> <img src={robot} />
        Robot Scheduler - Day planner </a></div>

        <br></br>

        <div id="muffin"> <a href="https://206dorian.github.io/Barnaby/"> <img src={muffin} />
        Barnaby Family Photos</a></div>

        <br></br>

      <div id="talltalk"> <a href="https://206dorian.github.io/Tall_Talk"><img src={questionmark} />
        Tall Talk - Question Generator </a></div>

        <br></br>

    </container>
  )
}

export default ProjectCards