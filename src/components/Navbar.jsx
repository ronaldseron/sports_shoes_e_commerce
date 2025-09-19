import { useState } from 'react'
import { Link } from 'react-router-dom'
import dropDownContent from '../data/dropDownContent.js'

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(null);

    return (
        <nav className="relative h-19 max-w-site mx-auto bg-gray-50 text-primary px-8 flex flex-col gap-2 z-50">
            <div className='h-full flex justify-between items-center'>
                <div className='h-full flex items-center gap-8'>
                    <h1 className="text-xl font-bold">SportsShoes</h1>
                    <ul className=" h-full flex text-[17px]">
                        {/* <li><Link to="/">Home</Link></li> */}
                        <li className="flex items-center gap-1 px-3 cursor-pointer border-b-2 hover:border-black border-gray-50"
                            onMouseEnter={() => setShowDropdown('Sports')}
                            onMouseLeave={() => setShowDropdown(null)}
                        >
                            Sports
                            <i className={`bx bx-caret-down text-xl transition-transform duration-300 ${
                                showDropdown === 'Sports' ? 'rotate-180' : ''
                                }`}
                            ></i>
                        </li>
                        <li className="flex items-center px-3 border-b-2 hover:border-black border-gray-50">
                            <a href="">
                                Help & Contact
                            </a>
                        </li>
                        <li className="flex items-center gap-1 px-3 cursor-pointer border-b-2 hover:border-black border-gray-50"
                            onMouseEnter={() => setShowDropdown('About')}
                            onMouseLeave={() => setShowDropdown(null)}
                        >
                            About SportsShoes
                            <i className={`bx bx-caret-down text-xl transition-transform duration-300 ${
                                showDropdown === 'About' ? 'rotate-180' : ''
                                }`}
                            ></i>
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
            {showDropdown === 'Sports' && (
                <div className="absolute left-0 right-0 top-full px-16 py-8 bg-gray-50 z-50"
                    onMouseEnter={() => setShowDropdown('Sports')}
                    onMouseLeave={() => setShowDropdown(null)}
                >
                    <div className="grid grid-cols-3">
                        {dropDownContent.Sports.map((item, idx) => (
                            <div key={idx} className="mb-24">
                                <h4 className="font-family-primary text-lg mb-4">{item.title}</h4>
                                <ul className="flex flex-col gap-2">
                                    {item.links.map((link, linkIdx) => (
                                        <li key={linkIdx} className="text-lg font-light">
                                            <Link to={link.to} className="hover:underline">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {showDropdown === 'About' && (
                <div className="absolute left-0 right-0 top-full px-16 py-8 bg-gray-50 z-50"
                    onMouseEnter={() => setShowDropdown('About')}
                    onMouseLeave={() => setShowDropdown(null)}
                >
                    <div className="grid grid-cols-2">
                        {dropDownContent.About.map((item, idx) => (
                            <div key={idx} className="mb-24">
                                <h4 className="font-family-primary text-lg mb-4">{item.title}</h4>
                                <Link to={item.link.to} className="text-lg font-light">
                                    {item.link.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
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