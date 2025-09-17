import React from 'react'
import SpotlightShoe from '../assets/images/spotlight-shoe.jpg'

const Spotlight = () => {
  return (
    <section className="flex py-17">
        <div className='w-1/2'>
            <img src={SpotlightShoe} alt="SpotlightShoe" className="h-full object-cover"/>
        </div>
        <div className='w-1/2 flex flex-col justify-center bg-tertiary p-12'>
            <h3 className="font-family-primary text-2xl mb-2">SHOE OF THE MONTH</h3>
            <h1 className='font-family-primary text-6xl text-balance tracking-wider mb-2'>WANT TO KNOW MORE ABOUT OUR SPOTLIGHT SHOE?</h1>
            <p> This month's featured model combines innovative design and superior comfort, making it the top choice for athletes and enthusiasts alike.</p>
            <div className="flex gap-4 mt-5">
                <button className="py-2 px-5 bg-ft-primary text-white text-lg border border-black/70 ">Check shoe</button>
                <button className="py-2 px-5 bg-white text-ft-primary text-lg border border-black/70 ">Discover similar shoe</button>
            </div>
        </div>
    </section>
  )
}

export default Spotlight;