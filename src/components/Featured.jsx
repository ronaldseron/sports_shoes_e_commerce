import React from 'react'
import FeaturedShoes from '../data/featuredShoes.js'

const Featured = () => {
  return (
    <section className=' py-17'>
        <div className="px-16 mb-6">
            <h3 className="font-family-primary text-2xl mb-2">THIS SEASONS'S TOP PICKS</h3>
            <h1 className="font-family-primary text-6xl tracking-wider">DISCOVER TRENDING SPORTS GEAR PICKED BY TOP ATHLETES</h1>
        </div>
        <div className="grid grid-cols-4 px-8 gap-8">
            {FeaturedShoes.map((shoe, idx) => (
                <div key={idx} className={` flex flex-col`}>
                    <div className="h-70 flex items-center justify-center bg-gradient-to-r from-gray-200 via-gray-50 to-gray-200">
                        <img src={shoe.image} alt={`shoe-${idx}`} className="w-50"/>
                    </div>
                    <div className="px-2 py-4 rounded-t-2xl">
                        <h1 className="text-2xl font-semibold mb-4">{shoe.title}</h1>
                        <p className="opacity-70">{shoe.desc}</p>
                        <div className="flex items-center justify-between mt-8">
                            <div>
                                <h5 className="text-xs font-semibold">PRICE</h5>
                                <h1 className="text-lg font-bold">{shoe.price}</h1>
                            </div>
                            <button className="px-6 py-3 font-semibold bg-gray-100 rounded-lg">Add to cart</button>    
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="bg-tertiary py-34 flex items-center mt-34">
            <div className="px-16 mb-6">
                <h3 className="font-family-primary text-2xl mb-2">WHAT OUR CUSTOMERS SAY</h3>
                <h1 className="font-family-primary text-6xl tracking-wider">"DISCOVER TRENDING SPORTS GEAR PICKED BY TOP ATHLETES"</h1>
                <div className="flex items-center gap-2 mt-4">
                    <div className="w-12 h-12 grid place-content-center bg-black text-white rounded-full">U</div>
                    <div>
                        <h1 className="font-semibold">Ronald Seron</h1>
                        <h3>SS satisfied customer</h3>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-12">
                    <button className="bg-white h-10 w-10 rounded-full">
                        <i className="bx bx-chevron-left text-2xl mt-1"></i>
                    </button>
                    <button className="bg-white h-10 w-10 rounded-full">
                        <i className="bx bx-chevron-right text-2xl mt-1"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured;