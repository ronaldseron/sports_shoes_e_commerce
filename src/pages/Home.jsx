import React from 'react'
import Hero from '../components/Hero'
import Category from './Category'
import Spotlight from '../components/Spotlight'

const Home = () => {
  return (
    <>  
        <div>
          <Hero />
          <div className="w-full h-15 bg-ft-primary font-family-primary text-white flex items-center justify-center text-2xl">
              <h1>STEP UP // CHUCHU // BLABAL // NYEHEHE // WHAT // STEP UP // CHUCHU // BLABLA // NYEHEHE // WHAT</h1>
          </div>
        </div>
        <Category />
        <Spotlight />
    </>
  )
}

export default Home