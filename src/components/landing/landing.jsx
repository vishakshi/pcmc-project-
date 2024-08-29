import React from 'react'
import MyCarousel from './carousel'
import Slider from './slider'
import Notice from './notice'
import Duration from './duration'
import Prizes from './prizes'
import CompetenceCard from '../competenceCard'
import DivyangAbout from './divyangAbout'
import Navbar from '../navbar'
import Testimonials from './testimonials'
import Rule from './rule'
import Support from './supportUs'
import Jobs from './jobs'

const Landing = () => {
  return (
   <Navbar>
      <MyCarousel/>
        <Slider/>
        <Rule />
        <Notice/>
        <Duration/>
        <Support/>
        <Prizes />
        <CompetenceCard/>
        <Testimonials/>
        <DivyangAbout/>
        <Jobs/>
   </Navbar>
  )
}

export default Landing
