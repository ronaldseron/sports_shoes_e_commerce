import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="h-[15dvh] bg-gray-50 text-primary px-8  flex flex-col justify-center z-50">
            <div className='flex justify-between items-center'>
                <h1 className="text-xl font-bold">SportsShoes</h1>
                <ul className="flex gap-6">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className='flex justify-center items-center'>
                <ul className="flex gap-6">
                    <li><Link to="/">Basketbal</Link></li>
                    <li><Link to="/shop">Football</Link></li>
                    <li><Link to="/about">Volleyball</Link></li>
                    <li><Link to="/blog">Tennis</Link></li>
                    <li><Link to="/contact">Boxing</Link></li>
                    <li><Link to="/contact">Running</Link></li>
                    <li><Link to="/contact">Badminton</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar