import React from 'react'
import featuresOfShoes from '../data/whatSetsApart'

const WhatSetsApart = () => {
  return (
    <section className=''>
        <div className="px-16 mb-6">
            <h3 className="font-family-primary text-2xl mb-2">WHAT SETS OUR SHOES APART</h3>
            <h1 className="font-family-primary text-6xl tracking-wider">DESIGNED FOR COMFORT, BUILT FOR PERFORMANCE</h1>
        </div>
        <div className="grid grid-cols-4">
        {featuresOfShoes.map((feature, idx) => (
            <div key={idx} className="relative overflow-hidden">
                <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h4 className="font-family-primary text-2xl mb-2">{feature.title}</h4>
                    <p className="text-lg">{feature.description}</p>
                </div>
            </div>
        ))}
        </div>
    </section>
  )
}

export default WhatSetsApart;