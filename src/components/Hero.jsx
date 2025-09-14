import React from 'react'
import { useEffect, useRef } from 'react';
import heroShoe from '../assets/images/hero-shoe18.png'

const Hero = () => {
    return (
        <section className=" w-full max-w-site h-140">
            <div className='h-full flex items-center justify-center bg-bg-primary overflow-hidden'>
                <div className='w-1/2 p-16'>
                    <div className=' text-white z-10'>
                        <h3 className="text-2xl font-family-primary tracking-wide mb-2"
                        style={{ fontSize: 'clamp(0.7rem, 1.8vw, 1.5rem)' }}>— Your Game Starts Here</h3>
                        <h1 className=" font-family-primary text-7xl tracking-wide text-balance mb-1"
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>UNLEASH POTENTIAL</h1>
                        <p className="text-lg font-light mb-10"
                        style={{ fontSize: 'clamp(12px, 1.3vw, 18px)' }}>Discover the latest Nike sports shoes engineered for speed, comfort, and style. Elevate your game on and off the field.</p>
                        <a href="/shop" className="py-2 px-5 bg-white text-ft-primary text-lg border border-black/70">To check latest arrivals</a>
                    </div>
                </div>
                <div className='w-1/2 h-full relative'>
                    <div className='relative w-full h-full z-10 backdrop-blur-3xl grid place-content-center'>
                        <img 
                            src={heroShoe} 
                            alt="Hero Page" 
                            className=" object-cover "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero