import React from 'react'
import MembershipImage from '../assets/images/discountBG1.jpg'

const Membership = () => {
  return (
    <section className="relative">
        <img src={MembershipImage} alt="MembershipImage" className="object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-16 gap-6">
            <div className="text-white font-family-primary">
                <h1 className=" text-6xl tracking-wider mb-1">PREMIUM SHOE DISCOUNTS</h1>
                <h3 className=" text-2xl">FOR LOYALTY MEMBERS ONLY - JOIN NOW FOR SPECIAL SAVINGS!</h3>
            </div>
            <div>
                <form className="flex gap-4 h-12">
                    {/* <label htmlFor="email" className="text-white text-base mb-2 self-start">Email address*</label> */}
                    <input
                        type="email"
                        id="email"
                        placeholder="Email address*"
                        className="w-110 px-4 py-2 border border-gray-300 bg-white"
                    />
                    <button className=" px-5 bg-white text-ft-primary text-lg border border-black/70 text-nowrap">Be a member</button>
                </form>
            </div>
            <div>
                <p className="text-white text-lg text-center ">
                Members enjoy exclusive savings, early access to sales, and more. You can opt out at any time.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Membership;