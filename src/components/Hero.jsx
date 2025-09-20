import React from 'react'
import { useEffect, useRef } from 'react';
import heroShoe from '../assets/images/hero-shoe18.png'

const Hero = () => {
    return (
        <section className=" w-full max-w-site h-150">
            <div className='h-full flex items-center justify-center bg-bg-primary overflow-hidden'>
                <div className='w-1/2 p-16'>
                    <div className=' text-white z-10'>
                        <h3 className="text-2xl font-family-primary tracking-wide mb-2 sub-clamp ">Your Game Starts Here</h3>
                        <h1 className=" font-family-primary text-7xl tracking-wide text-balance mb-1 head-clamp">UNLEASH POTENTIAL</h1>
                        <p className="text-lg font-light mb-10 desc-clamp">Discover the latest sport shoes engineered for speed, comfort, and style. Elevate your game on and off the field.</p>
                        <div>
                            <a href="/shop" className="py-2 px-5 bg-white text-ft-primary text-lg border border-black/70 mr-2">To check latest arrivals</a>
                            <a href="/shop" className="py-2 px-5 text-white text-lg underline">Trending shoes for each sport</a>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full relative'>
                    <div className='relative w-full h-full z-10 backdrop-blur-3xl grid place-content-center'>
                        <img 
                            src={heroShoe} 
                            alt="Latest sport shoes for speed, comfort, and style" 
                            className=" object-cover "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero