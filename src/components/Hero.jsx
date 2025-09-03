import React from 'react'
import heroShoe from '../assets/images/hero-shoe6.png'

const Hero = () => {
  return (
    <section className=" w-full lg:min-h-[500px] h-[85dvh]">
        <div className='h-full flex items-center justify-center border bg-bg-primary border-gray-200 overflow-hidden'>
            <div className='w-1/2 p-16'>
                <div className=' max-w-min text-white z-10'>
                    <h1 className=" font-family-primary text-7xl text-balance max-w-2xl">STEP INTO PERFORMANCE</h1>
                    <p className="text-xl mb-8">Find the perfect sports shoes for every athlete.</p>
                    <a href="/shop" className="bg-white text-ft-primary px-6 py-3 border border-black/25">Shop Now</a>
                </div>
            </div>
            <div className='w-1/2 h-full relative'>
                {/* <div className='absolute top-1/2 -translate-y-1/2 w-[15vw] h-[50vh] rounded-r-full bg-black'></div>
                <div className='absolute top-0 right-0 -translate-y-1/2 w-[20vw] h-[60vh] rounded-l-full bg-black'></div>
                <div className='absolute bottom-0 right-0 w-[10vw] h-[60vh] rounded-l-full bg-blue-900'></div> */}
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