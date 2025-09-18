import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className=" max-w-site mx-auto bg-gray-50 text-primary px-8 py-4 flex flex-col gap-2 z-50">
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-8'>
                    <h1 className="text-xl font-bold">SportsShoes</h1>
                    <ul className="flex gap-6 text-[17px]">
                        {/* <li><Link to="/">Home</Link></li> */}
                        <li className="flex items-center gap-1">
                            Sports
                            <i className="bx  bx-caret-down text-xl"  ></i> 
                        </li>
                        <li>Help & Contact</li>
                        <li className="flex items-center gap-1">
                            About SportsShoes
                            <i className="bx  bx-caret-down text-xl"  ></i> 
                        </li>
                    </ul>
                </div>
                <div className=' flex items-center gap-5'>
                    <a className='py-2 px-5 bg-black text-white text-lg'>
                        Pick you shoes now
                    </a>
                    <button className='border border-gray-200 w-9 h-9 grid place-content-center rounded-full'>
                        <i className='bx  bx-cart text-lg'  ></i> 
                    </button>
                    <button className='border border-gray-200 w-9 h-9 grid place-content-center rounded-full'>
                        <i className='bx  bx-user text-lg mb-0.5'  ></i> 
                    </button>
                </div>
            </div>
            {/* <div className='flex justify-center items-START py-3'>
                <ul className="flex gap-8 font-light">
                    <li>
                        <Link to="/" className="flex items-center gap-1.5">
                        <i className="bx  bxs-basketball text-2xl"  ></i> 
                        Basketball
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" className="flex items-center gap-1.5">
                        <i className="bx  bxs-football text-2xl"  ></i> 
                        Football
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="flex items-center gap-1.5">
                        <i className='bx  bxs-volleyball text-2xl'  ></i> 
                        Volleyball
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="flex items-center gap-1.5">
                        <i className='bx  bxs-tennis-ball text-2xl'  ></i> 
                        Tennis
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="flex items-center gap-1.5">
                        <i className='bx  bxs-shuttlecock text-2xl'  ></i> 
                        Badminton
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="flex items-center gap-1.5">
                        <i className='bx  bxs-baseball text-2xl'  ></i> 
                        Baseball
                        </Link>
                    </li>
                </ul>
            </div> */}
        </nav>
    )
}

export default Navbar