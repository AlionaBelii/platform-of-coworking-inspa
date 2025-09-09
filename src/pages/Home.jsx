import React from 'react'
import Hero from '../components/Hero'
import PopularCategories from '../components/PopularCategories'
import Partners from '../components/Partners'
import HowItWorks from '../components/HowItWorks'
import FeaturedDesigners from '../components/FeaturedDesigners'
import Testimonials from '../components/Testimonials'
import ReadyToStart from '../components/ReadyToStart'

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularCategories />
      <Partners />
      <HowItWorks />
      <FeaturedDesigners />
      <Testimonials />
    </div>
    
  )
}

export default Home
