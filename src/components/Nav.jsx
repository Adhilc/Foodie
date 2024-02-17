import React from 'react'
import Hamburger from "../assets/hamburger.png"
import search from "../assets/search.svg"
import cart from "../assets/cart.png"
import close from "../assets/close.png"
import orders from "../assets/orders.png"
import help from "../assets/help.png"
import promotions from "../assets/promotions.png"
import fav from "../assets/favourite.png"
import bestone from "../assets/bestone.png"
import invite from "../assets/invite.png"
import wallet from "../assets/wallet.png"


function Nav() {
  const [hamClick,setHamClick] = React.useState(false)

  return (
    <div className='w-full mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div className='cursor-pointer'>
          <img onClick={()=>setHamClick(!hamClick)} className='w-6' src={Hamburger} />
        </div>
        <h1 className='text-2xl sm:text-4xl px-2 font-bold'>
          Grub<span className='font-bold uppercase text-orange-500'>hub</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 p rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white p-2 rounded-full'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      <div className='flex items-center px-2 bg-gray-200 rounded-full w-[200px] md:w-[400px] lg:w-[500]'>
        <img className='w-6' src={search} alt="search" />
        <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='search food' />
      </div>
      <button className='py-2 items-center hidden md:flex rounded-full font-bold  bg-white border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500'>
        <img className='w-6 mr-2' src={cart} alt="cart" />Cart
      </button>

      {hamClick && <div className='bg-black/80 w-full h-screen fixed z-10 top-0 left-0'>

      </div>}


      <div className={hamClick ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
          <img onClick={()=>setHamClick(!hamClick)} className='absolute w-5 top-5 right-4 cursor-pointer' src={close} alt="close" />
          <h2 className='text-2xl sm:text-4xl p-4'>Grub<span className='font-bold uppercase text-orange-500'>hub</span></h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
              <li className='flex text-xl py-4 cursor-pointer'><img className='w-7 mr-4' src={orders} alt="orders" />Orders</li>
              <li className='flex text-xl py-4 cursor-pointer'><img className='w-7 mr-4' src={fav} alt="orders" />Favorites</li>
              <li className='flex text-xl py-4 cursor-pointer'><img className='w-7 mr-4' src={wallet} alt="orders" />Wallet</li>
              <li className='flex text-xl py-4 cursor-pointer'><img className='w-7 mr-4' src={help} alt="orders" />Help</li>
              <li className='flex text-xl py-4 cursor-pointer'><img className='w-7 mr-4' src={promotions} alt="orders" />Promotions</li>
              <li className='flex text-xl py-4 cursor-pointer'><img className='w-7 mr-4' src={bestone} alt="orders" />Best One</li>
              <li className='flex text-xl py-4 cursor-pointer'><img className='w-7 mr-4' src={invite} alt="orders" />Invite Friends</li>
            </ul>
          </nav>
      </div>
    </div>
  ) 
}

export default Nav