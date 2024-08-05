import React from 'react'
import MyCarousel from './carousel'
import Slider from './slider'
import Notice from './notice'
import Duration from './duration'
import Prizes from './prizes'
import CompetenceCard from '../competenceCard'
import DivyangAbout from './divyangAbout'
import Navbar from '../navbar'

const Landing = () => {
  return (
   <Navbar>
      <MyCarousel/>
        <Slider/>
        <Notice/>
        <Duration/>
        <Prizes />
        <CompetenceCard/>
        <DivyangAbout/>
   </Navbar>
  )
}

export default Landing
