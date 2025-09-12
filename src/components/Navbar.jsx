import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="h-[15dvh] bg-gray-50 text-primary px-8 flex flex-col justify-evenly z-50">
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-8'>
                    <h1 className="text-xl font-bold">SportsShoes</h1>
                    <ul className="flex gap-6 text-[17px]">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <button className='border border-gray-200 w-9 h-9 grid place-content-center rounded-full'>
                    <i className='bx  bx-user text-xl mb-0.5'  ></i> 
                </button>
            </div>
            <div className='flex justify-center items-center'>
                <ul className="flex gap-8 text-[17px] font-light">
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
                    <li>
                        <Link to="/contact" className="flex items-center gap-1.5">
                        <i className='bx  bxs-golf-ball text-2xl'  ></i> 
                        Golf
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar