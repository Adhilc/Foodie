import React from 'react'
import shwarma from "../assets/shwarma.jpg"
import Pizza from "../assets/pizza.jpg"
import ChickenSkewers from "../assets/Chicken skewers.jpg"

function Card() {
  return (
    <div className='p-4 py-12 mx-auto grid md:grid-cols-3 gap-6'>
        <div className='relative rounded-xl border shadow-lg hover:scale-105 duration-300'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='px-2 pt-4 text-2xl font-bold'> shawarma with fried potatoes</p>
                <p className='px-2'>Rating:8.9</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl' src={shwarma} alt="shawarma" />
        </div>
        <div className='relative rounded-xl border shadow-lg hover:scale-105 duration-300'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='px-2 pt-4 text-2xl font-bold'>Spicy hot pizza</p>
                <p className='px-2'>Rating:7.9</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl' src={Pizza} alt="shawarma" />
        </div><div className='relative rounded-xl border shadow-lg hover:scale-105 duration-300'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='px-2 pt-4 text-2xl font-bold'> Chicken Skewers</p>
                <p className='px-2'>Rating:9.3</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl' src={ChickenSkewers} alt="shawarma" />
        </div>
    </div>
  )
}

export default Card