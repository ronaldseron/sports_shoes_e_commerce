import React from 'react'
import Hero from '../components/Hero'
import Shop from './Shop'
import Blog from './Blog'
import Contact from './Contact'

const Home = () => {
  return (
    <>
        <Hero />
            <div>
                Home
            </div>
        <Shop />
        <Blog />
        <Contact />
    </>
  )
}

export default Home