import React from 'react'
import Hero from '../components/Hero'
import Category from './Category'
import Spotlight from '../components/Spotlight'
import Featured from '../components/Featured'
import WhatSetsApart from '../components/WhatSetsApart'
import Membership from '../components/Membership'
import SportNews from '../components/SportNews'

const Home = () => {
  return (
    <>  
        <div>
          <Hero />
          <div className="w-full h-15 bg-ft-primary font-family-primary text-white flex items-center text-2xl overflow-hidden relative">
            <div className="marquee whitespace-nowrap flex">
              <span>
                STEP UP // CHUCHU // BLABAL // NYEHEHE // WHAT // STEP UP // CHUCHU // BLABLA // NYEHEHE // WHAT
              </span>
              <span className="ml-8">
                STEP UP // CHUCHU // BLABAL // NYEHEHE // WHAT // STEP UP // CHUCHU // BLABLA // NYEHEHE // WHAT
              </span>
            </div>
          </div>
        </div>
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