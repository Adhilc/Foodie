import React from 'react'
import cover from "../assets/cover.jpg"

function Hero() {
  return (
    <div className=' mx-auto '>
        <div className='relative'>
            <div data-aos="fade-up" className=' absolute w-full max-h-[560px] top-44 text-gray-200 flex flex-col justify-center sm:top-3/4'>
                <h1 className='px-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold'>THE<span className='text-orange-500 ml-3'>BEST</span></h1>
                <h1 className='px-7 py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-500'>FOOD<span className='text-gray-200 ml-3'>DELIVERED</span></h1>
            </div>
            <img className='w-full p-4 object-cover' src={cover} alt="cover" />
        </div>
    </div>
  )
}

export default Hero