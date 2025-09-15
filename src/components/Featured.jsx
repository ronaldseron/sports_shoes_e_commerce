import React from 'react'
import FeaturedShoes from '../data/featuredShoes.js'

const Featured = () => {
  return (
    <section className=''>
        <div className="px-16 mb-6">
            <h3 className="font-family-primary text-2xl mb-2">THIS SEASONS'S TOP PICKS</h3>
            <h1 className="font-family-primary text-6xl tracking-wider">DISCOVER TRENDING SPORTS GEAR PICKED BY TOP ATHLETES</h1>
        </div>
        <div className="grid grid-cols-6 h-70 gap-2 px-2">
            {FeaturedShoes.map((shoe, idx) => (
                <div key={idx} className={`h-full flex items-center justify-center bg-gray-50 p-10`}>
                    <img src={shoe.image} alt={`shoe-${idx}`} />
                </div>
            ))}
        </div>
    </section>
  )
}

export default Featured;