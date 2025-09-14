import React from 'react'

const Category = () => {
    return (
        <section className="flex flex-col gap-10 pb-15">
            <h1 className="text-center font-family-primary text-6xl">Choose Your Sport</h1>
            <div className="grid grid-cols-3">
                <div className="bg-gray-100 flex items-center justify-center py-15 gap-2">
                    <i className="bx  bxs-basketball text-5xl"  ></i> 
                    <h1 className='font-family-secondary text-3xl tracking-wide'>
                        Basketball Shoes
                    </h1>
                </div>
                <div className="bg-gray-50 flex items-center justify-center py-15 gap-2">
                    <i className="bx  bxs-football text-5xl"  ></i> 
                    <h1 className='font-family-secondary text-3xl tracking-wide'>
                        Football Cleats
                    </h1>
                </div>
                <div className="bg-gray-100 flex items-center justify-center py-15 gap-2">
                    <i className="bx  bxs-volleyball text-5xl"  ></i> 
                    <h1 className='font-family-secondary text-3xl tracking-wide'>
                        Volleyball Shoes
                    </h1>
                </div>
                <div className="bg-gray-50 flex items-center justify-center py-15 gap-2">
                    <i className="bx  bxs-tennis-ball text-5xl"  ></i> 
                    <h1 className='font-family-secondary text-3xl tracking-wide'>
                        Tennis Shoes
                    </h1>
                </div>
                <div className="bg-gray-100 flex items-center justify-center py-15 gap-2">
                    <i className="bx  bxs-baseball text-5xl"  ></i> 
                    <h1 className='font-family-secondary text-3xl tracking-wide'>
                        Baseball Cleats
                    </h1>
                </div>
                <div className="bg-gray-50 flex items-center justify-center py-15 gap-2">
                    <i className="bx  bxs-shuttlecock text-5xl"  ></i> 
                    <h1 className='font-family-secondary text-3xl tracking-wide'>
                        Badminton Shoes
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Category;