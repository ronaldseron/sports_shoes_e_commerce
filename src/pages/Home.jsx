import React from 'react'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Category from './Category'
import Spotlight from '../components/Spotlight'
import Featured from '../components/Featured'
import WhatSetsApart from '../components/WhatSetsApart'
import Membership from '../components/Membership'
import SportNews from '../components/SportNews'

const Home = () => {
  return (
    <>  
        <Hero />
        <Marquee />
        <Category />
        <Spotlight />
        <Featured />
        <WhatSetsApart />
        <Membership />
        <SportNews />
    </>
  )
}

export default Home