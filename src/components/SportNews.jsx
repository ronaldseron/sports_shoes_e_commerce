import React from 'react'
import newsSection from '../data/newsSection'

const SportNews = () => {
    return (
	    <section className="">
            <div className=" p-16 ">
                <h3 className="font-family-primary text-2xl mb-10">EXCITING SPORT NEWS $ UPDATES</h3>
                {/* <h1 className='font-family-primary text-6xl text-balance tracking-wider mb-10'>STAY CONNECTED WITH THE LATEST IN YOUR FAVORITE SPORTS</h1> */}
                <div className="grid grid-cols-3">
                    {newsSection.map((section, idx) => (
                        <nav key={idx} aria-label={section.title}>
                            <h4 className="font-family-primary text-lg mb-6">{section.title}</h4>
                            <ul className="flex flex-col gap-4">
                                {section.links.map((link, idx) => (
                                    <li key={idx} className=" text-lg font-light">
                                        <a href="" className="hover:underline">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
            </div>
	    	</div>
            <div className="w-full h-15 bg-ft-primary font-family-primary text-white flex items-center text-2xl overflow-hidden relative">
                <div className=" whitespace-nowrap flex px-4">
                <span>
                    STEP UP // CHUCHU // BLABAL // NYEHEHE // WHAT // STEP UP // CHUCHU // BLABLA // NYEHEHE // WHAT // STEP UP // 
                </span>
                </div>
            </div>
	    </section>
    )
}

export default SportNews